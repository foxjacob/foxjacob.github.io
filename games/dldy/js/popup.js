var popup_timeout;
var dismiss_interval;
var popup = {
    lang: {
        "Cancel": "Cancel",
        "OK": "OK",
    },


    init: function(){
        var ff = document.getElementById('popup-out')
        if (!ff){
            var ff = document.createElement('div');
            ff.setAttribute('id','popup-out');
            ff.setAttribute('class','popup-base');
            document.body.appendChild(ff);
        }
        return ff;
    },

    load: function(){
        popup.init();
    },
           
    mask: function(type) {
        var ff = document.getElementById('popup-out');
        if(type == "show"){
            ff.className = 'popup-base popup-visible';
        }else if(type == "hidden"){
            ff.className = ' ';
        }
    },
        
    build: function(e,f){
        popup.init();
        var prompt = '';
        if (f.type == 'prompt'){
            prompt = '<div class="dialog-prompt">'+'<input id="dialog-input" type="text" />'+'</div>';
        }

        var buttons = '';
        if (f.type != 'signal' && f.type != 'async'  && f.type != 'loading'){
            buttons = '<div class="dialog-buttons">';
            if (f.type == 'alert'){
                buttons += '<button id="alert-ok">' + popup.lang["OK"]+ '</button>';
            }

            if (f.type == 'prompt' || f.type == 'confirm'){
                buttons += '<button id="'+f.type+'-cancel" class="cancel">' + popup.lang["Cancel"]+ '</button>';
                buttons += '<button id="'+f.type+'-ok">' + popup.lang["OK"]+ '</button>';
            }
			
            buttons += '</div>';
        }

        var box = '<div id="popup-bg"></div>';
		
        box += '<div class="dialog popup" id="dialog-popup" >';

        var close_btn = "";
        if (!f.hasOwnProperty("compact") || !f.compact) {
          var close_btn = '<span id="popup-close" class="popup-close"></span>';
        }

        var indicator = "";
        if (f.hasOwnProperty('indicator') && f.indicator) {
          var indicator = '<div id="dismiss-indicator" align="center" style="display: none;"></div>';
        }

        box += close_btn;
        box += '<div class="dialog-inner">';
        box += '<div id="dialog-content" class="dialog-content">' + e + prompt + indicator + '</div>';
        box += buttons + '</div>' + '</div>';

        // clear the timeout if it's already been activated
        if (popup_timeout){
          clearTimeout(popup_timeout);
        }

        var ff = document.getElementById('popup-out');
        ff.innerHTML = box;
    		
        popup.set_pos();
    		
        ff.className = 'popup-base popup-visible';
   		
        // close on "popup-close" click
        if (document.getElementById('popup-close')) {
          var close = document.getElementById('popup-close');
          close.addEventListener("click",function(){
            popup.destroy(f.type);
            if (f.type == 'prompt' || f.type == 'confirm' || f.type == 'signal'){
              if (f.callback) {
                f.callback(false);
              }
            }
          }, false);		
        }

        // close on background click
        if (!f.hasOwnProperty("insist") || !f.insist) {
          var g = document.getElementById('popup-bg');
          g.addEventListener("click",function(){
            popup.destroy(f.type);
            if (f.type == 'prompt' || f.type == 'confirm' || f.type == 'signal'){
              if (f.callback) {
                f.callback(false);
              }
            }
          }, false);
        }

        // listeners for button actions
        if (f.type == 'alert'){
            g.addEventListener("click", function(){
                f.callback();
            }, false);
                        
            // return true
            var h = document.getElementById('alert-ok');
            h.addEventListener("click", function(){
                popup.destroy(f.type);
                f.callback();
            }, false);

            // listen for enter key or space, close it
            document.onkeyup = function(e){
                if (e.keyCode == 13 || e.keyCode == 32){
                    popup.destroy(f.type);
                    f.callback();
                }
            };
        }

        if (f.type == 'confirm'){
            // return false
            var h = document.getElementById('confirm-cancel');
            h.addEventListener("click", function(){
                popup.destroy(f.type);
                f.callback(false);
            }, false);


            // return true
            var i = document.getElementById('confirm-ok');
            i.addEventListener("click",function(){
                popup.destroy(f.type);
                f.callback(true);
            }, false);

            // listen for enter key or space, close it & return true
            document.onkeyup = function(e){
                if (e.keyCode == 13 || e.keyCode == 32){
                    popup.destroy(f.type);
                    f.callback(true);
                }
            };
        }

        if (f.type == 'prompt'){
            // focus on input
            var pi = document.getElementById('dialog-input');
            setTimeout(function(){
                pi.focus();
                pi.select();
            },100);

            // return false
            var h = document.getElementById('prompt-cancel');
            h.addEventListener("click",function(){
                popup.destroy(f.type);
                f.callback(false);
            }, false);

            // return	contents of input box
            var j = document.getElementById('dialog-input');
            var i = document.getElementById('prompt-ok');
            i.addEventListener("click",function(){
                popup.destroy(f.type);
                f.callback(j.value);
            }, false);

            // listen for enter
            document.onkeyup = function(e){
                if (e.keyCode == 13){
                    popup.destroy(f.type);
                    f.callback(j.value);
                }
            };
        }

        // close after f.timeout ms
        if (f.type == 'signal' && f.timeout != 0){
            if (document.getElementById("dismiss-indicator")) {
              document.getElementById("dismiss-indicator").style.display = "";
              dismiss_interval = setInterval(function() {
                document.getElementById("dismiss-indicator").innerHTML += "✾&nbsp&nbsp";
              }, 1000);
            }
            popup_timeout = setTimeout(function(){
                popup.destroy(f.type);
                if (f.callback) {
                  f.callback(); 
                }
            }, f.timeout);
        }
		
        if(f.type == "async"){
            var options = {
                url: f.url,
                data: {
                lxt: sid 
                },
                format: "html",
                method: "GET",
                before: null,
                callback: function (html){
                    document.getElementById("dialog-content").innerHTML = html;
                    popup.set_pos();
                },
            };
            ajax(options);
        }
		
    },

    destroy: function(type){
        if (dismiss_interval) {
          clearInterval(dismiss_interval);
        }
        var box = document.getElementById('popup-out');
        box.innerHTML = "";
        box.setAttribute('class','popup-base');
                

        // confirm/alert/prompt remove click listener
        if (g = document.getElementById(type + '-ok')){
            g.removeEventListener("click", function(){}, false);

            // remove keyup listener
            document.onkeyup = null;
        }

        // confirm/prompt remove click listener
        if (h = document.getElementById(type + '-cancel')){

            h.removeEventListener("click", function(){}, false);
        }
    },
	
    set_pos:  function(){
        var dialog = document.getElementById("dialog-popup");
        var offset_top = parseInt((window.innerHeight  - dialog.clientHeight) / 2) >= 0 ? parseInt((window.innerHeight  - dialog.clientHeight) / 2) : 5;
        var top = document.body.scrollTop + offset_top;

        dialog.style.top = top + "px";
        dialog.style.left = (parseInt(document.body.clientWidth))/2 - parseInt(dialog.scrollWidth)/2 + document.body.scrollLeft + 5 +"px";
    },

    alert: function(e,f){
        if (typeof(f) == 'undefined'){
            f = function (){};
        }
                
        popup.build(e,{
            type:'alert', 
            callback:f
        });
    },

    signal: function(e, timeout, callback, insist, compact, indicator){
        if (typeof(timeout) == 'undefined'){
          var timeout = 5000;
        }

        var insist = typeof(insist) == 'undefined' ? false : insist; 
        var compact = typeof(compact) == 'undefined' ? false : compact; 
        var indicator = typeof(indicator) == 'undefined' ? false : indicator; 

        popup.build(e,{
            type: 'signal', 
            timeout: timeout,
            insist: insist,
            compact: compact,
            indicator: indicator,
            callback: callback
        });
    },

    confirm: function(e,f){
        popup.build(e,{
            type:'confirm', 
            callback:f
        });
    },

    prompt: function(e,f){
        return popup.build(e,{
            type:'prompt', 
            callback:f
        });
    },
	
    async: function(url){
      var dialog = document.getElementById("dialog-content");
      if (dialog) {
        var html = "<div class='popup-loading' style='width: " + (dialog.clientWidth - 20) + "px;'>";
      } else {
        var html = "<div class='popup-loading'>";
      }
      var img = "<img src='/static/img/loading.gif' />";
      html += img;
      html += "</div>";
      return popup.build(html, {
        type:'async', 
        url:url
      });
    },
    loading : function(url){
	var e = "<div class='popup-loading'>";
        var img = "<img src='/static/img/loading.gif' />";
        e += img;
        e+= "</div>";
	return popup.build(e,{
            type:'loading', 
            url:url
        });
    }
};


/*
var pageX = 0;
var pageY = 0;
window.addEventListener("touchstart", function(e) {
  pageY = e.pageY;

}, true);
*/