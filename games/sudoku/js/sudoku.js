function lo(e, t) {
    return e[_0x7e97[18]]()[_0x7e97[16]](t)
}

function so() {
    var e = _0x7e97[19],
        t, n = arguments[t];
    for (var t = arguments[_0x7e97[20]] - 1; t--;) {
        e += String[_0x7e97[3]](arguments[t] ^ n)
    }
    return e
}

function ar(e, t) {
    e[_0x7e97[21]](e[_0x7e97[16]](t), 1)
}

function rp(e, t, n, r, i, s) {
    return e >= n && t >= r && e < n + i && t < r + s
}

function rs(e, t, n, r, i) {
    return rp(e, t, r - n[_0x7e97[22]], i - n[_0x7e97[23]], n[_0x7e97[24]], n[_0x7e97[25]])
}

function si() {
    grid = CU[_0x7e97[26]][_0x7e97[34]]()
}

function sc(e) {
    CU[_0x7e97[26]][_0x7e97[35]](grid, e)
}

function sa(e, t) {
    return grid[_0x7e97[36]](e, t)
}

function nii(e, t) {
    var n = new Image;
    n[_0x7e97[37]] = t;
    n[_0x7e97[38]] = e;
    return n
}

function ni(e) {
    tdl++;
    return nii(e, tdld)
}

function nc(e, t) {
    var n = d[_0x7e97[40]](_0x7e97[39]);
    n[_0x7e97[41]] = e;
    n[_0x7e97[42]] = t;
    n[_0x7e97[43]] = n[_0x7e97[45]](_0x7e97[44]);
    return n
}

function nsi(e, t, n, r, i, s) {
    this[_0x7e97[46]] = e;
    this[_0x7e97[47]] = t;
    this[_0x7e97[24]] = n;
    this[_0x7e97[25]] = r;
    this[_0x7e97[22]] = i;
    this[_0x7e97[23]] = s;
    this[_0x7e97[48]] = nc(n, r);
    this[_0x7e97[48]][_0x7e97[43]][_0x7e97[49]](tex, -e, -t)
}

function ns(e, t, n, r, i, s) {
    if (arguments[_0x7e97[20]] > 4) {
        return new nsi(e, t, n, r, i, s)
    }
    return new nsi(e, t, n, r, 0, 0)
}

function tdld() {
    tdl--;
    if (!tdl) {
        fade_start(0, 2, _start)
    }
}

function pld() {
    if (tdl == 0) {
        return
    }
    if (!pli) {
        pli = nii(_0x7e97[50], pld);
        cc(_0x7e97[51]);
        cf(_0x7e97[52]);
        ct(0, 0, fmb);
        c[_0x7e97[43]](_0x7e97[53], 160, 240)
    } else {
        c[_0x7e97[22]](pli, 0, 0)
    }
}

function cc(e) {
    ca[_0x7e97[55]][_0x7e97[54]] = e;
    ca[_0x7e97[41]] = ca[_0x7e97[41]];
    ca[_0x7e97[42]] = ca[_0x7e97[42]]
}

function ct(e, t, n) {
    c[_0x7e97[56]] = e == 0 ? _0x7e97[57] : e > 0 ? _0x7e97[58] : _0x7e97[59];
    c[_0x7e97[60]] = t == 0 ? _0x7e97[61] : t > 0 ? _0x7e97[62] : _0x7e97[63];
    if (n) {
        c[_0x7e97[64]] = n
    }
}

function cf(e) {
    c[_0x7e97[65]] = e
}

function cfx(e, t) {
    c[_0x7e97[65]] = _0x7e97[66] + e + _0x7e97[67] + t + _0x7e97[68]
}

function cr(e, t, n, r) {
    c[_0x7e97[69]]();
    c[_0x7e97[70]](e, t, n - e, r - t);
    c[_0x7e97[71]]()
}

function cs(e, t, n) {
    var r = e[_0x7e97[24]],
        i = e[_0x7e97[25]];
    c[_0x7e97[22]](e[_0x7e97[48]], t - e[_0x7e97[22]], n - e[_0x7e97[23]])
}

function ec() {
    em = [];
    ek = [];
    et = [];
    ed = []
}

function edx() {
    var e, t = ed[_0x7e97[20]];
    for (e = 0; e < t; e++) {
        ed[e]()
    }
    if (ca2) {
        ca2[_0x7e97[41]] = ca2[_0x7e97[41]];
        c2[_0x7e97[49]](ca, 0, 0, 320, 480, 0, 0, ca2[_0x7e97[41]], ca2[_0x7e97[42]])
    }
}

function eoc() {
    var e, t = em[_0x7e97[20]];
    for (var e = 0; e < t; e++) {
        em[e](mouseX, mouseY)
    }
}

function eomd() {
    if (!etouch) {
        eoc()
    }
}

function eoto(e) {
    var t = e[_0x7e97[73]];
    if (t[_0x7e97[20]] !== 0) {
        mouseX = (t[0][_0x7e97[74]] - ca[_0x7e97[75]]) * mouseXm;
        mouseY = (t[0][_0x7e97[76]] - ca[_0x7e97[77]]) * mouseYm
    }
}

function eote(e) {
    if (!etouch) {
        etouch = true
    }
    eoto(e);
    eoc()
}

function eotm(e) {
    eoto(e)
}

function eok(e) {
    if (etouch) {
        return
    }
    var t = window[_0x7e97[78]] ? e[_0x7e97[79]] : e[_0x7e97[80]];
    var n = ek[_0x7e97[20]];
    for (var r = 0; r < n; r++) {
        ek[r](t)
    }
}

function eot() {
    var e = (new Date)[_0x7e97[17]]();
    var t = (e - etp) / 1e3,
        n, r = et[_0x7e97[20]];
    for (n = 0; n < r; n++) {
        et[n](t)
    }
    etp = e;
    setTimeout(eot, 32)
}

function eom(e) {
    if (e[_0x7e97[74]] != undefined && e[_0x7e97[76]] != undefined) {
        mouseX = e[_0x7e97[74]];
        mouseY = e[_0x7e97[76]]
    } else {
        mouseX = e[_0x7e97[81]] + db[_0x7e97[82]] + de[_0x7e97[82]];
        mouseY = e[_0x7e97[83]] + db[_0x7e97[84]] + de[_0x7e97[84]]
    } if (ca) {
        mouseX -= ca[_0x7e97[75]];
        mouseY -= ca[_0x7e97[77]]
    }
    mouseX *= mouseXm;
    mouseY *= mouseYm
}

function fade_timer(e) {
    _fa += e * _fd;
    if (_fd > 0 && _fa > 1 || _fd < 0 && _fa < 0) {
        if (_fd > 1) {
            _fd = 1
        }
        ar(et, fade_timer);
        edx();
        ar(ed, fade_draw);
        if (_fc) {
            _fc()
        }
    } else {
        edx()
    }
}

function fade_draw() {
    if (_fa <= .01) {
        return
    }
    cf(_0x7e97[85] + _fa + _0x7e97[68]);
    cr(-5, -5, 325, 485)
}

function fade_start(e, t, n) {
    _fa = e;
    _fd = t;
    _fc = n;
    et[_0x7e97[30]](fade_timer);
    ed[_0x7e97[30]](fade_draw)
}

function cao() {
    c[_0x7e97[22]](tex, 0, 429, 320, 16, 0, 0, 320, 16);
    for (var e = 0; e < 12; e++) {
        c[_0x7e97[22]](tex, 0, 430, 320, 32, 0, 16 + e * 32, 320, 32)
    }
    c[_0x7e97[22]](tex, 0, 432, 320, 80, 0, 400, 320, 80)
}

function game_num(e, t) {
    var n;
    if (n = _cb[t][e]) {
        return n
    }
    if (n = _cl[t][e]) {
        return n
    }
    return 0
}

function game_complete() {
    var e, t, n, r, i, s;
    _cy = -1;
    n = [];
    r = true;
    for (t = 0; t < 9; t++) {
        for (e = 0; e < 9; e++) {
            _cw[t][e] = false
        }
    }
    for (t = 0; t < 9; t++) {
        for (e = 0; e <= 9; e++) {
            n[e] = 0
        }
        for (e = 0; e < 9; e++) {
            n[game_num(e, t)]++
        }
        for (e = 0; e < 9; e++) {
            if (game_num(e, t) == 0 || n[game_num(e, t)] != 1) {
                r = false;
                if (_cb[t][e] == 0) {
                    _cw[t][e] = true
                }
            }
        }
        for (e = 0; e <= 9; e++) {
            n[e] = 0
        }
        for (e = 0; e < 9; e++) {
            n[game_num(t, e)]++
        }
        for (e = 0; e < 9; e++) {
            if (game_num(t, e) == 0 || n[game_num(t, e)] != 1) {
                r = false;
                if (_cb[e][t] == 0) {
                    _cw[e][t] = true
                }
            }
        }
    }
    if (!r) {
        _sw = true;
        edx();
        _sw = false;
        return false
    }
    return true
}

function game_wint(e) {
    _yw -= e;
    if (_yw <= 0) {
        _yw = 0;
        ec();
        game_start(true);
        game_ae();
        edx()
    }
}

function game_time(e) {
    _time += e;
    window.t = _time;
}

function game_click2(e, t) {
    if (rs(e, t, spButton, 160, 240)) {
        ec();
        fade_start(0, 2, menu_start)
    }
    if (rs(e, t, spButton, 160, 288)) {
        ar(em, game_click2);
        em[_0x7e97[30]](game_click);
        _sm = false;
        edx()
    }
}

function game_click(e, t) {
    var n, r, i, s, o, u;
    for (r = 0; r < 9; r++) {
        for (n = 0; n < 9; n++) {
            o = _xb + 2 + mf(n / 3) * 2 + n * 31;
            u = _yb + 2 + mf(r / 3) * 2 + r * 31;
            if (!rp(e, t, o, u, 30, 30)) {
                continue
            }
            if (_cx != n || _cy != r) {
                _cx = n;
                _cy = r
            } else {
                _cy = -1
            }
            edx();
            return
        }
    }
    if (_cy != -1) {
        for (n = 0; n < 9; n++) {
            o = _xn + 2 + mf(n / 3) * 2 + n * 31;
            u = _yn + 2;
            if (!rp(e, t, o, u, 30, 30)) {
                continue
            }
            if (_cb[_cy][_cx] != 0) {
                continue
            }
            if (_nm) {
                s = _cn[_cy][_cx];
                if (i = _cl[_cy][_cx]) {
                    s[_0x7e97[30]](i);
                    _cl[_cy][_cx] = 0
                }
                i = s[_0x7e97[16]](n + 1);
                if (i == -1) {
                    s[_0x7e97[30]](n + 1)
                } else {
                    s[_0x7e97[21]](i, 1)
                }
            } else {
                _cl[_cy][_cx] = n + 1;
                _cn[_cy][_cx] = []
            }
            return edx()
        }
    }
    if (rs(e, t, spButton, _xn + 48, _yn + 64) && game_complete()) {
        _yw = 3;
        ec();
        et[_0x7e97[30]](game_wint);
        ed[_0x7e97[30]](game_draw);
        return edx()
    }
    if (_cy != -1 && rs(e, t, spSqButton, _xn + 105, _yn + 47) && _cb[_cy][_cx] == 0) {
        _cl[_cy][_cx] = 0;
        _cn[_cy][_cx] = [];
        return edx()
    }
    if (rs(e, t, spSqButton, _xn + 147, _yn + 47)) {
        _nm = !_nm;
        return edx()
    }
    if (rs(e, t, spButton, _xn + 238, _yn + 64)) {
        ar(em, game_click);
        em[_0x7e97[30]](game_click2);
        _sm = true;
        edx()
    }
}

function game_ae() {
    em[_0x7e97[30]](game_click);
    et[_0x7e97[30]](game_time)
}

function game_draw() {
    c[_0x7e97[22]](txb, -320, -480);
    var e, t, n, r, i, s, o;
    i = (r = z[ff[_0x7e97[86]](8, 6)]) ? lo(r, fe) != -1 : 1;
    i = true;
    for (t = 0; t < 9; t++) {
        for (e = 0; e < 9; e++) {
            n = e + t & 1 ? spSlot2 : spSlot1;
            if (_cx == e && _cy == t) {
                n = spSlotSel1
            }
            if (_sw && _cw[t][e]) {
                n = n == spSlotSel1 ? spSlotSel2 : spSlotSel1
            }
            s = _xb + 2 + mf(e / 3) * 2 + e * 31;
            o = _yb + 2 + mf(t / 3) * 2 + t * 31;
            cs(n, s, o);
            if (n = _cb[t][e]) {
                c[_0x7e97[22]](tex, n * 15, 350, 15, 15, s + 7, o + 7, 15, 15)
            } else {
                if (n = _cl[t][e]) {
                    c[_0x7e97[22]](tex, n * 15 + 150, 350, 15, 15, s + 7, o + 7, 15, 15)
                } else {
                    if (r = _cn[t][e][_0x7e97[20]]) {
                        i = _cn[t][e];
                        cfx(cld, 1);
                        ct(0, 0, fmvb);
                        for (n = 0; n < r; n++) {
                            c[_0x7e97[22]](tex, i[n] * 15 + 150, 365, 15, 15, s - 2 + 9 * (n % 3), o - 2 + 9 * mf(n / 3), 15, 15)
                        }
                    }
                }
            }
        }
    }
    i = i ? 1 : 0;
    for (e = 0; e < 9; e += i) {
        s = _xn + 2 + mf(e / 3) * 2 + e * 31;
        o = _yn + 2;
        cs(spSlot1, s, o);
        c[_0x7e97[22]](tex, (e + 1) * 15, 365, 15, 15, s + 7, o + 7, 15, 15)
    }
    cs(spGrid, _xb, _yb);
    cs(spButton, _xn + 48, _yn + 64);
    cs(spSqButton, _xn + 105, _yn + 47);
    cs(spErase, _xn + 122, _yn + 64);
    cs(_nm ? spSqButtonRed : spSqButton, _xn + 147, _yn + 47);
    cs(_nm ? spNotesRed : spNotes, _xn + 164, _yn + 64);
    cs(spButton, _xn + 238, _yn + 64);
    ct(0, 0, fmsb);
    cf(_0x7e97[87]);
    c[_0x7e97[43]](_0x7e97[88], _xn + 48, _yn + 64);
    c[_0x7e97[43]](_0x7e97[89], _xn + 238, _yn + 64);
    if (_yw > 0 || _sm) {
        cf(_0x7e97[90]);
        cr(-5, -5, 325, 485)
    }
    if (_yw > 0) {
        cs(spWinGlyph, 160, 240);
        cs(spWinText, 160, 240);
        cf(_0x7e97[52]);
        ct(0, 0, fmb);
        var u = _0x7e97[19];
        var e = mf(_time);
        var t = 0;
        if (e > 3600) {
            t = mf(e / 3600);
            u += t + _0x7e97[91];
            e = e % 3600
        }
        if (e > 60) {
            t = mf(e / 60);
            if (t < 10 && u[_0x7e97[20]]) {
                u += _0x7e97[92]
            }
            u += t + _0x7e97[91];
            e = e % 60
        }
        if (e < 10 && u[_0x7e97[20]]) {
            u += _0x7e97[92]
        }
        u += e;
        c[_0x7e97[43]](_0x7e97[93] + u, 160, 192);
        // updateShareScore(u);
        // Play68.setRankingScoreAsc(window.t);
        setTimeout(function() {
            // Play68.shareFriend();
        }, 1500)
    } else {
        if (_sm) {
            cf(_0x7e97[94]);
            cr(-5, 164, 325, 311);
            cf(_0x7e97[52]);
            ct(0, -1, fmsb);
            c[_0x7e97[43]](_0x7e97[95], 160, 187);
            ct(0, 1, fmsb);
            c[_0x7e97[43]](_0x7e97[96], 160, 197);
            cs(spButton, 160, 240);
            cs(spButton, 160, 288);
            ct(0, 0, fmsb);
            cf(_0x7e97[87]);
            c[_0x7e97[43]](_0x7e97[97], 160, 240);
            c[_0x7e97[43]](_0x7e97[98], 160, 288)
        }
    }
    cao()
}

function game_start(e) {
    ec();
    si();
    _nm = false;
    _sw = false;
    _sm = false;
    _cx = _cy = -1;
    _time = 0;
    _cb = [];
    _cl = [];
    _cd = [];
    _cn = [];
    _cw = [];
    var t, n, r;
    for (n = 0; n < 9; n++) {
        _cb[n] = [];
        _cl[n] = [];
        _cd[n] = [];
        _cn[n] = [];
        _cw[n] = [];
        for (t = 0; t < 9; t++) {
            _cb[n][t] = 0;
            _cd[n][t] = 0;
            _cl[n][t] = 0;
            _cn[n][t] = [];
            _cw[n][t] = false
        }
    }
    for (n = 0; n < 9; n++) {
        for (t = 0; t < 9; t++) {
            _cd[n][t] = sa(t, n)
        }
    }
    sc(_diff == 2 ? 47 : _diff == 1 ? 40 : 20);
    for (n = 0; n < 9; n++) {
        for (t = 0; t < 9; t++) {
            r = sa(t, n);
            _cb[n][t] = _cl[n][t] = r
        }
    }
    ed[_0x7e97[30]](game_draw);
    if (!e) {
        fade_start(1, -2, game_ae)
    }
}

function dmenu_click(e, t) {
    var n = -1;
    if (rs(e, t, spButton, 160, 192)) {
        n = 0;
        gameDifficulty = _0x7e97[99]
    }
    if (rs(e, t, spButton, 160, 240)) {
        n = 1;
        gameDifficulty = _0x7e97[100]
    }
    if (rs(e, t, spButton, 160, 288)) {
        n = 2;
        gameDifficulty = _0x7e97[101]
    }
    if (n != -1) {
        _diff = n;
        ec();
        fade_start(0, 2, game_start)
    }
}

function dmenu_ae() {
    em[_0x7e97[30]](dmenu_click)
}

function dmenu_draw() {
    c[_0x7e97[22]](txb, 0, -480);
    cf(_0x7e97[94]);
    cr(-5, 164, 325, 311);
    cs(spButton, 160, 192);
    cs(spButton, 160, 240);
    cs(spButton, 160, 288);
    ct(0, 0, fmsb);
    cf(_0x7e97[87]);
    c[_0x7e97[43]](_0x7e97[99], 160, 192);
    c[_0x7e97[43]](_0x7e97[100], 160, 240);
    c[_0x7e97[43]](_0x7e97[101], 160, 288);
    cao()
}

function dmenu_start() {
    ec();
    ed[_0x7e97[30]](dmenu_draw);
    fade_start(1, -2, dmenu_ae)
}

function howto_click(e, t) {
    if (rs(e, t, spButton, 160, 384)) {
        ec();
        fade_start(0, 2, menu_start)
    }
}

function howto_ae() {
    em[_0x7e97[30]](howto_click)
}

function howto_draw() {
    c[_0x7e97[22]](txb, 0, 0);
    cf(_0x7e97[94]);
    cr(-5, 100, 325, 340);
    c[_0x7e97[22]](txh, 0, 50);
    cs(spButton, 160, 384);
    ct(0, 0, fmsb);
    cf(_0x7e97[87]);
    c[_0x7e97[43]](_0x7e97[102], 160, 384);
    cao()
}

function howto_start() {
    ec();
    ed[_0x7e97[30]](howto_draw);
    fade_start(1, -2, howto_ae)
}

function menu_click(e, t) {
    if (rs(e, t, spButton, 160, 216)) {
        ec();
        fade_start(0, 2, dmenu_start)
    }
    if (rs(e, t, spButton, 160, 264)) {
        ec();
        fade_start(0, 2, howto_start)
    }
}

function menu_ae() {
    em[_0x7e97[30]](menu_click)
}

function menu_start() {
    ec();
    ed[_0x7e97[30]](menu_draw);
    fade_start(1, -2, menu_ae)
}

function menu_draw() {
    c[_0x7e97[22]](txb, -320, 0);
    cf(_0x7e97[94]);
    cr(-5, 164, 325, 311);
    cs(spButton, 160, 216);
    cs(spButton, 160, 264);
    ct(0, 0, fmsb);
    cf(_0x7e97[87]);
    c[_0x7e97[43]](_0x7e97[103], 160, 216);
    c[_0x7e97[43]](_0x7e97[104], 160, 264);
    cao()
}

function _start() {
    spGrid = ns(0, 0, 300, 350, 7, 7);
    spWinGlyph = ns(300, 0, 174, 338, 87, 169);
    spWinText = ns(0, 380, 224, 49, 112, 24);
    spFacebook = ns(474, 0, 32, 32);
    spTwitter = ns(474, 32, 32, 32);
    spButton = ns(300, 338, 96, 34, 48, 17);
    spSqButton = ns(474, 64, 34, 34, 0, 0);
    spSqButtonRed = ns(474, 201, 34, 34, 0, 0);
    spSlot1 = ns(474, 111, 30, 30, 0, 0);
    spSlot2 = ns(474, 141, 30, 30, 0, 0);
    spSlotSel1 = ns(474, 171, 30, 30, 0, 0);
    spSlotSel2 = ns(474, 235, 30, 30, 0, 0);
    spErase = ns(474, 98, 15, 13, 7, 6);
    spNotes = ns(489, 98, 11, 13, 5, 6);
    spNotesRed = ns(500, 98, 11, 13, 5, 6);
    menu_start()
}

function _scroll() {
    window[_0x7e97[108]](0, 1)
}

function _orient() {
    window[_0x7e97[108]](0, 1);
    var e = window[_0x7e97[109]];
    switch (e) {
        case 90:
            ori = 1;
            break;;
        case -90:
            ori = -1;
            break;;
        default:
            ori = 0;
    }
}

function _loaded() {
    setTimeout(_scroll, 1);
    // play68_init()
}

function _adstart() {}

function _init() {
    var e = document[_0x7e97[113]] && document[_0x7e97[113]][_0x7e97[16]](_0x7e97[114]) == -1;
    e = false;
    if (e) {
        window[_0x7e97[117]](_0x7e97[115], _0x7e97[116])
    }
    ca = d[_0x7e97[111]](_0x7e97[118]);
    if (scaleToFit && d[_0x7e97[42]] > 480) {
        ca2 = ca;
        c2 = ca2[_0x7e97[45]](_0x7e97[44]);
        ca = nc(320, 480);
        var t = Math[_0x7e97[119]](d[_0x7e97[42]] / 480, d[_0x7e97[41]] / 320);
        mouseXm = mouseYm = 1 / t;
        ca2[_0x7e97[42]] = Math[_0x7e97[1]](t * 480);
        ca2[_0x7e97[41]] = ca2[_0x7e97[42]] * 2 / 3
    }
    c = ca[_0x7e97[45]](_0x7e97[44]);
    c[_0x7e97[22]] = c[_0x7e97[49]];
    c[_0x7e97[43]] = c[_0x7e97[120]];
    c[_0x7e97[69]] = c[_0x7e97[121]];
    c[_0x7e97[71]] = c[_0x7e97[122]];
    c[_0x7e97[123]] = c[_0x7e97[124]];
    c[_0x7e97[125]] = c[_0x7e97[126]];
    c[_0x7e97[127]] = c[_0x7e97[128]];
    c[_0x7e97[70]] = c[_0x7e97[129]];
    var n = d[_0x7e97[40]](_0x7e97[130]);
    n[_0x7e97[132]](_0x7e97[38], _0x7e97[131]);
    n[_0x7e97[132]](_0x7e97[133], _0x7e97[134]);
    n[_0x7e97[132]](_0x7e97[135], _0x7e97[110]);
    n[_0x7e97[37]] = _adstart;
    d[_0x7e97[111]](_0x7e97[137])[_0x7e97[136]](n);
    ec();
    window[_0x7e97[138]] = _orient;
    window[_0x7e97[140]](_0x7e97[139], _loaded);
    d[_0x7e97[141]] = d[_0x7e97[140]];
    d[_0x7e97[142]] = ms();
    if (!(z = d)[_0x7e97[141]]) {
        d[_0x7e97[141]] = d[_0x7e97[143]];
        d[_0x7e97[142]] = ms(111, 110)
    }
    if (d[_0x7e97[140]]) {
        d[_0x7e97[140]](_0x7e97[144], eotm, false);
        d[_0x7e97[140]](_0x7e97[145], eotm, false);
        d[_0x7e97[140]](_0x7e97[146], eote, false)
    }
    d[_0x7e97[141]](d[_0x7e97[142]] + _0x7e97[147], eomd, false);
    d[_0x7e97[141]](d[_0x7e97[142]] + _0x7e97[148], eom, false);
    d[_0x7e97[141]](d[_0x7e97[142]] + _0x7e97[149], eok, false);
    eot();
    if (!txb) {
        txb = ni(_0x7e97[150])
    }
    if (!tex) {
        tex = ni(_0x7e97[151])
    }
    if (!txh) {
        txh = ni(_0x7e97[152])
    }
    pld()
}
var _0x7e97 = ["documentElement", "floor", "random", "fromCharCode", "8,8,8", "247,247,247", "70,70,70", "207,21,21", "eval", "bold ", "italic ", "Tahoma, Domain, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif", "15px ", "19px ", "17px ", "9px ", "indexOf", "getTime", "toLowerCase", "", "length", "splice", "i", "j", "x", "y", "Sudoku", "sudoku", "setValue", "cellConflicts", "push", "Grid", "rows", "prototype", "generate", "cull", "getValue", "onload", "src", "canvas", "createElement", "width", "height", "t", "2d", "getContext", "u", "v", "o", "drawImage", "loading.png", "#111", "white", "加载中...", "backgroundColor", "style", "textAlign", "center", "left", "right", "textBaseline", "middle", "top", "bottom", "font", "fillStyle", "rgba(", ",", ")", "bp", "fr", "cp", "preventDefault", "targetTouches", "pageX", "offsetLeft", "pageY", "offsetTop", "event", "which", "keyCode", "clientX", "scrollLeft", "clientY", "scrollTop", "rgba(0, 0, 0, ", "substr", "black", "提交", "返回主菜单", "rgba(0, 0, 0, 0.75)", ":", "0", "时间: ", "rgba(255, 255, 255, 0.4)", "您确定要返回主菜单吗？", "您的进度将不被保存！", "确认", "取消", "简单", "普通", "困难", "返回", "开始游戏", "帮助", "a14ef83f3a0c5b2", "C62919", "FFFFFF", "scrollTo", "orientation", "ad-script", "getElementById", "fetchAd", "domain", "play68.com", "http://game.play68.com/sudoku/", "_self", "open", "ca", "min", "fillText", "beginPath", "closePath", "s", "stroke", "f", "fill", "sr", "strokeRect", "fillRect", "script", "http://", "setAttribute", "type", "text/javascript", "id", "appendChild", "ui", "onorientationchange", "load", "addEventListener", "ae", "ep", "attachEvent", "touchstart", "touchmove", "touchend", "mousedown", "mousemove", "keydown", "back.jpg", "tex.png", "howto.png"];
var d = document,
    ori = 0,
    scaleToFit = true,
    c, ca, c2, ca2, db = d[so(83, 78, 69, 72, 42)],
    de = d[_0x7e97[0]],
    dx = d[so(29, 26, 18, 30, 28, 23, 115)],
    mf = Math[_0x7e97[1]],
    mr = Math[_0x7e97[2]],
    ms = String[_0x7e97[3]],
    pli, cl0 = _0x7e97[4],
    cl1 = _0x7e97[5],
    cld = _0x7e97[6],
    clr = _0x7e97[7],
    fe = _0x7e97[8],
    fb = _0x7e97[9],
    fi = _0x7e97[10],
    ff = _0x7e97[11],
    fm = _0x7e97[12] + ff,
    fmb = fb + fm,
    fmi = fi + fm,
    fml = _0x7e97[13] + ff,
    fmlb = fb + fml,
    fms = _0x7e97[14] + ff,
    fmsb = fb + fms,
    fmsi = fi + fms,
    fmv = _0x7e97[15] + ff,
    fmvb = fb + fmv,
    tdl = 0,
    txb, txh, tex = dx && dx[_0x7e97[16]](1 > 0) == -1,
    tex = null,
    em, ek, et, ed, etouch = false,
    mouseX = 0,
    mouseY = 0,
    mouseXm = 1,
    mouseYm = 1,
    etp = (new Date)[_0x7e97[17]](),
    spGrid, spWinGlyph, spWinText, spFacebook, spTwitter, spButton, spSqButton, spSqButtonRed, spNotes, spNotesRed, spSlot1, spSlot2, spSlotSel1, spSlotSel2, spErase, _cb, _cl, _cd, _cn, _cw, _cx, _cy, _diff = 0,
    _time = 0,
    _nm = 0,
    _sw, _sm, _xb = 17,
    _yb = 26,
    _xn = 17,
    _yn = 328,
    _yw = 0,
    _fa, _fd, _fc, _end;
if (!CU) {
    var CU = {}
}
CU[_0x7e97[26]] = {
    generate: function() {
        var e = new CU[_0x7e97[27]].Grid;
        var t = [];
        for (var n = 0; n < 81; n++) {
            t[n] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        for (var n = 0; n < 81; n++) {
            var r = false;
            var i = Math[_0x7e97[1]](n / 9);
            var s = n - i * 9;
            while (t[n][_0x7e97[20]] > 0) {
                var o = Math[_0x7e97[1]](Math[_0x7e97[2]]() * t[n][_0x7e97[20]]);
                var u = t[n][_0x7e97[21]](o, 1)[0];
                e[_0x7e97[28]](s, i, u);
                if (!e[_0x7e97[29]](s, i)) {
                    r = true;
                    break
                } else {
                    e[_0x7e97[28]](s, i, 0);
                    r = false;
                    continue
                }
            }
            if (!r) {
                t[n] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                n -= 2
            }
        }
        return e
    },
    cull: function(e, t) {
        var n = [];
        for (var r = 0; r < 81; r++) {
            n[_0x7e97[30]](r)
        }
        for (var r = 0; r < t; r++) {
            var i = Math[_0x7e97[1]](Math[_0x7e97[2]]() * n[_0x7e97[20]]);
            var s = n[_0x7e97[21]](i, 1);
            var o = Math[_0x7e97[1]](s / 9);
            var u = s - o * 9;
            e[_0x7e97[28]](u, o, 0)
        }
    }
};
CU[_0x7e97[27]] = {};
CU[_0x7e97[27]][_0x7e97[31]] = function() {
    this[_0x7e97[32]] = [];
    for (var e = 0; e < 9; e++) {
        var t = [];
        for (var n = 0; n < 9; n++) {
            t[n] = 0
        }
        this[_0x7e97[32]][e] = t
    }
};
CU[_0x7e97[27]][_0x7e97[31]][_0x7e97[33]] = {
    rows: [],
    getValue: function(e, t) {
        return this[_0x7e97[32]][t][e]
    },
    setValue: function(e, t, n) {
        this[_0x7e97[32]][t][e] = n
    },
    cellConflicts: function(e, t) {
        var n = this[_0x7e97[32]][t][e];
        if (n == 0) {
            return false
        }
        for (var r = 0; r < 9; r++) {
            if (r != t && this[_0x7e97[32]][r][e] == n) {
                return true
            }
            if (r != e && this[_0x7e97[32]][t][r] == n) {
                return true
            }
        }
        return !this._miniGridValid(e, t)
    },
    _miniGridValid: function(e, t) {
        var n = Math[_0x7e97[1]](e / 3);
        var r = Math[_0x7e97[1]](t / 3);
        var i = n * 3;
        var s = r * 3;
        var o = (n + 1) * 3;
        var u = (r + 1) * 3;
        var a = [];
        for (var f = s; f < u; f++) {
            for (var l = i; l < o; l++) {
                var c = this[_0x7e97[32]][f][l];
                if (c == 0) {
                    continue
                }
                for (var h = s; h < u; h++) {
                    for (var p = i; p < o; p++) {
                        if (!(h == f && p == l)) {
                            if (this[_0x7e97[32]][h][p] == c) {
                                return false
                            }
                        }
                    }
                }
                a[_0x7e97[30]](c)
            }
        }
        return true
    }
};
var grid;
var admob_vars = {
    pubid: _0x7e97[105],
    bgcolor: _0x7e97[106],
    text: _0x7e97[107],
    test: false
};
_init()