/**
 * 20190801@JAR:利用$ls创建前端元素（功能：复用前次拾取）；
 * 20190323@JAR:更新fun4；
 * 20190319@JAR:创建fun123；
 * 
 * 测试用工具'jr:obj'
 *
 * 1. lok:obj - 可用功能归纳
 * 2. $fl:fun - 基本复用函数
 * 3. lis:fun - 可用功能列表
 * 4. bld:fun - 自动建造食水
 * 
 * 注意：自动采集需要先手动搜索、并全部收取一次包括金属在内的物资。
 *
 */

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var jr = {tim:null, max:40, maw:60};
jr.lok = {
  'got': '重复最后一次全部捡拾', 
  'wtr': '在当前区域建造水桶', 
  'fod': '在当前区域建造陷阱',
  'bld': '在当前区域建造食水'
};

jr.bld = function(){
  let arr = [
    'confirmation-takeall',
    'out-action-build-bucket',
    'out-action-build-trap',
    'resources-bag-metal',
    'out-improvements-collector-water',
    'out-improvements-collector-food'
  ];
  jr.tim = setInterval(
    function(){
      console.log('你与工头一起仔细查勘现场……');
      let
        eg = document.getElementById(arr[0]),
        ew = document.getElementById(arr[1]),
        ef = document.getElementById(arr[2]),
        $g = document.getElementById(arr[3]),
        $w = document.getElementById(arr[4]),
        $f = document.getElementById(arr[5])
      ;
      let
        tg = $g.childNodes[1].innerText || 0,
        tw = $w.childNodes[3].innerText,
        tf = $f.childNodes[3].innerText
      ;
      let
        $stop = function(){
          clearInterval(jr.tim);
          jr.tim = null;
        },
        $resh = function(){
          tf.disable = false;
          tw.disable = false;
        }
      ;
      if (!eg) {
        $stop();
        console.log('现场没有好工具……(end)');
        return;
      }
      if ((tw >= jr.maw && tf >= jr.maw)) {
        $stop();
        console.log('工程终于完工了……(end)');
        return;
      }
      if (
          $g.innerText < jr.max 
          || $g.style.display == 'none'
      ) {
        eg.click();
      }
      if ((tf - tw) && ew.disabled == false) {
        ew.click();
        $resh();
        return;
      }
      if (tf < jr.maw && ef.disabled == false) {
        ef.click();
        $resh();
        return;
      }    
    },
    100 
  );
};
jr.$fl = function(num, str){
  for (let i=0; i<num; i++) {
    document.getElementById(str).click();
  }
};
jr.got = function(){
  jr.$fl(arguments[0]||1,
  'confirmation-takeall');
};
jr.wtr = function(){
  jr.$fl(arguments[0]||1,
  'out-action-build-bucket');
};
jr.fod = function(){
  jr.$fl(arguments[0]||1,
  'out-action-build-trap');
};
jr.url = 'https://gitee.com/jarol/level13';
jr.smp = '样例：\n'
  + 'jr.got();' + '\n'
  + 'jr.got(7);' + '\n'
  + 'jr.fod(3);' + '\n'
  + 'jr.got(8);' + '\n'
  + 'jr.wtr(3);' + '\n'
  + 'OR:\n'
  + 'jr.bld()' + '\n\n'
  + '* 注意：自动采集需要先手动搜索、并全部收取一次包括金属在内的物资 *'
;
jr.$ls = (function(){
  let
    lis = '加载工具[jr:obj]\n',
    obj = jr.lok,
    smp = jr.smp || ''
  ;
  for (let i in obj) {
    lis += (
      ''
      + i + ': \t' 
      + obj[i]
      + '\n'
    );
  }
  console.log(lis + smp);
  jr.lis = lis;
  //20190801创建前端（3步）
  //1.临时变量
  let
    b=document.createElement('div')
  , e=document.createElement('bucket')
  ;
  //2.元素配置
  e.id='jr_pickagain';
  e.style='width:200px;height:30px;color:red;background-color:tan;z-index:9999;cursor:pointer;';
  e.innerText='重复拾取';
  e.onclick=function(){
    document.getElementById('confirmation-takeall').click();
  };
  b.appendChild(e);
  b.id='jr_funbox'
  document.getElementById('header-camp-container').appendChild(b);
})();