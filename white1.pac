
//
// https://github.com/txthinking/pac
//

var proxy="SOCKS5 127.0.0.1:1090; SOCKS 127.0.0.1:1090; DIRECT";

var mode = "white";


var domains = {
	
	"0-6.com": 1,
	
	"0001688.com": 1,
	
	"001cndc.com": 1,
	
	"001en.com": 1,
	
	"001jm.com": 1,
	
	"001job.com": 1,
	
	"001pp.com": 1,
	
	"001sj.net": 1,
	
	"001sxy.com": 1,
	
	"001uk.com": 1,
	
	"001xin.com": 1,
	
	"005.tv": 1,
	
	"00615.net": 1,
	
	"007swz.com": 1,
	
	"00817.com": 1,
	
	"0086gd.com": 1,
	
	"01-123.com": 1,
	
	"010lf.com": 1,
	
	"01dai.com": 1,
	
	"01dianzi.com": 1,
	
	"01hr.com": 1,
	
	"01w.com": 1,
	
	"01wed.com": 1,
	
	"020.com": 1,
	
	"020h.com": 1,
	
	"020job.com": 1,
	
	"020p.net": 1,
	
	"0214.com": 1,
	
	"022china.com": 1,
	
	"022job.net": 1,
	
	"022net.com": 1,
	
	"022s.com": 1,
	
	"022v.com": 1,
	
	"0231230.com": 1,
	
	"023zp.com": 1,
	
	"024anfang.net": 1,
	
	"024zxw.com": 1,
	
	"025ct.com": 1,
	
	"025syedu.com": 1,
	
	"025xl.com": 1,
	
	"025zp.com": 1,
	
	"027.net": 1,
	
	"027art.com": 1,
	
	"029k.com": 1,
	
	"0312mc.com": 1,
	
	"0316.cc": 1,
	
	"0352fang.com": 1,
	
	"0356f.com": 1,
	
	"0357hz.com": 1,
	
	"0371gaokao.com": 1,
	
	"0371job.com": 1,
	
	"0376.net": 1,
	
	"0377auto.com": 1,
	
	"0379city.com": 1,
	
	"0384.com": 1,
	
	"0396e.com": 1,
	
	"03th.com": 1,
	
	"0411hd.com": 1,
	
	"04168.com": 1,
	
	"0418fc.com": 1,
	
	"0427.com": 1,
	
	"0427qcw.com": 1,
	
	"0430.com": 1,
	
	"0437.com": 1,
	
	"0438.tv": 1,
	
	"0460.com": 1,
	
	"0470a.com": 1,
	
	"0471fcw.com": 1,
	
	"0510syedu.com": 1,
	
	"0512zp.com": 1,
	
	"0513.net": 1,
	
	"0513.org": 1,
	
	"0514.com": 1,
	
	"0514rj.com": 1,
	
	"051591.com": 1,
	
	"0515car.net": 1,
	
	"0517.net": 1,
	
	"0517cw.com": 1,
	
	"0517w.com": 1,
	
	"051jk.com": 1,
	
	"0523zp.com": 1,
	
	"05273.com": 1,
	
	"0531.com": 1,
	
	"0533.com": 1,
	
	"0535-0411.com": 1,
	
	"0537tt.com": 1,
	
	"0537zp.com": 1,
	
	"0538fc.com": 1,
	
	"0543hr.com": 1,
	
	"0546fdc.com": 1,
	
	"0550.com": 1,
	
	"055178.com": 1,
	
	"0551fangchan.com": 1,
	
	"0552jie.com": 1,
	
	"0556zx.com": 1,
	
	"0558.com": 1,
	
	"0558t.com": 1,
	
	"0559fc.com": 1,
	
	"0561house.com": 1,
	
	"0563job.com": 1,
	
	"0564luan.com": 1,
	
	"0566cn.net": 1,
	
	"0566fc.com": 1,
	
	"0566job.com": 1,
	
	"0567.com": 1,
	
	"0570fc.com": 1,
	
	"057191.com": 1,
	
	"0571car.com": 1,
	
	"0573ren.com": 1,
	
	"0575360.com": 1,
	
	"0575bbs.com": 1,
	
	"0575life.com": 1,
	
	"057650.com": 1,
	
	"0577cnw.com": 1,
	
	"0577home.net": 1,
	
	"0577hr.com": 1,
	
	"0577job.com": 1,
	
	"0578rencai.com": 1,
	
	"0578zhaopin.com": 1,
	
	"0579com.com": 1,
	
	"0591job.com": 1,
	
	"05927.com": 1,
	
	"0594.com": 1,
	
	"0595job.com": 1,
	
	"0595rc.com": 1,
	
	"0596fc.com": 1,
	
	"0598job.com": 1,
	
	"0598rc.com": 1,
	
	"059iu.com": 1,
	
	"05info.com": 1,
	
	"05sun.com": 1,
	
	"060s.com": 1,
	
	"0634.com": 1,
	
	"0663job.com": 1,
	
	"06abc.com": 1,
	
	"07073.com": 1,
	
	"07073sy.com": 1,
	
	"0710go.com": 1,
	
	"0712fang.com": 1,
	
	"0715rc.com": 1,
	
	"0715zp.com": 1,
	
	"07177.com": 1,
	
	"0719house.com": 1,
	
	"0722fc.com": 1,
	
	"0728f.com": 1,
	
	"0730188.com": 1,
	
	"0730news.com": 1,
	
	"0731fdc.com": 1,
	
	"0731jiaju.com": 1,
	
	"0731job.com": 1,
	
	"0734.com": 1,
	
	"0734zpw.com": 1,
	
	"0735.com": 1,
	
	"07358.com": 1,
	
	"0735jz.com": 1,
	
	"0735zx.com": 1,
	
	"0736fdc.com": 1,
	
	"0738.cc": 1,
	
	"0739tt.com": 1,
	
	"073yx.com": 1,
	
	"0743063.com": 1,
	
	"07430743.com": 1,
	
	"0746news.com": 1,
	
	"0750rc.com": 1,
	
	"0752qc.com": 1,
	
	"0755.net": 1,
	
	"0755888.com": 1,
	
	"0755caibao.com": 1,
	
	"0755car.com": 1,
	
	"0755rc.com": 1,
	
	"0756home.com": 1,
	
	"0756tong.com": 1,
	
	"0757fc.com": 1,
	
	"0757rc.com": 1,
	
	"0760.com": 1,
	
	"0760rc.com": 1,
	
	"076299.com": 1,
	
	"076650.com": 1,
	
	"0769che.com": 1,
	
	"0771rc.com": 1,
	
	"0771td.com": 1,
	
	"0772fang.com": 1,
	
	"0772job.com": 1,
	
	"0775fcw.com": 1,
	
	"0775jzw.com": 1,
	
	"0791look.com": 1,
	
	"0791quanquan.com": 1,
	
	"0797rs.com": 1,
	
	"0798.ws": 1,
	
	"07jm.com": 1,
	
	"07ka.com": 1,
	
	"08115.com": 1,
	
	"0818work.com": 1,
	
	"0831che.com": 1,
	
	"0832mh.com": 1,
	
	"0835.com": 1,
	
	"0838.com": 1,
	
	"0838live.com": 1,
	
	"0852diaoyu.com": 1,
	
	"0852job.com": 1,
	
	"0853rc.com": 1,
	
	"0854job.com": 1,
	
	"0855job.com": 1,
	
	"0856job.com": 1,
	
	"0857job.com": 1,
	
	"0859job.com": 1,
	
	"0871job.net": 1,
	
	"0875job.net": 1,
	
	"0890.com": 1,
	
	"0891zp.com": 1,
	
	"0898.net": 1,
	
	"0898100.com": 1,
	
	"0898dichan.com": 1,
	
	"08cms.com": 1,
	
	"08px.com": 1,
	
	"0902rc.com": 1,
	
	"0914cn.com": 1,
	
	"0916.tv": 1,
	
	"0917.com": 1,
	
	"0919123.com": 1,
	
	"0921.com": 1,
	
	"0931lanzhou.com": 1,
	
	"0935.com": 1,
	
	"0937.net": 1,
	
	"09451.com": 1,
	
	"0951job.com": 1,
	
	"09635.com": 1,
	
	"0991dj.com": 1,
	
	"099sky.com": 1,
	
	"09jz.com": 1,
	
	"0o0.ooo": 1,
	
	"100-tong.com": 1,
	
	"100.com": 1,
	
	"10000fang.com": 1,
	
	"10000job.com": 1,
	
	"10000link.com": 1,
	
	"10000tc.com": 1,
	
	"1000plan.org": 1,
	
	"1000tuan.com": 1,
	
	"10010.com": 1,
	
	"10050.net": 1,
	
	"100580.com": 1,
	
	"10086.cn": 1,
	
	"100afrc.com": 1,
	
	"100ayrc.com": 1,
	
	"100bt.com": 1,
	
	"100cyrc.com": 1,
	
	"100dnrc.com": 1,
	
	"100dyrc.com": 1,
	
	"100gcrc.com": 1,
	
	"100gxrc.com": 1,
	
	"100hcrc.com": 1,
	
	"100jgsrc.com": 1,
	
	"100jiaoyu.net": 1,
	
	"100jsrc.com": 1,
	
	"100lcrc.com": 1,
	
	"100lnrc.com": 1,
	
	"100ndrc.com": 1,
	
	"100njz.com": 1,
	
	"100nkrc.com": 1,
	
	"100ppi.com": 1,
	
	"100qnrc.com": 1,
	
	"100rjrc.com": 1,
	
	"100scrc.com": 1,
	
	"100t.com": 1,
	
	"100thrc.com": 1,
	
	"100warc.com": 1,
	
	"100xfrc.com": 1,
	
	"100xgrc.com": 1,
	
	"100xiao.com": 1,
	
	"100xuexi.com": 1,
	
	"100xwrc.com": 1,
	
	"100ydrc.com": 1,
	
	"100ye.com": 1,
	
	"100yfrc.com": 1,
	
	"100yiyao.com": 1,
	
	"100yxrc.com": 1,
	
	"100zhuang.com": 1,
	
	"101.com": 1,
	
	"1010jz.com": 1,
	
	"10155.com": 1,
	
	"101jiajiao.com": 1,
	
	"1024sj.com": 1,
	
	"10339.com": 1,
	
	"1039soft.com": 1,
	
	"1065m.com": 1,
	
	"108sq.com": 1,
	
	"10fang.com": 1,
	
	"10huan.com": 1,
	
	"10s1.com": 1,
	
	"10yan.com": 1,
	
	"110.com": 1,
	
	"1111.com": 1,
	
	"111jz.com": 1,
	
	"111ttt.com": 1,
	
	"11315.com": 1,
	
	"114160.com": 1,
	
	"11464.com": 1,
	
	"11467.com": 1,
	
	"114best.com": 1,
	
	"114chn.com": 1,
	
	"114hrb.com": 1,
	
	"114huoche.com": 1,
	
	"114ic.com": 1,
	
	"114jc.com": 1,
	
	"114jcw.com": 1,
	
	"114la.com": 1,
	
	"114max.com": 1,
	
	"114my.net": 1,
	
	"114piaowu.com": 1,
	
	"114px.com": 1,
	
	"114qy.com": 1,
	
	"114study.com": 1,
	
	"115.com": 1,
	
	"115800.com": 1,
	
	"115800.net": 1,
	
	"115img.com": 1,
	
	"115kf.com": 1,
	
	"1166.com": 1,
	
	"11773.com": 1,
	
	"117800.com": 1,
	
	"117800.net": 1,
	
	"1188.com": 1,
	
	"118rc.com": 1,
	
	"11919.com": 1,
	
	"119g.com": 1,
	
	"11chuangye.com": 1,
	
	"11jk.com": 1,
	
	"120-job.com": 1,
	
	"1203.org": 1,
	
	"120ask.com": 1,
	
	"120askimages.com": 1,
	
	"12114job.com": 1,
	
	"12114rc.com": 1,
	
	"121314.com": 1,
	
	"122park.com": 1,
	
	"12333sb.com": 1,
	
	"1234wu.com": 1,
	
	"12365auto.com": 1,
	
	"123cha.com": 1,
	
	"123fj.com": 1,
	
	"123lvxing.com": 1,
	
	"123u.com": 1,
	
	"123xun.com": 1,
	
	"123youhuo.com": 1,
	
	"12530.com": 1,
	
	"125cn.net": 1,
	
	"125job.com": 1,
	
	"126.am": 1,
	
	"126.com": 1,
	
	"126.net": 1,
	
	"126job.net": 1,
	
	"127.net": 1,
	
	"128qd.com": 1,
	
	"128uu.com": 1,
	
	"12900.net": 1,
	
	"12999.com": 1,
	
	"12yao.com": 1,
	
	"131cc.com": 1,
	
	"133jz.com": 1,
	
	"135edu.com": 1,
	
	"1360.com": 1,
	
	"136hr.com": 1,
	
	"1377.com": 1,
	
	"137home.com": 1,
	
	"138edu.com": 1,
	
	"138jm.com": 1,
	
	"138job.com": 1,
	
	"138mr.com": 1,
	
	"139.com": 1,
	
	"139cm.com": 1,
	
	"139life.com": 1,
	
	"139shop.com": 1,
	
	"13ejob.com": 1,
	
	"13pr.com": 1,
	
	"148-law.com": 1,
	
	"1488.com": 1,
	
	"15153.com": 1,
	
	"1518.com": 1,
	
	"1545ts.com": 1,
	
	"155.com": 1,
	
	"156580.com": 1,
	
	"15666.com": 1,
	
	"158.net": 1,
	
	"15880.com": 1,
	
	"159.com": 1,
	
	"15hr.com": 1,
	
	"15sjw.com": 1,
	
	"15w.com": 1,
	
	"160.com": 1,
	
	"1616.net": 1,
	
	"161gg.com": 1,
	
	"163.com": 1,
	
	"163.net": 1,
	
	"163disk.com": 1,
	
	"163k.cc": 1,
	
	"163k.com": 1,
	
	"163yu.com": 1,
	
	"163yun.com": 1,
	
	"164580.com": 1,
	
	"1666.com": 1,
	
	"16789.net": 1,
	
	"1688.com": 1,
	
	"16886000.com": 1,
	
	"16888.com": 1,
	
	"1688wan.com": 1,
	
	"168dc.com": 1,
	
	"168hm.com": 1,
	
	"168hs.com": 1,
	
	"168job.com": 1,
	
	"168rc.com": 1,
	
	"168tea.com": 1,
	
	"168tex.com": 1,
	
	"168xiezi.com": 1,
	
	"16999.com": 1,
	
	"16njl.com": 1,
	
	"16sucai.com": 1,
	
	"16tz.com": 1,
	
	"17.com": 1,
	
	"17173.com": 1,
	
	"17173cdn.com": 1,
	
	"1717518.com": 1,
	
	"1717kf.com": 1,
	
	"1717pk.com": 1,
	
	"1718001.com": 1,
	
	"1718china.com": 1,
	
	"1718world.com": 1,
	
	"172xiaoyuan.com": 1,
	
	"173.com": 1,
	
	"1732.com": 1,
	
	"173daxue.com": 1,
	
	"173eg.com": 1,
	
	"173py.com": 1,
	
	"173zy.com": 1,
	
	"175game.com": 1,
	
	"175kh.com": 1,
	
	"176.com": 1,
	
	"17611.com": 1,
	
	"17673.com": 1,
	
	"1778.com": 1,
	
	"177dj.net": 1,
	
	"178.com": 1,
	
	"17888.com": 1,
	
	"178good.com": 1,
	
	"178zmy.com": 1,
	
	"179179.com": 1,
	
	"1797wan.com": 1,
	
	"17baba.com": 1,
	
	"17cdn.com": 1,
	
	"17ce.com": 1,
	
	"17dm.com": 1,
	
	"17eu.net": 1,
	
	"17game.com": 1,
	
	"17heli.com": 1,
	
	"17house.com": 1,
	
	"17k.com": 1,
	
	"17liansuo.com": 1,
	
	"17oh.com": 1,
	
	"17ok.com": 1,
	
	"17pr.com": 1,
	
	"17sucai.com": 1,
	
	"17u.com": 1,
	
	"17u.net": 1,
	
	"17ugo.com": 1,
	
	"17yy.com": 1,
	
	"17zwd.com": 1,
	
	"18183.com": 1,
	
	"1818hm.com": 1,
	
	"1819.tv": 1,
	
	"1866.tv": 1,
	
	"188.com": 1,
	
	"188cyw.com": 1,
	
	"189.cn": 1,
	
	"189house.com": 1,
	
	"189rc.com": 1,
	
	"189store.com": 1,
	
	"18dao.com": 1,
	
	"18dao.net": 1,
	
	"18ph.com": 1,
	
	"18qiang.com": 1,
	
	"18touch.com": 1,
	
	"18yl.com": 1,
	
	"1905.com": 1,
	
	"197c.com": 1,
	
	"198526.com": 1,
	
	"1988.tv": 1,
	
	"19888.tv": 1,
	
	"198game.com": 1,
	
	"199it.com": 1,
	
	"19lou.com": 1,
	
	"19yxw.com": 1,
	
	"19zhan.com": 1,
	
	"1diaocha.com": 1,
	
	"1dufish.com": 1,
	
	"1dusou.com": 1,
	
	"1dutm.com": 1,
	
	"1gbru.com": 1,
	
	"1kejian.com": 1,
	
	"1m3d.com": 1,
	
	"1mall.com": 1,
	
	"1mishu.com": 1,
	
	"1mit.com": 1,
	
	"1n11.com": 1,
	
	"1news.cc": 1,
	
	"1nongjing.com": 1,
	
	"1nsou.com": 1,
	
	"1o26.com": 1,
	
	"1peixun.com": 1,
	
	"1qimg.com": 1,
	
	"1qmsg.com": 1,
	
	"1qwe3r.com": 1,
	
	"1stjc.com": 1,
	
	"1t1t.com": 1,
	
	"1techan.com": 1,
	
	"1textile.com": 1,
	
	"1ting.com": 1,
	
	"1tpic.com": 1,
	
	"1v1offcn.com": 1,
	
	"1wandian.com": 1,
	
	"1y2y.com": 1,
	
	"1year.cc": 1,
	
	"1years.cc": 1,
	
	"1youxi.com": 1,
	
	"1zhanok.com": 1,
	
	"1zjob.com": 1,
	
	"1zw.com": 1,
	
	"200.net": 1,
	
	"2000888.com": 1,
	
	"2008red.com": 1,
	
	"200tc.com": 1,
	
	"2011n.com": 1,
	
	"21-cmjob.com": 1,
	
	"21-rent.com": 1,
	
	"21-sun.com": 1,
	
	"21-used.com": 1,
	
	"2100book.com": 1,
	
	"210go.com": 1,
	
	"211600.com": 1,
	
	"211lx.com": 1,
	
	"212300.com": 1,
	
	"2125.com": 1,
	
	"2197079.com": 1,
	
	"21caas.com": 1,
	
	"21cbh.com": 1,
	
	"21ccnn.com": 1,
	
	"21ccom.net": 1,
	
	"21cn.com": 1,
	
	"21cnhr.com": 1,
	
	"21cnimg.com": 1,
	
	"21cnjy.com": 1,
	
	"21cp.cc": 1,
	
	"21cp.com": 1,
	
	"21cp.net": 1,
	
	"21dagong.com": 1,
	
	"21dianyuan.com": 1,
	
	"21dnn.com": 1,
	
	"21edu8.com": 1,
	
	"21food.com": 1,
	
	"21gold.org": 1,
	
	"21hospital.com": 1,
	
	"21hubei.com": 1,
	
	"21ic.com": 1,
	
	"21js.com": 1,
	
	"21ks.net": 1,
	
	"21me.me": 1,
	
	"21momo.com": 1,
	
	"21our.com": 1,
	
	"21page.net": 1,
	
	"21part.com": 1,
	
	"21pw.com": 1,
	
	"21rcw.com": 1,
	
	"21rv.com": 1,
	
	"21shte.net": 1,
	
	"21so.com": 1,
	
	"21tb.com": 1,
	
	"21tyn.com": 1,
	
	"21wecan.com": 1,
	
	"21wenju.com": 1,
	
	"21xc.com": 1,
	
	"2200book.com": 1,
	
	"221400job.com": 1,
	
	"221700.com": 1,
	
	"224700.com": 1,
	
	"226500.com": 1,
	
	"226y.com": 1,
	
	"2288.org": 1,
	
	"2298.com": 1,
	
	"22edu.com": 1,
	
	"230la.net": 1,
	
	"232100.net": 1,
	
	"233.com": 1,
	
	"233000.com": 1,
	
	"233863.com": 1,
	
	"2344.com": 1,
	
	"2345.cc": 1,
	
	"2345.com": 1,
	
	"2366.com": 1,
	
	"238200.com": 1,
	
	"23ks.com": 1,
	
	"246xf.com": 1,
	
	"24jz.com": 1,
	
	"24k99.com": 1,
	
	"2500sz.com": 1,
	
	"253u.com": 1,
	
	"258.com": 1,
	
	"2588.tv": 1,
	
	"258en.com": 1,
	
	"25nc.com": 1,
	
	"25pp.com": 1,
	
	"25yz.com": 1,
	
	"263.com": 1,
	
	"263.net": 1,
	
	"263xmail.com": 1,
	
	"264g.com": 1,
	
	"265.com": 1,
	
	"26595.com": 1,
	
	"265g.com": 1,
	
	"2688.com": 1,
	
	"269.net": 1,
	
	"26abc.com": 1,
	
	"28.com": 1,
	
	"2881.com": 1,
	
	"28hotel.com": 1,
	
	"28sn.com": 1,
	
	"28tui.com": 1,
	
	"28yj.com": 1,
	
	"293.net": 1,
	
	"2che.cc": 1,
	
	"2cto.com": 1,
	
	"2dx.net": 1,
	
	"2ge8.com": 1,
	
	"2hua.com": 1,
	
	"2ic.cc": 1,
	
	"2liang.net": 1,
	
	"2m2j.com": 1,
	
	"2mdn.net": 1,
	
	"2mjob.com": 1,
	
	"2mould.com": 1,
	
	"2pjob.com": 1,
	
	"2shequ.com": 1,
	
	"2shoujie.com": 1,
	
	"2smtc.com": 1,
	
	"300p.com": 1,
	
	"301688.com": 1,
	
	"30556.com": 1,
	
	"308308.com": 1,
	
	"30edu.com": 1,
	
	"310win.com": 1,
	
	"311100.com": 1,
	
	"312168.com": 1,
	
	"312green.com": 1,
	
	"313.com": 1,
	
	"3145.com": 1,
	
	"3155.com": 1,
	
	"3158.com": 1,
	
	"315che.com": 1,
	
	"315hyw.com": 1,
	
	"315online.com": 1,
	
	"315weishi.com": 1,
	
	"31alu.com": 1,
	
	"31bear.com": 1,
	
	"31bxg.com": 1,
	
	"31byq.com": 1,
	
	"31bzjx.com": 1,
	
	"31expo.com": 1,
	
	"31food.com": 1,
	
	"31gcjx.com": 1,
	
	"31gear.com": 1,
	
	"31huiyi.com": 1,
	
	"31jc.com": 1,
	
	"31jgj.com": 1,
	
	"31jiaju.com": 1,
	
	"31jmw.com": 1,
	
	"31jxw.com": 1,
	
	"31mada.com": 1,
	
	"31mold.com": 1,
	
	"31pump.com": 1,
	
	"31rzp.com": 1,
	
	"31seal.com": 1,
	
	"31spjx.com": 1,
	
	"31taoci.com": 1,
	
	"31wj.com": 1,
	
	"31xjd.com": 1,
	
	"31yj.com": 1,
	
	"31zscl.com": 1,
	
	"320106.com": 1,
	
	"320921.com": 1,
	
	"321200.com": 1,
	
	"321cy.com": 1,
	
	"3234.com": 1,
	
	"323g.com": 1,
	
	"32800.com": 1,
	
	"32wan.com": 1,
	
	"33.la": 1,
	
	"3310.com": 1,
	
	"3322.org": 1,
	
	"332527.com": 1,
	
	"333job.com": 1,
	
	"333ku.com": 1,
	
	"33519.com": 1,
	
	"3366.com": 1,
	
	"337y.com": 1,
	
	"33lc.com": 1,
	
	"33ly.com": 1,
	
	"33map.com": 1,
	
	"33map.net": 1,
	
	"33or.com": 1,
	
	"33ss.tech": 1,
	
	"3454.com": 1,
	
	"3456.cc": 1,
	
	"3456.tv": 1,
	
	"34job.com": 1,
	
	"35.com": 1,
	
	"350ban.com": 1,
	
	"352.com": 1,
	
	"352200.com": 1,
	
	"3533.com": 1,
	
	"3566t.com": 1,
	
	"35941.com": 1,
	
	"35nic.com": 1,
	
	"35q.com": 1,
	
	"35rc.com": 1,
	
	"35tool.com": 1,
	
	"36.la": 1,
	
	"360.cn": 1,
	
	"360.com": 1,
	
	"3600.com": 1,
	
	"3603.com": 1,
	
	"3608.com": 1,
	
	"36099.com": 1,
	
	"360aiyi.com": 1,
	
	"360buy.com": 1,
	
	"360buyimg.com": 1,
	
	"360che.com": 1,
	
	"360chuguo.com": 1,
	
	"360doc.com": 1,
	
	"360doo.com": 1,
	
	"360eol.com": 1,
	
	"360guakao.net": 1,
	
	"360hun.com": 1,
	
	"360hx.com": 1,
	
	"360hy.com": 1,
	
	"360kad.com": 1,
	
	"360kan.com": 1,
	
	"360kxr.com": 1,
	
	"360safe.com": 1,
	
	"360top.com": 1,
	
	"360tz.net": 1,
	
	"360wbl.com": 1,
	
	"360wyw.com": 1,
	
	"360xh.com": 1,
	
	"360zebra.com": 1,
	
	"3618med.com": 1,
	
	"361games.com": 1,
	
	"364000.com": 1,
	
	"365128.com": 1,
	
	"36578.com": 1,
	
	"36588zs.com": 1,
	
	"365a8.com": 1,
	
	"365ajw.com": 1,
	
	"365anfang.com": 1,
	
	"365art.com": 1,
	
	"365auto.com": 1,
	
	"365azw.com": 1,
	
	"365bh.cc": 1,
	
	"365bj.com": 1,
	
	"365cgw.com": 1,
	
	"365exam.com": 1,
	
	"365heart.com": 1,
	
	"365jilin.com": 1,
	
	"365kl.net": 1,
	
	"365mo.com": 1,
	
	"365rili.com": 1,
	
	"365sji.com": 1,
	
	"365tex.com": 1,
	
	"365webcall.com": 1,
	
	"365zhaosheng.com": 1,
	
	"366x24.com": 1,
	
	"368tea.com": 1,
	
	"36hjob.com": 1,
	
	"36kr.com": 1,
	
	"36krcnd.com": 1,
	
	"36mc.com": 1,
	
	"36nz.com": 1,
	
	"37.com": 1,
	
	"370830.net": 1,
	
	"371.com": 1,
	
	"37168.com": 1,
	
	"371house.com": 1,
	
	"3737.com": 1,
	
	"3737k.com": 1,
	
	"373f.com": 1,
	
	"373house.com": 1,
	
	"37937.com": 1,
	
	"37cs.com": 1,
	
	"37kfb.com": 1,
	
	"37nixi.com": 1,
	
	"37wan.com": 1,
	
	"37wan.net": 1,
	
	"37wanimg.com": 1,
	
	"3817.com": 1,
	
	"3839.com": 1,
	
	"387a.com": 1,
	
	"39.net": 1,
	
	"3937.com": 1,
	
	"3987.com": 1,
	
	"39jhw.net": 1,
	
	"39yss.com": 1,
	
	"39yst.com": 1,
	
	"3conline.com": 1,
	
	"3conline.net": 1,
	
	"3d66.com": 1,
	
	"3ddl.net": 1,
	
	"3dfc.com": 1,
	
	"3dkezhan.com": 1,
	
	"3dmgame.com": 1,
	
	"3dwwwgame.com": 1,
	
	"3edu.net": 1,
	
	"3ghuashang.com": 1,
	
	"3kfw.com": 1,
	
	"3kk.com": 1,
	
	"3lian.com": 1,
	
	"3n110.com": 1,
	
	"3qhouse.com": 1,
	
	"3r66.com": 1,
	
	"3s001.com": 1,
	
	"3see.com": 1,
	
	"3sjob.net": 1,
	
	"3snews.net": 1,
	
	"3xgd.com": 1,
	
	"4.cm": 1,
	
	"400516.com": 1,
	
	"4006666688.com": 1,
	
	"4008000000.com": 1,
	
	"4008885166.com": 1,
	
	"400gb.com": 1,
	
	"400jz.com": 1,
	
	"40279.com": 1,
	
	"404000.com": 1,
	
	"40407.com": 1,
	
	"405400.com": 1,
	
	"411au.com": 1,
	
	"414500.net": 1,
	
	"42144.com": 1,
	
	"425300.co": 1,
	
	"425300.com": 1,
	
	"434300.net": 1,
	
	"435200.com": 1,
	
	"4355.com": 1,
	
	"4399.com": 1,
	
	"4399.net": 1,
	
	"4399dmw.com": 1,
	
	"4399j.com": 1,
	
	"4399sy.com": 1,
	
	"45575.com": 1,
	
	"458hospital.com": 1,
	
	"45fan.com": 1,
	
	"45rc.com": 1,
	
	"45win.com": 1,
	
	"461000.net": 1,
	
	"46518.com": 1,
	
	"471700.net": 1,
	
	"47365.com": 1,
	
	"4738.com": 1,
	
	"4765.com": 1,
	
	"4779.com": 1,
	
	"488u.com": 1,
	
	"49you.com": 1,
	
	"4gfy.com": 1,
	
	"4yang.com": 1,
	
	"500.com": 1,
	
	"50018.com": 1,
	
	"500wan.com": 1,
	
	"5054399.com": 1,
	
	"5068.com": 1,
	
	"508job.com": 1,
	
	"509.cc": 1,
	
	"50bang.org": 1,
	
	"51-cf.com": 1,
	
	"51.am": 1,
	
	"51.com": 1,
	
	"51.la": 1,
	
	"51.net": 1,
	
	"510560.com": 1,
	
	"5117.com": 1,
	
	"5120.com": 1,
	
	"51240.com": 1,
	
	"51511.com": 1,
	
	"5156edu.com": 1,
	
	"5156rcw.com": 1,
	
	"5173.com": 1,
	
	"5173cdn.com": 1,
	
	"51766.com": 1,
	
	"5179.com": 1,
	
	"517best.com": 1,
	
	"517huizhou.com": 1,
	
	"517tez.com": 1,
	
	"5184.com": 1,
	
	"518ad.com": 1,
	
	"519d.com": 1,
	
	"519dian.com": 1,
	
	"51aimei.com": 1,
	
	"51auto.com": 1,
	
	"51bafu.com": 1,
	
	"51bi.com": 1,
	
	"51buy.com": 1,
	
	"51bxg.com": 1,
	
	"51chudui.com": 1,
	
	"51chuli.com": 1,
	
	"51cnhr.com": 1,
	
	"51comp.com": 1,
	
	"51credit.com": 1,
	
	"51cto.com": 1,
	
	"51daifu.com": 1,
	
	"51daifu.net": 1,
	
	"51diaocha.com": 1,
	
	"51ditu.com": 1,
	
	"51dzrc.com": 1,
	
	"51dzw.com": 1,
	
	"51edu.com": 1,
	
	"51etong.com": 1,
	
	"51ey.com": 1,
	
	"51fanli.com": 1,
	
	"51fanli.net": 1,
	
	"51fdc.com": 1,
	
	"51flrc.com": 1,
	
	"51g3.com": 1,
	
	"51gaifang.com": 1,
	
	"51gaokao.net": 1,
	
	"51haojob.com": 1,
	
	"51hcw.com": 1,
	
	"51hejia.com": 1,
	
	"51honest.org": 1,
	
	"51hunter.net": 1,
	
	"51iec.com": 1,
	
	"51ielts.com": 1,
	
	"51img1.com": 1,
	
	"51jam.com": 1,
	
	"51jiameng.com": 1,
	
	"51jiaxiao.com": 1,
	
	"51jiemeng.com": 1,
	
	"51jingke.com": 1,
	
	"51jishu.com": 1,
	
	"51jiuhuo.com": 1,
	
	"51job.com": 1,
	
	"51jobcdn.com": 1,
	
	"51jyrc.com": 1,
	
	"51kids.com": 1,
	
	"51kqn.com": 1,
	
	"51la.net": 1,
	
	"51langtu.com": 1,
	
	"51liucheng.com": 1,
	
	"51lunwen.com": 1,
	
	"51lyrc.com": 1,
	
	"51meishu.com": 1,
	
	"51mingche.com": 1,
	
	"51mobilejob.com": 1,
	
	"51mole.com": 1,
	
	"51mp3ring.com": 1,
	
	"51nuoqi.com": 1,
	
	"51offer.com": 1,
	
	"51oscar.com": 1,
	
	"51pla.com": 1,
	
	"51poll.com": 1,
	
	"51qc.com": 1,
	
	"51qingjiao.com": 1,
	
	"51rc.com": 1,
	
	"51rencai.com": 1,
	
	"51report.com": 1,
	
	"51seer.com": 1,
	
	"51sheyuan.com": 1,
	
	"51sole.com": 1,
	
	"51t.com": 1,
	
	"51talk.com": 1,
	
	"51talkenglish.com": 1,
	
	"51taonan.com": 1,
	
	"51taoshi.com": 1,
	
	"51test.net": 1,
	
	"51tie.com": 1,
	
	"51touch.com": 1,
	
	"51ttyy.com": 1,
	
	"51tz.com": 1,
	
	"51valves.com": 1,
	
	"51wan.com": 1,
	
	"51wf.com": 1,
	
	"51wj.com": 1,
	
	"51wjrc.com": 1,
	
	"51wyrc.com": 1,
	
	"51xxr.com": 1,
	
	"51yala.com": 1,
	
	"51yes.com": 1,
	
	"51yey.com": 1,
	
	"51you.com": 1,
	
	"51youcai.com": 1,
	
	"51yougo.com": 1,
	
	"51ysrc.com": 1,
	
	"51yunli.com": 1,
	
	"51zhantai.com": 1,
	
	"51zhucai.com": 1,
	
	"51zjxm.com": 1,
	
	"51zsjc.com": 1,
	
	"51ztzj.com": 1,
	
	"51zuoche.com": 1,
	
	"51zupu.com": 1,
	
	"51zx.com": 1,
	
	"51zxw.net": 1,
	
	"51zyrc.com": 1,
	
	"520.com": 1,
	
	"520520520520520.com": 1,
	
	"520apk.com": 1,
	
	"520bn.com": 1,
	
	"520e3e4.com": 1,
	
	"520love520.com": 1,
	
	"520wawa.com": 1,
	
	"521che.com": 1,
	
	"521g.com": 1,
	
	"5234444.com": 1,
	
	"52372.com": 1,
	
	"5251.net": 1,
	
	"5253.com": 1,
	
	"526wan.com": 1,
	
	"527pk.com": 1,
	
	"52as.com": 1,
	
	"52bar.com": 1,
	
	"52bendi.com": 1,
	
	"52bus.com": 1,
	
	"52cake.net": 1,
	
	"52car.net": 1,
	
	"52ch.net": 1,
	
	"52che.com": 1,
	
	"52da.com": 1,
	
	"52design.com": 1,
	
	"52djq.com": 1,
	
	"52fangzi.com": 1,
	
	"52fuqing.com": 1,
	
	"52guixi.com": 1,
	
	"52hardware.com": 1,
	
	"52hotel.net": 1,
	
	"52hxw.com": 1,
	
	"52jj.net": 1,
	
	"52jscn.com": 1,
	
	"52kmh.com": 1,
	
	"52njl.com": 1,
	
	"52op.net": 1,
	
	"52pk.com": 1,
	
	"52pk.net": 1,
	
	"52pojie.cn": 1,
	
	"52sales.net": 1,
	
	"52solution.com": 1,
	
	"52tian.net": 1,
	
	"52tlbb.com": 1,
	
	"52xiaoyuan.net": 1,
	
	"52ykjob.com": 1,
	
	"52yuanm.com": 1,
	
	"52z.com": 1,
	
	"52zhushan.com": 1,
	
	"531city.com": 1,
	
	"533.com": 1,
	
	"533.net": 1,
	
	"5336.com": 1,
	
	"538538.com": 1,
	
	"5399.com": 1,
	
	"53kf.com": 1,
	
	"54086.com": 1,
	
	"54114.com": 1,
	
	"5433.com": 1,
	
	"5460.net": 1,
	
	"546300.net": 1,
	
	"54cn.net": 1,
	
	"54heb.com": 1,
	
	"54jj.com": 1,
	
	"54job.com": 1,
	
	"54kefu.net": 1,
	
	"55.cc": 1,
	
	"55.com": 1,
	
	"55.la": 1,
	
	"550400.com": 1,
	
	"55188.com": 1,
	
	"5566.net": 1,
	
	"557.net": 1,
	
	"5588.tv": 1,
	
	"55bbs.com": 1,
	
	"55g.cc": 1,
	
	"55tuan.com": 1,
	
	"55tuanimg.com": 1,
	
	"55weixiu.com": 1,
	
	"55you.com": 1,
	
	"56.com": 1,
	
	"56156.com": 1,
	
	"5617.com": 1,
	
	"56360.com": 1,
	
	"5648.cc": 1,
	
	"5652.com": 1,
	
	"5654.com": 1,
	
	"5666.tv": 1,
	
	"566855.com": 1,
	
	"5669.com": 1,
	
	"566job.com": 1,
	
	"5678.net": 1,
	
	"56888.net": 1,
	
	"56china.com": 1,
	
	"56en.com": 1,
	
	"56img.com": 1,
	
	"56ml.com": 1,
	
	"56mp.com": 1,
	
	"56qss.com": 1,
	
	"56ye.net": 1,
	
	"57023.com": 1,
	
	"571400.net": 1,
	
	"5721.net": 1,
	
	"5741886.com": 1,
	
	"576.com": 1,
	
	"57616.com": 1,
	
	"576tv.com": 1,
	
	"5778.com": 1,
	
	"577fang.com": 1,
	
	"57821.com": 1,
	
	"57go.com": 1,
	
	"57info.com": 1,
	
	"57qy.com": 1,
	
	"57tibet.com": 1,
	
	"57tuan.com": 1,
	
	"58.com": 1,
	
	"580k.com": 1,
	
	"582hr.com": 1,
	
	"5858.com": 1,
	
	"586jz.com": 1,
	
	"5874.com": 1,
	
	"587766.com": 1,
	
	"5888.tv": 1,
	
	"58cyjm.com": 1,
	
	"58dm.com": 1,
	
	"58fenlei.com": 1,
	
	"58food.com": 1,
	
	"58game.com": 1,
	
	"58guakao.com": 1,
	
	"58house.com": 1,
	
	"58pic.com": 1,
	
	"58sing.com": 1,
	
	"59120.com": 1,
	
	"59178.com": 1,
	
	"591hx.com": 1,
	
	"591wed.com": 1,
	
	"591wy.com": 1,
	
	"5925car.com": 1,
	
	"592wg.cc": 1,
	
	"596fc.com": 1,
	
	"597.com": 1,
	
	"59706.com": 1,
	
	"597rcw.com": 1,
	
	"598rc.com": 1,
	
	"5999.tv": 1,
	
	"59kankan.com": 1,
	
	"5ajob.com": 1,
	
	"5d6d.com": 1,
	
	"5d6d.net": 1,
	
	"5est.com": 1,
	
	"5etv.com": 1,
	
	"5fen.com": 1,
	
	"5g.com": 1,
	
	"5haoxue.net": 1,
	
	"5huu.com": 1,
	
	"5i5j.com": 1,
	
	"5i9u.com": 1,
	
	"5i9u.net": 1,
	
	"5ikfc.com": 1,
	
	"5ipatent.com": 1,
	
	"5its.com": 1,
	
	"5iucn.com": 1,
	
	"5iyq.com": 1,
	
	"5jzp.com": 1,
	
	"5khouse.com": 1,
	
	"5lejob.com": 1,
	
	"5read.com": 1,
	
	"5sai.com": 1,
	
	"5sw.com": 1,
	
	"5u588.com": 1,
	
	"5w.com": 1,
	
	"5zsz.net": 1,
	
	"6-china.com": 1,
	
	"6.cn": 1,
	
	"60.cm": 1,
	
	"60851.org": 1,
	
	"60malaysia.com": 1,
	
	"61.com": 1,
	
	"6103.com": 1,
	
	"61166.com": 1,
	
	"612345.com": 1,
	
	"6164.com": 1,
	
	"6168511.com": 1,
	
	"6188.com": 1,
	
	"618hr.com": 1,
	
	"61baobao.com": 1,
	
	"61bbw.com": 1,
	
	"61ertong.com": 1,
	
	"61flash.com": 1,
	
	"61mami.com": 1,
	
	"6259114.net": 1,
	
	"628.com": 1,
	
	"632news.com": 1,
	
	"64365.com": 1,
	
	"646000.com": 1,
	
	"64ma.com": 1,
	
	"65.com": 1,
	
	"651700.com": 1,
	
	"6528.com": 1,
	
	"65singapore.com": 1,
	
	"65wan.com": 1,
	
	"6600.org": 1,
	
	"66163.com": 1,
	
	"6637.com": 1,
	
	"6665.com": 1,
	
	"66667676.com": 1,
	
	"666ccc.com": 1,
	
	"6676.com": 1,
	
	"6677000.com": 1,
	
	"66880.com": 1,
	
	"668city.com": 1,
	
	"668map.com": 1,
	
	"6695.com": 1,
	
	"66diqiu.com": 1,
	
	"66dt.com": 1,
	
	"66house.com": 1,
	
	"66liu.com": 1,
	
	"66qhd.com": 1,
	
	"66ruian.com": 1,
	
	"66u.com": 1,
	
	"66wc.com": 1,
	
	"66wz.com": 1,
	
	"66xue.com": 1,
	
	"66yj.com": 1,
	
	"66you.com": 1,
	
	"66zhuang.com": 1,
	
	"67.com": 1,
	
	"6711.com": 1,
	
	"678114.com": 1,
	
	"6789uu.com": 1,
	
	"678py.com": 1,
	
	"680.com": 1,
	
	"68211.com": 1,
	
	"685.com": 1,
	
	"688glass.com": 1,
	
	"688n.com": 1,
	
	"68design.net": 1,
	
	"68hr.com": 1,
	
	"68zhuan.com": 1,
	
	"6949.com": 1,
	
	"69hr.com": 1,
	
	"69kan.com": 1,
	
	"6eat.com": 1,
	
	"6m.com": 1,
	
	"6rooms.com": 1,
	
	"6tennis.com": 1,
	
	"6v68.com": 1,
	
	"6wang.cc": 1,
	
	"6zrc.com": 1,
	
	"70.com": 1,
	
	"703804.com": 1,
	
	"70e.com": 1,
	
	"70yx.com": 1,
	
	"71.am": 1,
	
	"711g.com": 1,
	
	"7120.com": 1,
	
	"712100.com": 1,
	
	"7188.org": 1,
	
	"7190.cc": 1,
	
	"7192.com": 1,
	
	"71lady.com": 1,
	
	"71lm.com": 1,
	
	"71sou.net": 1,
	
	"71study.com": 1,
	
	"71zs.com": 1,
	
	"72177.com": 1,
	
	"7230.com": 1,
	
	"7273.com": 1,
	
	"72ce.com": 1,
	
	"72g.com": 1,
	
	"72xuan.com": 1,
	
	"731c.com": 1,
	
	"737.com": 1,
	
	"7377.com": 1,
	
	"7399.com": 1,
	
	"73994.com": 1,
	
	"74cms.com": 1,
	
	"762rc.com": 1,
	
	"7651.com": 1,
	
	"766.com": 1,
	
	"769car.com": 1,
	
	"76jie.com": 1,
	
	"7711.com": 1,
	
	"77313.com": 1,
	
	"774g.com": 1,
	
	"7755.com": 1,
	
	"7766.org": 1,
	
	"777wyx.com": 1,
	
	"777zp.com": 1,
	
	"778669.com": 1,
	
	"7788.com": 1,
	
	"7789.com": 1,
	
	"7799520.com": 1,
	
	"77hunjia.com": 1,
	
	"77l.com": 1,
	
	"77vcd.com": 1,
	
	"77wan.cc": 1,
	
	"77zxw.com": 1,
	
	"78187.com": 1,
	
	"7878.com": 1,
	
	"78793.com": 1,
	
	"789gg.com": 1,
	
	"78dm.net": 1,
	
	"78fz.com": 1,
	
	"78hr.com": 1,
	
	"78zph.com": 1,
	
	"79.com": 1,
	
	"7937.com": 1,
	
	"7940.com": 1,
	
	"7979la.com": 1,
	
	"798edu.com": 1,
	
	"7999.tv": 1,
	
	"799job.com": 1,
	
	"79cha.com": 1,
	
	"79w.com": 1,
	
	"7ahr.com": 1,
	
	"7c.com": 1,
	
	"7caiyun.com": 1,
	
	"7dapei.com": 1,
	
	"7daysinn.biz": 1,
	
	"7edown.com": 1,
	
	"7fgame.com": 1,
	
	"7hcn.com": 1,
	
	"7hon.com": 1,
	
	"7jia2.com": 1,
	
	"7k35.com": 1,
	
	"7k7k.com": 1,
	
	"7mgame.com": 1,
	
	"7mo.cc": 1,
	
	"7po.com": 1,
	
	"7stk.com": 1,
	
	"7su.com": 1,
	
	"7to.cn": 1,
	
	"7usa.net": 1,
	
	"7wsh.com": 1,
	
	"7xz.com": 1,
	
	"7y7.com": 1,
	
	"7yueji.com": 1,
	
	"800020308.com": 1,
	
	"800400.net": 1,
	
	"800hr.com": 1,
	
	"800pai.com": 1,
	
	"8014.com": 1,
	
	"80881.com": 1,
	
	"8090yxs.com": 1,
	
	"80halta.com": 1,
	
	"80tian.com": 1,
	
	"81629.com": 1,
	
	"81629.net": 1,
	
	"818.com": 1,
	
	"818222.com": 1,
	
	"81tech.com": 1,
	
	"81yy.com": 1,
	
	"8211.com": 1,
	
	"82222919.com": 1,
	
	"82341.com": 1,
	
	"826.com": 1,
	
	"8264.com": 1,
	
	"8265.com": 1,
	
	"828g.com": 1,
	
	"832200.com": 1,
	
	"83480900.com": 1,
	
	"83838.com": 1,
	
	"8384cs.com": 1,
	
	"8385.com": 1,
	
	"84519.com": 1,
	
	"84bus.net": 1,
	
	"84ktv.com": 1,
	
	"860527.com": 1,
	
	"860598.com": 1,
	
	"862sc.com": 1,
	
	"86516.com": 1,
	
	"8671.net": 1,
	
	"8682.cc": 1,
	
	"8684.com": 1,
	
	"86933.com": 1,
	
	"86anjie.com": 1,
	
	"86djw.com": 1,
	
	"86jobs.com": 1,
	
	"86jzjob.com": 1,
	
	"86kx.com": 1,
	
	"86kyjob.com": 1,
	
	"86lawyer.com": 1,
	
	"86mdo.com": 1,
	
	"86nb.com": 1,
	
	"86office.com": 1,
	
	"86pla.com": 1,
	
	"86ps.com": 1,
	
	"86qc.com": 1,
	
	"86to81.net": 1,
	
	"86wan.com": 1,
	
	"86wind.com": 1,
	
	"86zsw.com": 1,
	
	"87188718.com": 1,
	
	"8783.com": 1,
	
	"87pk.com": 1,
	
	"88.com": 1,
	
	"8800.org": 1,
	
	"88152.com": 1,
	
	"88353588.net": 1,
	
	"8844.com": 1,
	
	"8855.org": 1,
	
	"8866.org": 1,
	
	"88680.com": 1,
	
	"88845678.com": 1,
	
	"88999.com": 1,
	
	"88db.com": 1,
	
	"88h3.com": 1,
	
	"88lan.com": 1,
	
	"88mf.com": 1,
	
	"88tc.com": 1,
	
	"88yz.com": 1,
	
	"89178.com": 1,
	
	"895cn.com": 1,
	
	"898tc.com": 1,
	
	"8bo.com": 1,
	
	"8btc.com": 1,
	
	"8dn.com": 1,
	
	"8fkd.com": 1,
	
	"8hy.org": 1,
	
	"8le8le.com": 1,
	
	"8lw.org": 1,
	
	"8tennis.com": 1,
	
	"8uka.com": 1,
	
	"8uuzg.com": 1,
	
	"900.la": 1,
	
	"90576.com": 1,
	
	"90g.org": 1,
	
	"90tiyu.com": 1,
	
	"90vs.com": 1,
	
	"91.com": 1,
	
	"911cha.com": 1,
	
	"911xs.com": 1,
	
	"913u.com": 1,
	
	"9158.com": 1,
	
	"917.com": 1,
	
	"917rcw.com": 1,
	
	"9188.com": 1,
	
	"9191mr.com": 1,
	
	"9191px.com": 1,
	
	"91985.com": 1,
	
	"91b2b.com": 1,
	
	"91canyin.com": 1,
	
	"91cps.com": 1,
	
	"91danji.com": 1,
	
	"91ddcc.com": 1,
	
	"91huayi.com": 1,
	
	"91jf.com": 1,
	
	"91jm.com": 1,
	
	"91jmw.com": 1,
	
	"91job.com": 1,
	
	"91jsj.com": 1,
	
	"91ld.com": 1,
	
	"91open.com": 1,
	
	"91porn.com": 1,
	
	"91px.com": 1,
	
	"91rb.com": 1,
	
	"91student.com": 1,
	
	"91tea.net": 1,
	
	"91town.com": 1,
	
	"91wan.com": 1,
	
	"91wenwen.net": 1,
	
	"91yao.com": 1,
	
	"92gzc.com": 1,
	
	"92wudao.com": 1,
	
	"92wy.com": 1,
	
	"92you.com": 1,
	
	"934dsw.com": 1,
	
	"9355.com": 1,
	
	"9377.com": 1,
	
	"93pk.com": 1,
	
	"93tyy.com": 1,
	
	"94117.net": 1,
	
	"94176.com": 1,
	
	"941jy.com": 1,
	
	"9453job.com": 1,
	
	"94i5.com": 1,
	
	"95060.com": 1,
	
	"95081.com": 1,
	
	"95191.com": 1,
	
	"9553.com": 1,
	
	"9555.tv": 1,
	
	"95599.hk": 1,
	
	"9564.com": 1,
	
	"9588.com": 1,
	
	"958shop.com": 1,
	
	"95px.com": 1,
	
	"960law.com": 1,
	
	"960rc.com": 1,
	
	"962.net": 1,
	
	"96211.com": 1,
	
	"962200.net": 1,
	
	"96369.net": 1,
	
	"9637.com": 1,
	
	"96399.org": 1,
	
	"96519.net": 1,
	
	"96520.com": 1,
	
	"9666sr.com": 1,
	
	"9669.com": 1,
	
	"96963.com": 1,
	
	"969g.com": 1,
	
	"96hq.com": 1,
	
	"96pk.com": 1,
	
	"96u.com": 1,
	
	"9724.com": 1,
	
	"973.com": 1,
	
	"97616.net": 1,
	
	"9787.com": 1,
	
	"97973.com": 1,
	
	"97go.com": 1,
	
	"9844.cc": 1,
	
	"98523.com": 1,
	
	"988001.com": 1,
	
	"988yx.com": 1,
	
	"98player.com": 1,
	
	"98znz.com": 1,
	
	"99.com": 1,
	
	"99114.com": 1,
	
	"99166.com": 1,
	
	"9928.tv": 1,
	
	"9939.com": 1,
	
	"9949.com": 1,
	
	"996.com": 1,
	
	"9966.org": 1,
	
	"9966333.com": 1,
	
	"997788.com": 1,
	
	"998.com": 1,
	
	"999.com": 1,
	
	"9991.com": 1,
	
	"999120.net": 1,
	
	"9996270.com": 1,
	
	"9998.tv": 1,
	
	"999ask.com": 1,
	
	"999brain.com": 1,
	
	"99bill.com": 1,
	
	"99cfw.com": 1,
	
	"99fund.com": 1,
	
	"99huizhou.com": 1,
	
	"99ielts.com": 1,
	
	"99inf.com": 1,
	
	"99jianzhu.com": 1,
	
	"99nahuo.com": 1,
	
	"99pet.com": 1,
	
	"99qh.com": 1,
	
	"99sushe.com": 1,
	
	"99wed.com": 1,
	
	"99xr.com": 1,
	
	"99ys.com": 1,
	
	"99zuowen.com": 1,
	
	"9che.com": 1,
	
	"9chew.com": 1,
	
	"9chun.com": 1,
	
	"9first.com": 1,
	
	"9ht.com": 1,
	
	"9i5c.com": 1,
	
	"9ijr.com": 1,
	
	"9juren.com": 1,
	
	"9k9k.com": 1,
	
	"9ku.com": 1,
	
	"9laodi.com": 1,
	
	"9qc.com": 1,
	
	"9sky.com": 1,
	
	"9soso.com": 1,
	
	"9to.com": 1,
	
	"9u.com": 1,
	
	"9u8u.com": 1,
	
	"9v8v.com": 1,
	
	"9wee.com": 1,
	
	"9ye.com": 1,
	
	"9yjobtm.com": 1,
	
	"9you.com": 1,
	
	"9zjob.com": 1,
	
	"a0598.com": 1,
	
	"a1166.com": 1,
	
	"a135.net": 1,
	
	"a22.com": 1,
	
	"a67.com": 1,
	
	"a688888.com": 1,
	
	"a8.com": 1,
	
	"a9188.com": 1,
	
	"a963.com": 1,
	
	"aaplimg.com": 1,
	
	"abab.com": 1,
	
	"abang.com": 1,
	
	"abchina.com": 1,
	
	"ablesky.com": 1,
	
	"accgame.com": 1,
	
	"account.live.com": 1,
	
	"accuweather.com": 1,
	
	"acftu.net": 1,
	
	"acftu.org": 1,
	
	"acfun.cn": 1,
	
	"acfun.tv": 1,
	
	"acg.tv": 1,
	
	"acgvideo.com": 1,
	
	"aci-wh.com": 1,
	
	"acs.org": 1,
	
	"acs86.com": 1,
	
	"acshoes.com": 1,
	
	"actoys.net": 1,
	
	"ad-survey.com": 1,
	
	"ad1111.com": 1,
	
	"adaicom.com": 1,
	
	"aday01.com": 1,
	
	"addpv.com": 1,
	
	"adf.ly": 1,
	
	"adiic.com": 1,
	
	"admaimai.com": 1,
	
	"admin5.com": 1,
	
	"admin5.net": 1,
	
	"admin6.com": 1,
	
	"adobe.com": 1,
	
	"adroll.com": 1,
	
	"ads8.com": 1,
	
	"adsage.com": 1,
	
	"adsame.com": 1,
	
	"adsensor.org": 1,
	
	"adsonar.com": 1,
	
	"adtechus.com": 1,
	
	"adyun.com": 1,
	
	"aeenets.com": 1,
	
	"af360.com": 1,
	
	"afjk.com": 1,
	
	"afjob88.com": 1,
	
	"aft888.com": 1,
	
	"afzhan.com": 1,
	
	"ag365.com": 1,
	
	"age06.com": 1,
	
	"agrodt.com": 1,
	
	"agrofairs.com": 1,
	
	"agrosg.com": 1,
	
	"ah163.net": 1,
	
	"ahage.net": 1,
	
	"ahauto.com": 1,
	
	"ahbys.com": 1,
	
	"ahchanyi.com": 1,
	
	"ahcl.net": 1,
	
	"ahgame.com": 1,
	
	"ahglj.com": 1,
	
	"ahgzdz.com": 1,
	
	"ahjgxy.com": 1,
	
	"ahjtxx.com": 1,
	
	"ahjzw.com": 1,
	
	"ahlags.com": 1,
	
	"ahlib.com": 1,
	
	"ahlife.com": 1,
	
	"ahljnews.com": 1,
	
	"ahmmhg.com": 1,
	
	"ahqmdq.com": 1,
	
	"ahssnews.com": 1,
	
	"ahsyj.com": 1,
	
	"ahtc.cc": 1,
	
	"ahyx.cc": 1,
	
	"ai96.com": 1,
	
	"aibang.com": 1,
	
	"aibo123.com": 1,
	
	"aicai.com": 1,
	
	"aicdn.com": 1,
	
	"aichao521.com": 1,
	
	"aicheren.com": 1,
	
	"aicunfu.com": 1,
	
	"aideschool.com": 1,
	
	"aidiao.com": 1,
	
	"aidigong.com": 1,
	
	"aidr968.com": 1,
	
	"aifang.com": 1,
	
	"aifangke.com": 1,
	
	"aifcdn.com": 1,
	
	"aifengjie.com": 1,
	
	"aigou.com": 1,
	
	"aihami.com": 1,
	
	"aihandu.com": 1,
	
	"aihuigo.com": 1,
	
	"aija.com": 1,
	
	"aiju.com": 1,
	
	"aiketour.com": 1,
	
	"ailaba.org": 1,
	
	"aili.com": 1,
	
	"ailinzhou.com": 1,
	
	"ailiuxue.com": 1,
	
	"aimuju.com": 1,
	
	"aipai.com": 1,
	
	"air.cc": 1,
	
	"airmb.com": 1,
	
	"airtofly.com": 1,
	
	"aituan.com": 1,
	
	"aiwebcom.com": 1,
	
	"aixifan.com": 1,
	
	"aixuetang.com": 1,
	
	"aiyiqu.com": 1,
	
	"aiyouxi.com": 1,
	
	"aizhan.com": 1,
	
	"aizhe58.com": 1,
	
	"aizongyi.com": 1,
	
	"aiztone.com": 1,
	
	"ajiang.net": 1,
	
	"ajkcdn.com": 1,
	
	"ajkimg.com": 1,
	
	"akamaihd.net": 1,
	
	"akangdi.com": 1,
	
	"akarin.me": 1,
	
	"akarin.top": 1,
	
	"akdanji.com": 1,
	
	"aksxw.com": 1,
	
	"alacun.com": 1,
	
	"aladd.net": 1,
	
	"ali213.net": 1,
	
	"aliapp.com": 1,
	
	"aliapp.org": 1,
	
	"alibaba.com": 1,
	
	"alibado.com": 1,
	
	"alibole.com": 1,
	
	"alicdn.com": 1,
	
	"aliexpress.com": 1,
	
	"alifabu.com": 1,
	
	"alihuahua.com": 1,
	
	"aliimg.com": 1,
	
	"alikunlun.com": 1,
	
	"aliloan.com": 1,
	
	"alimama.com": 1,
	
	"alipay.com": 1,
	
	"alipayobjects.com": 1,
	
	"aliresearch.com": 1,
	
	"alisoft.com": 1,
	
	"alitrip.com": 1,
	
	"aliunicorn.com": 1,
	
	"alivv.com": 1,
	
	"alixixi.com": 1,
	
	"aliyiyao.com": 1,
	
	"aliyun.com": 1,
	
	"aliyuncdn.com": 1,
	
	"aliyuncs.com": 1,
	
	"alkuyi.com": 1,
	
	"allbrightlaw.com": 1,
	
	"allfang.com": 1,
	
	"allyes.com": 1,
	
	"altxw.com": 1,
	
	"alu1886.com": 1,
	
	"alyisheng.com": 1,
	
	"am89.com": 1,
	
	"amap.com": 1,
	
	"amazon.cn": 1,
	
	"amazon.com": 1,
	
	"amb-chine.fr": 1,
	
	"ambafrance-cn.org": 1,
	
	"ambow.com": 1,
	
	"ampcn.com": 1,
	
	"anatuprak.com": 1,
	
	"anchi-china.com": 1,
	
	"andaike.com": 1,
	
	"androidonline.net": 1,
	
	"anfan.com": 1,
	
	"anfensi.com": 1,
	
	"angeeks.com": 1,
	
	"angelcrunch.com": 1,
	
	"angelyeast.com": 1,
	
	"anhuaedu.com": 1,
	
	"anhui.cc": 1,
	
	"anhuihr.com": 1,
	
	"anhuijrw.com": 1,
	
	"anhuinews.com": 1,
	
	"animalchina.com": 1,
	
	"anjian.com": 1,
	
	"anjuke.com": 1,
	
	"anjukestatic.com": 1,
	
	"ankang.net": 1,
	
	"ankang06.org": 1,
	
	"anngo.net": 1,
	
	"annikj.com": 1,
	
	"anqingonline.com": 1,
	
	"anqiu.cc": 1,
	
	"anqu.com": 1,
	
	"anquan.org": 1,
	
	"anquan.us": 1,
	
	"anquanbao.com": 1,
	
	"anquanyun.cc": 1,
	
	"anruan.com": 1,
	
	"ansteelgroup.com": 1,
	
	"antong.org": 1,
	
	"antpedia.com": 1,
	
	"anxiangren.com": 1,
	
	"anxin.com": 1,
	
	"anxjm.com": 1,
	
	"any123.com": 1,
	
	"any2000.com": 1,
	
	"anyv.net": 1,
	
	"anzhi.com": 1,
	
	"anzow.com": 1,
	
	"aojiyouxue.com": 1,
	
	"aojiyuke.com": 1,
	
	"aojoo.com": 1,
	
	"aol.com": 1,
	
	"aoomoo.com": 1,
	
	"aoshu.com": 1,
	
	"aosoo.com": 1,
	
	"aotutuan.com": 1,
	
	"aoye.com": 1,
	
	"aoyou.cc": 1,
	
	"aoyou.com": 1,
	
	"ap88.com": 1,
	
	"apabi.com": 1,
	
	"apandim.com": 1,
	
	"apclc.com": 1,
	
	"apkyx.com": 1,
	
	"app111.com": 1,
	
	"app17.com": 1,
	
	"appadhoc.com": 1,
	
	"apparelsos.com": 1,
	
	"appchina.com": 1,
	
	"appgame.com": 1,
	
	"appinn.com": 1,
	
	"apple.com": 1,
	
	"apple2003.com": 1,
	
	"appsina.com": 1,
	
	"appvv.com": 1,
	
	"appying.com": 1,
	
	"aps.org": 1,
	
	"aptchina.com": 1,
	
	"apusic.com": 1,
	
	"aqapk.com": 1,
	
	"aqbz.org": 1,
	
	"aqioo.com": 1,
	
	"aqjfsy.com": 1,
	
	"aqjob.com": 1,
	
	"aqzpw.com": 1,
	
	"aqzyzx.com": 1,
	
	"archina.com": 1,
	
	"archlinuxcn.org": 1,
	
	"areyoucereal.com": 1,
	
	"arpg2.com": 1,
	
	"arpun.com": 1,
	
	"art456.com": 1,
	
	"artebuy.com": 1,
	
	"artgoin.com": 1,
	
	"arting365.com": 1,
	
	"artintern.net": 1,
	
	"artokok.com": 1,
	
	"artrade.com": 1,
	
	"artron.net": 1,
	
	"artxun.com": 1,
	
	"arubanetworks.com": 1,
	
	"as2sc.com": 1,
	
	"aseantradecenter.com": 1,
	
	"asiabt.com": 1,
	
	"asiae.com": 1,
	
	"askci.com": 1,
	
	"aslzw.com": 1,
	
	"asp163.net": 1,
	
	"asp168.com": 1,
	
	"aspcms.com": 1,
	
	"astropulsion.com": 1,
	
	"at918.com": 1,
	
	"ataozx.com": 1,
	
	"atax.cc": 1,
	
	"atdmt.com": 1,
	
	"atobo.com": 1,
	
	"atomicstryker.net": 1,
	
	"atpanel.com": 1,
	
	"auak.com": 1,
	
	"augix.me": 1,
	
	"aupu.net": 1,
	
	"austargroup.com": 1,
	
	"austarstudy.com": 1,
	
	"auto024.com": 1,
	
	"auto18.com": 1,
	
	"auto318.com": 1,
	
	"auto328.com": 1,
	
	"autobaidu.com": 1,
	
	"autochina360.com": 1,
	
	"autohome.com.cn": 1,
	
	"autonavi.com": 1,
	
	"autosup.com": 1,
	
	"auyou.com": 1,
	
	"av001.com": 1,
	
	"aw99.com": 1,
	
	"awotuan.net": 1,
	
	"axmro.com": 1,
	
	"ayrbs.com": 1,
	
	"ayrc.net": 1,
	
	"ayxxz.com": 1,
	
	"b-fairy.com": 1,
	
	"b-tea.com": 1,
	
	"b2b110.com": 1,
	
	"b2b168.com": 1,
	
	"b2b168.net": 1,
	
	"b2bic.com": 1,
	
	"b2bkk.com": 1,
	
	"b2bvip.com": 1,
	
	"b2cedu.com": 1,
	
	"b5m.com": 1,
	
	"bababian.com": 1,
	
	"babidou.com": 1,
	
	"babymob.com": 1,
	
	"babytree.com": 1,
	
	"babytreeimg.com": 1,
	
	"bafangwang.com": 1,
	
	"bagb2b.com": 1,
	
	"baicai.com": 1,
	
	"baicheng.com": 1,
	
	"baicizhan.com": 1,
	
	"baicmotor.com": 1,
	
	"baidajob.com": 1,
	
	"baidu.com": 1,
	
	"baiducontent.com": 1,
	
	"baidulian.net": 1,
	
	"baidupcs.com": 1,
	
	"baidustatic.com": 1,
	
	"baiduyy.com": 1,
	
	"baietu.com": 1,
	
	"baifendian.com": 1,
	
	"baifubao.com": 1,
	
	"baihe.com": 1,
	
	"baijincdn.com": 1,
	
	"baike.com": 1,
	
	"baikemy.com": 1,
	
	"bailinsi.net": 1,
	
	"bailitop.com": 1,
	
	"bailvwang.com": 1,
	
	"baimao.com": 1,
	
	"baimei.com": 1,
	
	"baimin.com": 1,
	
	"baina.com": 1,
	
	"baipaopao.com": 1,
	
	"baipu365.com": 1,
	
	"baiqi008.com": 1,
	
	"baiquean.org": 1,
	
	"baise.cc": 1,
	
	"baisha2004.com": 1,
	
	"baishan.com": 1,
	
	"baishuiapple.com": 1,
	
	"baishunet.com": 1,
	
	"baiwanzhan.com": 1,
	
	"baixing.com": 1,
	
	"baixing.net": 1,
	
	"baixinger.com": 1,
	
	"baixingjd.com": 1,
	
	"baiye5.com": 1,
	
	"baiyou100.com": 1,
	
	"bamaiwo.com": 1,
	
	"bamaol.cc": 1,
	
	"bamaol.com": 1,
	
	"bamboo18.com": 1,
	
	"bamudi.com": 1,
	
	"bamuyu.com": 1,
	
	"banbijiang.com": 1,
	
	"banggo.com": 1,
	
	"banjiajia.com": 1,
	
	"bank-of-china.com": 1,
	
	"bankcomm.com": 1,
	
	"bankhr.com": 1,
	
	"bankofshanghai.com": 1,
	
	"banksteel.com": 1,
	
	"banma.com": 1,
	
	"banwojia.com": 1,
	
	"banyuetan.org": 1,
	
	"banzhu.co": 1,
	
	"baoan.net": 1,
	
	"baobao88.com": 1,
	
	"baobaolong.com": 1,
	
	"baobaomm.com": 1,
	
	"baobei360.com": 1,
	
	"baobeihuijia.com": 1,
	
	"baobeita.com": 1,
	
	"baobidai.com": 1,
	
	"baofeng.com": 1,
	
	"baofoo.com": 1,
	
	"baoji168.com": 1,
	
	"baojidaily.com": 1,
	
	"baojijob.com": 1,
	
	"baojinews.com": 1,
	
	"baojk.com": 1,
	
	"baomi.org": 1,
	
	"baomihua.com": 1,
	
	"baoming.com": 1,
	
	"baoming88.com": 1,
	
	"baoruan.com": 1,
	
	"baoshanjie.com": 1,
	
	"baosteel.com": 1,
	
	"baotoufxh.com": 1,
	
	"baoye.net": 1,
	
	"baoyuntong.com": 1,
	
	"baozang.com": 1,
	
	"baozhuang.biz": 1,
	
	"baozifa.com": 1,
	
	"baozoumanhua.com": 1,
	
	"barmap.com": 1,
	
	"batiaoyu.com": 1,
	
	"batterydir.com": 1,
	
	"batterykey.com": 1,
	
	"battlenet.com.cn": 1,
	
	"baxue.com": 1,
	
	"baydn.com": 1,
	
	"bayuche.com": 1,
	
	"bazhibo.com": 1,
	
	"bbbaaa.com": 1,
	
	"bbhun.com": 1,
	
	"bbioo.com": 1,
	
	"bbs029.com": 1,
	
	"bbscms.net": 1,
	
	"bbsheji.com": 1,
	
	"bbtcaster.com": 1,
	
	"bbwfish.com": 1,
	
	"bcactc.com": 1,
	
	"bcebos.com": 1,
	
	"bcjy123.com": 1,
	
	"bcpcn.com": 1,
	
	"bczcdn.com": 1,
	
	"bczx.cc": 1,
	
	"bd365.net": 1,
	
	"bdall.com": 1,
	
	"bdchina.com": 1,
	
	"bdglj.com": 1,
	
	"bdgycx.com": 1,
	
	"bdimg.com": 1,
	
	"bdinfo.net": 1,
	
	"bdmryj.com": 1,
	
	"bdstatic.com": 1,
	
	"bearing.cm": 1,
	
	"becod.com": 1,
	
	"beelink.com": 1,
	
	"behe.com": 1,
	
	"beianbeian.com": 1,
	
	"beianchaxun.net": 1,
	
	"beibaotu.com": 1,
	
	"beibei.com": 1,
	
	"beifabook.com": 1,
	
	"beifang.net": 1,
	
	"beifangfoshifen.com": 1,
	
	"beiguorc.com": 1,
	
	"beihai365.com": 1,
	
	"beihaidc.com": 1,
	
	"beijinghuashen.com": 1,
	
	"beijingrc.com": 1,
	
	"beimeihongfeng.com": 1,
	
	"beisen.com": 1,
	
	"beitaichufang.com": 1,
	
	"beiwaionline.com": 1,
	
	"beiww.com": 1,
	
	"bejoin.net": 1,
	
	"benber.com": 1,
	
	"bendibao.com": 1,
	
	"bendiw.cc": 1,
	
	"bengbeng.com": 1,
	
	"bengfa.biz": 1,
	
	"bengou.com": 1,
	
	"benseshijue.com": 1,
	
	"benshouji.com": 1,
	
	"benxi0414.com": 1,
	
	"berqin.com": 1,
	
	"berui.com": 1,
	
	"best73.com": 1,
	
	"bestb2b.com": 1,
	
	"besttrav.com": 1,
	
	"betrad.com": 1,
	
	"beva.com": 1,
	
	"bf35.com": 1,
	
	"bfdcdn.com": 1,
	
	"bfedu.com": 1,
	
	"bfjjw.com": 1,
	
	"bfxx.net": 1,
	
	"bfyx.com": 1,
	
	"bgl88.com": 1,
	
	"bgrimm.com": 1,
	
	"bh-eye.com": 1,
	
	"bh111.com": 1,
	
	"bhxww.com": 1,
	
	"biancui.com": 1,
	
	"bianews.com": 1,
	
	"bianfeng.com": 1,
	
	"bianjibu.net": 1,
	
	"bianmincn.com": 1,
	
	"bianzhirensheng.com": 1,
	
	"biaoqing.com": 1,
	
	"bibitie.com": 1,
	
	"bidchance.com": 1,
	
	"bieshu.com": 1,
	
	"big-bit.com": 1,
	
	"bijirim.com": 1,
	
	"biketo.com": 1,
	
	"bilibili.com": 1,
	
	"bilibili.tv": 1,
	
	"biligame.com": 1,
	
	"biligame.net": 1,
	
	"bilinstar.com": 1,
	
	"bincailiuxue.com": 1,
	
	"bing.com": 1,
	
	"bingchengwang.com": 1,
	
	"binzhuang.com": 1,
	
	"bio1000.com": 1,
	
	"bioon.com": 1,
	
	"bisenet.com": 1,
	
	"bitauto.com": 1,
	
	"bitautoimg.com": 1,
	
	"bitautotech.com": 1,
	
	"bitscn.com": 1,
	
	"biyangwang.com": 1,
	
	"biyong007.com": 1,
	
	"biz178.com": 1,
	
	"biz72.com": 1,
	
	"bizcn.com": 1,
	
	"bj148.org": 1,
	
	"bj597.com": 1,
	
	"bjbghc.com": 1,
	
	"bjbus.com": 1,
	
	"bjcankao.com": 1,
	
	"bjccedu.com": 1,
	
	"bjcdc.org": 1,
	
	"bjcec.com": 1,
	
	"bjchild.com": 1,
	
	"bjclio.com": 1,
	
	"bjfair.com": 1,
	
	"bjfisc.com": 1,
	
	"bjhytc.net": 1,
	
	"bjjf.cc": 1,
	
	"bjjubao.org": 1,
	
	"bjlmfq.com": 1,
	
	"bjmama.com": 1,
	
	"bjmama.net": 1,
	
	"bjmanyuan.com": 1,
	
	"bjmti.com": 1,
	
	"bjp321.com": 1,
	
	"bjrc.com": 1,
	
	"bjrcb.com": 1,
	
	"bjsdr.org": 1,
	
	"bjsjwl.com": 1,
	
	"bjsly.com": 1,
	
	"bjsoyo.com": 1,
	
	"bjspw.com": 1,
	
	"bjsqgy.com": 1,
	
	"bjsyqw.com": 1,
	
	"bjtopli.com": 1,
	
	"bjwmys.com": 1,
	
	"bjxatq.com": 1,
	
	"bjximei.com": 1,
	
	"bjzqw.com": 1,
	
	"bjzs114.com": 1,
	
	"bkill.com": 1,
	
	"blackyau.cc": 1,
	
	"blctwed.com": 1,
	
	"bleju.com": 1,
	
	"blemall.com": 1,
	
	"bliao.com": 1,
	
	"blimage.com": 1,
	
	"blizzard.cn": 1,
	
	"blog.163.com": 1,
	
	"blogbus.com": 1,
	
	"blogchina.com": 1,
	
	"blogcn.com": 1,
	
	"blogjava.net": 1,
	
	"bloves.com": 1,
	
	"blqx.com": 1,
	
	"blqy.com": 1,
	
	"blshe.com": 1,
	
	"blsy.net": 1,
	
	"bluehn.com": 1,
	
	"blueidea.com": 1,
	
	"bluekai.com": 1,
	
	"blyol.com": 1,
	
	"blyun.com": 1,
	
	"bmjob.net": 1,
	
	"bmlink.com": 1,
	
	"bnagri.com": 1,
	
	"bndaily.com": 1,
	
	"bnjyks.com": 1,
	
	"bnncn.com": 1,
	
	"bnqgsl.com": 1,
	
	"bnwin.com": 1,
	
	"bo-yi.com": 1,
	
	"boai.com": 1,
	
	"boairc.com": 1,
	
	"boc.cn": 1,
	
	"bokecc.com": 1,
	
	"bokee.com": 1,
	
	"bokee.net": 1,
	
	"bokerb.com": 1,
	
	"bole.me": 1,
	
	"bolijob.com": 1,
	
	"booeoo.com": 1,
	
	"bookschina.com": 1,
	
	"booksky.org": 1,
	
	"boosj.com": 1,
	
	"bootcdn.cn": 1,
	
	"bootcss.com": 1,
	
	"boqii.com": 1,
	
	"bosscdn.com": 1,
	
	"bossgoo.com": 1,
	
	"bosshr.com": 1,
	
	"bosslink.com": 1,
	
	"boxuu.com": 1,
	
	"bozhong.com": 1,
	
	"bqqm.com": 1,
	
	"bqtalk.com": 1,
	
	"brandcn.com": 1,
	
	"breadtrip.com": 1,
	
	"brightdairy.com": 1,
	
	"bs265.com": 1,
	
	"bsjhhzs.com": 1,
	
	"bsjy.net": 1,
	
	"bsrczpw.com": 1,
	
	"bssmm.com": 1,
	
	"bsyjrb.com": 1,
	
	"bt0.com": 1,
	
	"btc114.com": 1,
	
	"btc123.com": 1,
	
	"btcha.com": 1,
	
	"btd.com": 1,
	
	"btime.com": 1,
	
	"btkiki.com": 1,
	
	"btophr.com": 1,
	
	"btrcsc.com": 1,
	
	"btsteel.com": 1,
	
	"btv.org": 1,
	
	"btvu.org": 1,
	
	"bufan.com": 1,
	
	"buildhr.com": 1,
	
	"buildjob.net": 1,
	
	"bumimi.com": 1,
	
	"bundpic.com": 1,
	
	"burberry.com": 1,
	
	"bus84.com": 1,
	
	"busytrade.com": 1,
	
	"buu.edu.cn": 1,
	
	"buycarcn.com": 1,
	
	"buyiju.com": 1,
	
	"bww6bdd.com": 1,
	
	"bx58.com": 1,
	
	"bxd365.com": 1,
	
	"bxdyt.com": 1,
	
	"bxgtd.com": 1,
	
	"bxjyw.com": 1,
	
	"bxxy.com": 1,
	
	"bxycw.com": 1,
	
	"bxynzz.com": 1,
	
	"bxzxw.com": 1,
	
	"bybbs.org": 1,
	
	"bycmw.com": 1,
	
	"byecity.com": 1,
	
	"byf.com": 1,
	
	"byfdc.net": 1,
	
	"byr.cc": 1,
	
	"byshr.com": 1,
	
	"bytsylmr.com": 1,
	
	"bzcm.net": 1,
	
	"bzgd.com": 1,
	
	"bzjw.com": 1,
	
	"bznews.org": 1,
	
	"bzshw.com": 1,
	
	"bzw315.com": 1,
	
	"c-119.com": 1,
	
	"c-bm.com": 1,
	
	"c-c.com": 1,
	
	"c-ctrip.com": 1,
	
	"c-ps.net": 1,
	
	"c-yl.com": 1,
	
	"c029.com": 1,
	
	"c114.net": 1,
	
	"c969.com": 1,
	
	"ca-sme.org": 1,
	
	"ca001.com": 1,
	
	"ca168.com": 1,
	
	"ca800.com": 1,
	
	"caayee.com": 1,
	
	"cabhr.com": 1,
	
	"cabinetbuy.com": 1,
	
	"cableabc.com": 1,
	
	"cachemoment.com": 1,
	
	"caderm.org": 1,
	
	"caeexpo.org": 1,
	
	"caexpo.com": 1,
	
	"caexpo.org": 1,
	
	"cago365.com": 1,
	
	"cai188.com": 1,
	
	"caidianqu.com": 1,
	
	"caiep.org": 1,
	
	"caigou2003.com": 1,
	
	"caiguu.com": 1,
	
	"caihao.com": 1,
	
	"caihao.net": 1,
	
	"caijixia.com": 1,
	
	"cailele.com": 1,
	
	"cailiao.com": 1,
	
	"caing.com": 1,
	
	"caipiao365.com": 1,
	
	"caipopo.com": 1,
	
	"caixin.com": 1,
	
	"caiyn.net": 1,
	
	"caiyun.com": 1,
	
	"cake400.com": 1,
	
	"cali-light.com": 1,
	
	"campingchina.org": 1,
	
	"candou.com": 1,
	
	"cang.com": 1,
	
	"cangnan5.com": 1,
	
	"canjiren.org": 1,
	
	"cankaoxiaoxi.com": 1,
	
	"canyin88.com": 1,
	
	"caomeipai.com": 1,
	
	"caoxian.tv": 1,
	
	"car0575.com": 1,
	
	"car2100.com": 1,
	
	"carcav.com": 1,
	
	"cardbaobao.com": 1,
	
	"carnoc.com": 1,
	
	"carschina.com": 1,
	
	"carxoo.com": 1,
	
	"cas.cn": 1,
	
	"casemeet.com": 1,
	
	"casvino.com": 1,
	
	"casvm.com": 1,
	
	"cat898.com": 1,
	
	"catv.net": 1,
	
	"catwaji.com": 1,
	
	"cb12580.com": 1,
	
	"cbe21.com": 1,
	
	"cbi360.net": 1,
	
	"cbigame.com": 1,
	
	"cbinews.com": 1,
	
	"cbminfo.com": 1,
	
	"cboil.com": 1,
	
	"cbrx.com": 1,
	
	"cbskc.com": 1,
	
	"cbsrc.com": 1,
	
	"cc148.com": 1,
	
	"cc961.com": 1,
	
	"ccb.com": 1,
	
	"cccity.cc": 1,
	
	"cccwww.com": 1,
	
	"ccdby.com": 1,
	
	"ccedin.net": 1,
	
	"ccedip.com": 1,
	
	"ccedisp.com": 1,
	
	"ccedpw.com": 1,
	
	"ccement.com": 1,
	
	"ccen.net": 1,
	
	"ccgoufang.com": 1,
	
	"ccic.com": 1,
	
	"ccidcom.com": 1,
	
	"ccidnet.com": 1,
	
	"ccjoy.com": 1,
	
	"cclcn.com": 1,
	
	"ccm-1.com": 1,
	
	"ccmn.net": 1,
	
	"ccn360.com": 1,
	
	"ccnpic.com": 1,
	
	"ccoalnews.com": 1,
	
	"ccost.com": 1,
	
	"ccpc360.com": 1,
	
	"ccpit.org": 1,
	
	"ccpitnb.org": 1,
	
	"ccr100.com": 1,
	
	"cct114.com": 1,
	
	"cctb.net": 1,
	
	"cctcct.com": 1,
	
	"cctiedu.com": 1,
	
	"cctime.com": 1,
	
	"cctv.com": 1,
	
	"cctvcj.com": 1,
	
	"cctvmall.com": 1,
	
	"cctvpic.com": 1,
	
	"cctw.cc": 1,
	
	"ccughc.net": 1,
	
	"ccutu.com": 1,
	
	"ccwcw.com": 1,
	
	"ccwushu.com": 1,
	
	"cd-feiyue.com": 1,
	
	"cdaidu.com": 1,
	
	"cdbcw.com": 1,
	
	"cddiaosu.com": 1,
	
	"cdedu.com": 1,
	
	"cdgtw.net": 1,
	
	"cdjjedu.net": 1,
	
	"cdjsjx.com": 1,
	
	"cdn-apple.com": 1,
	
	"cdn.jsdelivr.net": 1,
	
	"cdn20.com": 1,
	
	"cdn86.net": 1,
	
	"cdnbee.com": 1,
	
	"cdndm.com": 1,
	
	"cdndm5.com": 1,
	
	"cdnet110.com": 1,
	
	"cdnle.net": 1,
	
	"cdnmaster.com": 1,
	
	"cdnst.net": 1,
	
	"cdog.me": 1,
	
	"cdqss.com": 1,
	
	"cdrfjc.com": 1,
	
	"cdrtvu.com": 1,
	
	"cdrx.net": 1,
	
	"cdscjd.com": 1,
	
	"cdsme.com": 1,
	
	"cdsydc.com": 1,
	
	"cdyee.com": 1,
	
	"cdygdq.com": 1,
	
	"cdyipin.com": 1,
	
	"cdyou.net": 1,
	
	"cdyzg.com": 1,
	
	"cdzgh.com": 1,
	
	"ce-air.com": 1,
	
	"ce.cn": 1,
	
	"ce02.net": 1,
	
	"ceair.com": 1,
	
	"cebbank.com": 1,
	
	"cecb2b.com": 1,
	
	"ceccen.com": 1,
	
	"cee.network": 1,
	
	"cehome.com": 1,
	
	"cehui8.com": 1,
	
	"ceiea.com": 1,
	
	"cement365.com": 1,
	
	"cementren.com": 1,
	
	"centanet.com": 1,
	
	"centuryholding.com": 1,
	
	"cenwor.com": 1,
	
	"ceoeo.com": 1,
	
	"ceotx.com": 1,
	
	"ceowan.com": 1,
	
	"cer.net": 1,
	
	"ceramicschina.com": 1,
	
	"cernet.com": 1,
	
	"cersp.com": 1,
	
	"ceunion.com": 1,
	
	"cf668.com": 1,
	
	"cfachina.org": 1,
	
	"cfanclub.net": 1,
	
	"cfcyb.com": 1,
	
	"cfd163.com": 1,
	
	"cfedu.net": 1,
	
	"cfhot.com": 1,
	
	"cfmmc.com": 1,
	
	"cguardian.com": 1,
	
	"cguwan.com": 1,
	
	"ch.com": 1,
	
	"ch999.com": 1,
	
	"chaduo.com": 1,
	
	"chaej.com": 1,
	
	"chahaoba.com": 1,
	
	"chahaotai.com": 1,
	
	"chahua.org": 1,
	
	"chaic.com": 1,
	
	"chajie.com": 1,
	
	"chamei.com": 1,
	
	"champconsult.com": 1,
	
	"chanel.com": 1,
	
	"changan.biz": 1,
	
	"changdedj.net": 1,
	
	"changfon.com": 1,
	
	"changhongnet.com": 1,
	
	"changjiangtimes.com": 1,
	
	"changyou.com": 1,
	
	"changzhinews.com": 1,
	
	"chaoren.com": 1,
	
	"chaoxing.com": 1,
	
	"chaozhoudaily.com": 1,
	
	"chasfz.com": 1,
	
	"chashebao.com": 1,
	
	"chaxun.la": 1,
	
	"chazidian.com": 1,
	
	"chazuo.com": 1,
	
	"chcpmc.com": 1,
	
	"che-piao.com": 1,
	
	"che12.com": 1,
	
	"che168.com": 1,
	
	"che2.com": 1,
	
	"cheaa.com": 1,
	
	"cheari.com": 1,
	
	"chebiao.net": 1,
	
	"checkoo.com": 1,
	
	"cheduo.com": 1,
	
	"cheduoshao.com": 1,
	
	"chefans.com": 1,
	
	"chelink.com": 1,
	
	"chem17.com": 1,
	
	"chem365.net": 1,
	
	"chem960.com": 1,
	
	"chem99.com": 1,
	
	"chemayi.com": 1,
	
	"chemdrug.com": 1,
	
	"chemishu.com": 1,
	
	"chemmade.com": 1,
	
	"chemnet.com": 1,
	
	"chemrc.com": 1,
	
	"chemsb.com": 1,
	
	"chengan5.com": 1,
	
	"chengche.cc": 1,
	
	"chengdechina.com": 1,
	
	"chengdu56.org": 1,
	
	"chengdujjw.com": 1,
	
	"chengguw.com": 1,
	
	"chengkao365.com": 1,
	
	"chengshiw.com": 1,
	
	"chengshizg.com": 1,
	
	"chengw.com": 1,
	
	"chengyangnews.com": 1,
	
	"chenhr.com": 1,
	
	"chepin88.com": 1,
	
	"chepinnet.com": 1,
	
	"cheshi-img.com": 1,
	
	"cheshi.com": 1,
	
	"chetuanwang.net": 1,
	
	"chetx.com": 1,
	
	"chetxia.com": 1,
	
	"chewen.com": 1,
	
	"chexiu.com": 1,
	
	"chexun.com": 1,
	
	"chexun.net": 1,
	
	"cheyian.com": 1,
	
	"cheyisou.com": 1,
	
	"cheyou123.com": 1,
	
	"cheyun.com": 1,
	
	"chgcw.com": 1,
	
	"chhkjob.com": 1,
	
	"china-3.com": 1,
	
	"china-315.com": 1,
	
	"china-ah.com": 1,
	
	"china-asahi.com": 1,
	
	"china-b.com": 1,
	
	"china-botschaft.de": 1,
	
	"china-cba.net": 1,
	
	"china-cdt.com": 1,
	
	"china-changlin.com": 1,
	
	"china-channel.com": 1,
	
	"china-chuwei.com": 1,
	
	"china-consulate.org": 1,
	
	"china-cotton.org": 1,
	
	"china-cx.net": 1,
	
	"china-d.com": 1,
	
	"china-designer.com": 1,
	
	"china-edai.com": 1,
	
	"china-ef.com": 1,
	
	"china-eia.com": 1,
	
	"china-embassy.or.jp": 1,
	
	"china-embassy.org": 1,
	
	"china-erzhong.com": 1,
	
	"china-fire.com": 1,
	
	"china-flower.com": 1,
	
	"china-holiday.com": 1,
	
	"china-huaxue.com": 1,
	
	"china-insurance.com": 1,
	
	"china-lottery.net": 1,
	
	"china-lushan.com": 1,
	
	"china-nengyuan.com": 1,
	
	"china-pub.com": 1,
	
	"china-school.net": 1,
	
	"china-seeq.com": 1,
	
	"china-shufajia.com": 1,
	
	"china-slate.com": 1,
	
	"china-sss.com": 1,
	
	"china-train.net": 1,
	
	"china-up.com": 1,
	
	"china-waste.com": 1,
	
	"china-zibo.com": 1,
	
	"china.com": 1,
	
	"china001.com": 1,
	
	"china10.org": 1,
	
	"china114net.com": 1,
	
	"china123.net": 1,
	
	"china12365.com": 1,
	
	"china1f.com": 1,
	
	"china2car.com": 1,
	
	"china3-d.com": 1,
	
	"chinaacc.com": 1,
	
	"chinaamc.com": 1,
	
	"chinaasc.org": 1,
	
	"chinaavl.com": 1,
	
	"chinabathware.com": 1,
	
	"chinabdh.com": 1,
	
	"chinabdt.com": 1,
	
	"chinabgao.com": 1,
	
	"chinabidding.com": 1,
	
	"chinabmi.com": 1,
	
	"chinabreed.com": 1,
	
	"chinabug.net": 1,
	
	"chinabuses.com": 1,
	
	"chinabx.com": 1,
	
	"chinabyte.com": 1,
	
	"chinabzp.com": 1,
	
	"chinacache.com": 1,
	
	"chinacache.net": 1,
	
	"chinacaipu.com": 1,
	
	"chinacarbide.com": 1,
	
	"chinacars.com": 1,
	
	"chinacbe.com": 1,
	
	"chinaccd.net": 1,
	
	"chinaccm.com": 1,
	
	"chinaccnet.com": 1,
	
	"chinacct.org": 1,
	
	"chinaceot.com": 1,
	
	"chinachemnet.com": 1,
	
	"chinachugui.com": 1,
	
	"chinacity.net": 1,
	
	"chinacitywater.org": 1,
	
	"chinacnr.com": 1,
	
	"chinacoal.com": 1,
	
	"chinacoop.com": 1,
	
	"chinacourt.org": 1,
	
	"chinacpx.com": 1,
	
	"chinacqsb.com": 1,
	
	"chinacrane.net": 1,
	
	"chinacreator.com": 1,
	
	"chinacses.org": 1,
	
	"chinaculture.org": 1,
	
	"chinacxgd.com": 1,
	
	"chinadance.com": 1,
	
	"chinadmoz.org": 1,
	
	"chinadrtv.com": 1,
	
	"chinadyt.com": 1,
	
	"chinaeda.org": 1,
	
	"chinaedu.com": 1,
	
	"chinaedunet.com": 1,
	
	"chinaeic.net": 1,
	
	"chinaenvironment.com": 1,
	
	"chinaeol.net": 1,
	
	"chinaeye.com": 1,
	
	"chinafastener.biz": 1,
	
	"chinafix.com": 1,
	
	"chinaforklift.com": 1,
	
	"chinafudaoban.com": 1,
	
	"chinagames.net": 1,
	
	"chinagb.net": 1,
	
	"chinagba.com": 1,
	
	"chinagiftsfair.com": 1,
	
	"chinagoldgroup.com": 1,
	
	"chinagwy.org": 1,
	
	"chinagwyw.org": 1,
	
	"chinagzn.com": 1,
	
	"chinahaoan.com": 1,
	
	"chinahazelnut.com": 1,
	
	"chinahbnet.com": 1,
	
	"chinahightech.com": 1,
	
	"chinahighway.com": 1,
	
	"chinahr.com": 1,
	
	"chinahrd.net": 1,
	
	"chinahrt.com": 1,
	
	"chinahufa.net": 1,
	
	"chinahvacr.com": 1,
	
	"chinaielts.org": 1,
	
	"chinaiiss.com": 1,
	
	"chinaiiss.org": 1,
	
	"chinaiol.com": 1,
	
	"chinairn.com": 1,
	
	"chinairr.org": 1,
	
	"chinaitlab.com": 1,
	
	"chinajnhb.com": 1,
	
	"chinajob.com": 1,
	
	"chinajoy.net": 1,
	
	"chinajsxx.com": 1,
	
	"chinajxship.com": 1,
	
	"chinajzw.com": 1,
	
	"chinakaoyan.com": 1,
	
	"chinakingo.com": 1,
	
	"chinalao.com": 1,
	
	"chinalawedu.com": 1,
	
	"chinalawinfo.com": 1,
	
	"chinaleather.org": 1,
	
	"chinaluxus.com": 1,
	
	"chinalxnet.com": 1,
	
	"chinameirongspa.com": 1,
	
	"chinamendu.com": 1,
	
	"chinamenwang.com": 1,
	
	"chinametro.net": 1,
	
	"chinamining.com": 1,
	
	"chinamobile.com": 1,
	
	"chinamost.net": 1,
	
	"chinamr.net": 1,
	
	"chinamsr.com": 1,
	
	"chinamypp.com": 1,
	
	"chinanetcenter.com": 1,
	
	"chinanetsun.com": 1,
	
	"chinaneweast.com": 1,
	
	"chinanews.com": 1,
	
	"chinaningbo.com": 1,
	
	"chinanotary.org": 1,
	
	"chinaoct.com": 1,
	
	"chinaok.com": 1,
	
	"chinaore.com": 1,
	
	"chinapaper.net": 1,
	
	"chinapay.com": 1,
	
	"chinapet.com": 1,
	
	"chinapipe.net": 1,
	
	"chinapnr.com": 1,
	
	"chinaports.com": 1,
	
	"chinaports.org": 1,
	
	"chinapp.com": 1,
	
	"chinaql.org": 1,
	
	"chinaqw.com": 1,
	
	"chinaren.com": 1,
	
	"chinaseed.net": 1,
	
	"chinasexq.com": 1,
	
	"chinashishi.net": 1,
	
	"chinaso.com": 1,
	
	"chinaspeeds.net": 1,
	
	"chinasq.com": 1,
	
	"chinassl.net": 1,
	
	"chinasspp.com": 1,
	
	"chinaswitch.com": 1,
	
	"chinasws.com": 1,
	
	"chinataiwan.org": 1,
	
	"chinatarena.com": 1,
	
	"chinatat.com": 1,
	
	"chinatibetnews.com": 1,
	
	"chinatietong.com": 1,
	
	"chinatimes.cc": 1,
	
	"chinatour-net.com": 1,
	
	"chinatruck.org": 1,
	
	"chinatsi.com": 1,
	
	"chinauma.com": 1,
	
	"chinauma.net": 1,
	
	"chinaunicom.com": 1,
	
	"chinaunionpay.com": 1,
	
	"chinaunix.net": 1,
	
	"chinaups.com": 1,
	
	"chinavalue.net": 1,
	
	"chinavegan.com": 1,
	
	"chinavisual.com": 1,
	
	"chinavnet.com": 1,
	
	"chinavoa.com": 1,
	
	"chinaw3.com": 1,
	
	"chinaw3c.org": 1,
	
	"chinawatchnet.com": 1,
	
	"chinawbsyxh.com": 1,
	
	"chinawch.com": 1,
	
	"chinaweiyu.com": 1,
	
	"chinawestagr.com": 1,
	
	"chinawestnews.net": 1,
	
	"chinawjol.com": 1,
	
	"chinawoodnet.com": 1,
	
	"chinawudang.com": 1,
	
	"chinawutong.com": 1,
	
	"chinawuyuan.com": 1,
	
	"chinaww.org": 1,
	
	"chinaxiaokang.com": 1,
	
	"chinaxinge.com": 1,
	
	"chinaxq.com": 1,
	
	"chinaxwcb.com": 1,
	
	"chinayigui.com": 1,
	
	"chinayouji.com": 1,
	
	"chinayyjx.com": 1,
	
	"chinaz.com": 1,
	
	"chinazichan.com": 1,
	
	"chinazikao.com": 1,
	
	"chinazjy.com": 1,
	
	"chinazy.org": 1,
	
	"chinca.org": 1,
	
	"chinese-focus.com": 1,
	
	"chinesecio.com": 1,
	
	"chineseconsulate.org": 1,
	
	"chineseembassy.org": 1,
	
	"chinesejy.com": 1,
	
	"chint.com": 1,
	
	"chiphell.com": 1,
	
	"chizhoujob.com": 1,
	
	"chizhouren.com": 1,
	
	"chiznews.com": 1,
	
	"chnart.com": 1,
	
	"chnpac.com": 1,
	
	"chnsuv.com": 1,
	
	"chnvc.com": 1,
	
	"chnweiyu.com": 1,
	
	"chofn.com": 1,
	
	"chongchuang.biz": 1,
	
	"chsi.com.cn": 1,
	
	"chtf.com": 1,
	
	"chtgc.com": 1,
	
	"chuandong.com": 1,
	
	"chuangelm.com": 1,
	
	"chuangkit.com": 1,
	
	"chuangxin.com": 1,
	
	"chuangye.com": 1,
	
	"chuangyemeng.com": 1,
	
	"chuangzaoshi.com": 1,
	
	"chuanke.com": 1,
	
	"chuanmeicn.com": 1,
	
	"chuansong.me": 1,
	
	"chuban.cc": 1,
	
	"chufw.com": 1,
	
	"chuguo78.com": 1,
	
	"chuguohome.com": 1,
	
	"chunni.org": 1,
	
	"chunqiuwang.com": 1,
	
	"chushan.com": 1,
	
	"chutou.net": 1,
	
	"ci-bo.org": 1,
	
	"ci123.com": 1,
	
	"ciceme.com": 1,
	
	"cidu.net": 1,
	
	"cieccpa.org": 1,
	
	"cifco.net": 1,
	
	"ciftis.org": 1,
	
	"ciif-expo.com": 1,
	
	"ciku5.com": 1,
	
	"cioage.com": 1,
	
	"cippe.net": 1,
	
	"cisco.com": 1,
	
	"cisregister.com": 1,
	
	"citic.com": 1,
	
	"citiz.net": 1,
	
	"citsnj.com": 1,
	
	"city8.com": 1,
	
	"citygf.com": 1,
	
	"citysbs.com": 1,
	
	"cityy.com": 1,
	
	"civilaviation.cc": 1,
	
	"civilness.com": 1,
	
	"ciweek.com": 1,
	
	"ciwong.com": 1,
	
	"ciwong.net": 1,
	
	"cixiedu.net": 1,
	
	"cjdby.net": 1,
	
	"cjol.com": 1,
	
	"cjrcsc.com": 1,
	
	"cjyyw.com": 1,
	
	"ckplayer.com": 1,
	
	"cl0438.com": 1,
	
	"cl597.com": 1,
	
	"class.coursera.org": 1,
	
	"class01.com": 1,
	
	"classic023.com": 1,
	
	"clcmw.com": 1,
	
	"cli.im": 1,
	
	"cljmmm123.com": 1,
	
	"clotheshr.com": 1,
	
	"clothr.com": 1,
	
	"cloudcdn.net": 1,
	
	"clouddn.com": 1,
	
	"cloudinary.com": 1,
	
	"cloudxns.net": 1,
	
	"clssn.com": 1,
	
	"cltt.org": 1,
	
	"cmbchina.com": 1,
	
	"cmejob.com": 1,
	
	"cmes.org": 1,
	
	"cmfu.com": 1,
	
	"cmge.com": 1,
	
	"cmhk.com": 1,
	
	"cmitsd.com": 1,
	
	"cmol.com": 1,
	
	"cmread.com": 1,
	
	"cmstop.com": 1,
	
	"cmt178.com": 1,
	
	"cmwb.com": 1,
	
	"cmxrcw.com": 1,
	
	"cn": 1,
	
	"cn-122.com": 1,
	
	"cn-diaoyu.com": 1,
	
	"cn-ny.org": 1,
	
	"cn-office.com": 1,
	
	"cn-roofexpert.com": 1,
	
	"cn-truck.com": 1,
	
	"cn.archive.ubuntu.com": 1,
	
	"cn.bing.com": 1,
	
	"cn.bing.net": 1,
	
	"cn.coremetrics.com": 1,
	
	"cn.debian.org": 1,
	
	"cn.jobs": 1,
	
	"cn.msn.com": 1,
	
	"cn.net": 1,
	
	"cn010w.com": 1,
	
	"cn0434.com": 1,
	
	"cn0556.com": 1,
	
	"cn0851.com": 1,
	
	"cn0917.com": 1,
	
	"cn12333.com": 1,
	
	"cn21edu.com": 1,
	
	"cn2car.net": 1,
	
	"cn2che.com": 1,
	
	"cn357.com": 1,
	
	"cn5135.com": 1,
	
	"cn539.com": 1,
	
	"cn716.com": 1,
	
	"cnad.com": 1,
	
	"cnadtop.com": 1,
	
	"cnagri.com": 1,
	
	"cnaho.com": 1,
	
	"cnair.com": 1,
	
	"cnak2.englishtown.com": 1,
	
	"cnal.com": 1,
	
	"cnautonews.com": 1,
	
	"cnbaowen.net": 1,
	
	"cnbeta.com": 1,
	
	"cnbetacdn.com": 1,
	
	"cnblogs.com": 1,
	
	"cnbzxw.com": 1,
	
	"cnchache.net": 1,
	
	"cnchainnet.com": 1,
	
	"cnchu.com": 1,
	
	"cncma.org": 1,
	
	"cncn.com": 1,
	
	"cncn.net": 1,
	
	"cncookernet.com": 1,
	
	"cncopter.com": 1,
	
	"cncotton.com": 1,
	
	"cncourt.org": 1,
	
	"cncproduct.com": 1,
	
	"cncraftinfo.com": 1,
	
	"cncrk.com": 1,
	
	"cnd8.com": 1,
	
	"cndae.com": 1,
	
	"cndesign.com": 1,
	
	"cndianlu.net": 1,
	
	"cndingxi.com": 1,
	
	"cndns.com": 1,
	
	"cndog.net": 1,
	
	"cndoornet.com": 1,
	
	"cndoors.com": 1,
	
	"cndrsq.com": 1,
	
	"cndrynet.com": 1,
	
	"cndsi.com": 1,
	
	"cndzys.com": 1,
	
	"cnelc.com": 1,
	
	"cneln.net": 1,
	
	"cnena.com": 1,
	
	"cnenergy.org": 1,
	
	"cnep001.com": 1,
	
	"cnepaper.com": 1,
	
	"cnepub.com": 1,
	
	"cnfeol.com": 1,
	
	"cnffi.com": 1,
	
	"cnfilternet.com": 1,
	
	"cnfla.com": 1,
	
	"cnfol.com": 1,
	
	"cnfolimg.com": 1,
	
	"cnforex.com": 1,
	
	"cnfq.com": 1,
	
	"cnfrp.net": 1,
	
	"cnfruit.com": 1,
	
	"cnfxj.org": 1,
	
	"cnfzflw.com": 1,
	
	"cngaosu.com": 1,
	
	"cngba.com": 1,
	
	"cngold.org": 1,
	
	"cngoto.com": 1,
	
	"cngrain.com": 1,
	
	"cngsda.net": 1,
	
	"cnhaio.com": 1,
	
	"cnhan.com": 1,
	
	"cnhandan.com": 1,
	
	"cnhangyun.com": 1,
	
	"cnhbsb.net": 1,
	
	"cnhmsq.com": 1,
	
	"cnhnb.com": 1,
	
	"cnhuadong.net": 1,
	
	"cnhubei.com": 1,
	
	"cnhvacrnet.com": 1,
	
	"cnhzpjy.com": 1,
	
	"cninfo.net": 1,
	
	"cnipai.com": 1,
	
	"cnipr.com": 1,
	
	"cnitblog.com": 1,
	
	"cnjiaju.com": 1,
	
	"cnjidan.com": 1,
	
	"cnjj.com": 1,
	
	"cnjky.net": 1,
	
	"cnjnsb.com": 1,
	
	"cnjob.com": 1,
	
	"cnjsqw.com": 1,
	
	"cnjxol.com": 1,
	
	"cnjyw.net": 1,
	
	"cnjywl.com": 1,
	
	"cnjzjj.com": 1,
	
	"cnkang.com": 1,
	
	"cnki.net": 1,
	
	"cnkjtf.com": 1,
	
	"cnkjz.com": 1,
	
	"cnkoi.net": 1,
	
	"cnkssb.net": 1,
	
	"cnledw.com": 1,
	
	"cnlightnet.com": 1,
	
	"cnlinfo.net": 1,
	
	"cnlist.org": 1,
	
	"cnluqiao.com": 1,
	
	"cnluye.com": 1,
	
	"cnmf.net": 1,
	
	"cnmill.com": 1,
	
	"cnmmhh.com": 1,
	
	"cnmo.com": 1,
	
	"cnmsw.net": 1,
	
	"cnnaihuo.com": 1,
	
	"cnnb.com": 1,
	
	"cnnl.tv": 1,
	
	"cnnyjx.net": 1,
	
	"cnoee.com": 1,
	
	"cnokcn.com": 1,
	
	"cnool.net": 1,
	
	"cnoutdoor.com": 1,
	
	"cnpatent.com": 1,
	
	"cnpension.net": 1,
	
	"cnphotos.net": 1,
	
	"cnpickups.com": 1,
	
	"cnpkm.com": 1,
	
	"cnpowdernet.com": 1,
	
	"cnpubg.com": 1,
	
	"cnpv.com": 1,
	
	"cnqc.com": 1,
	
	"cnqjc.com": 1,
	
	"cnqjw.com": 1,
	
	"cnqr.org": 1,
	
	"cnr.cn": 1,
	
	"cnradio.com": 1,
	
	"cnrdn.com": 1,
	
	"cnread.net": 1,
	
	"cnree.com": 1,
	
	"cnrencai.com": 1,
	
	"cnrepair.com": 1,
	
	"cnrepark.com": 1,
	
	"cnsb.org": 1,
	
	"cnsb.tv": 1,
	
	"cnseeq.com": 1,
	
	"cnshicai.net": 1,
	
	"cnshipnet.com": 1,
	
	"cnshipping.com": 1,
	
	"cnsifa.net": 1,
	
	"cnsikao.com": 1,
	
	"cnsimin.com": 1,
	
	"cnsnpj.com": 1,
	
	"cnsphoto.com": 1,
	
	"cnsqzx.com": 1,
	
	"cnstock.com": 1,
	
	"cnsuning.com": 1,
	
	"cnsuv.com": 1,
	
	"cnsyyx.com": 1,
	
	"cnta.com": 1,
	
	"cntaijiquan.com": 1,
	
	"cntaiping.com": 1,
	
	"cntc.com": 1,
	
	"cntexjob.com": 1,
	
	"cntheory.com": 1,
	
	"cntour2.com": 1,
	
	"cntrades.com": 1,
	
	"cntronics.com": 1,
	
	"cntv.cn": 1,
	
	"cnv168.com": 1,
	
	"cnwaternews.com": 1,
	
	"cnwav.com": 1,
	
	"cnwdjj.com": 1,
	
	"cnwear.com": 1,
	
	"cnwen.net": 1,
	
	"cnwest.com": 1,
	
	"cnwest88.com": 1,
	
	"cnwinenews.com": 1,
	
	"cnworld.net": 1,
	
	"cnwpem.com": 1,
	
	"cnwuyun.com": 1,
	
	"cnxad.com": 1,
	
	"cnxds.com": 1,
	
	"cnxiantao.com": 1,
	
	"cnxianzai.com": 1,
	
	"cnxishui.net": 1,
	
	"cnyigui.com": 1,
	
	"cnys.com": 1,
	
	"cnyu.com": 1,
	
	"cnyw.net": 1,
	
	"cnyxs.com": 1,
	
	"cnzao.com": 1,
	
	"cnzhantuan.com": 1,
	
	"cnzhengmu.com": 1,
	
	"cnzjqi.com": 1,
	
	"cnzsyz.com": 1,
	
	"cnzz.com": 1,
	
	"cnzz.net": 1,
	
	"co188.com": 1,
	
	"coal-link.com": 1,
	
	"coalcn.com": 1,
	
	"coaoo.com": 1,
	
	"coatingol.com": 1,
	
	"coco90.com": 1,
	
	"cocoachina.com": 1,
	
	"cocoren.com": 1,
	
	"cocos2d-x.org": 1,
	
	"codefans.net": 1,
	
	"coderstory.cn": 1,
	
	"coding.io": 1,
	
	"coding.me": 1,
	
	"coding.net": 1,
	
	"cofco.com": 1,
	
	"cofeed.com": 1,
	
	"cofool.com": 1,
	
	"cogonline.com": 1,
	
	"comac.cc": 1,
	
	"comicyu.com": 1,
	
	"compete.com": 1,
	
	"comsenz.com": 1,
	
	"conshow.com": 1,
	
	"coo8.com": 1,
	
	"coodir.com": 1,
	
	"cool-de.com": 1,
	
	"coolapk.com": 1,
	
	"coolpad.com": 1,
	
	"coolxap.com": 1,
	
	"coolzan.com": 1,
	
	"coop100.com": 1,
	
	"coopb2b.com": 1,
	
	"coovee.net": 1,
	
	"copperhome.net": 1,
	
	"corpease.net": 1,
	
	"cosco.com": 1,
	
	"cottonchina.org": 1,
	
	"cozyee.com": 1,
	
	"cp2y.com": 1,
	
	"cpdyj.com": 1,
	
	"cpecc.net": 1,
	
	"cphoto.net": 1,
	
	"cpooo.com": 1,
	
	"cpp114.com": 1,
	
	"cppfoto.com": 1,
	
	"cps1688.com": 1,
	
	"cps800.com": 1,
	
	"cptjob.com": 1,
	
	"cpv6.com": 1,
	
	"cpvjob.com": 1,
	
	"cq315.org": 1,
	
	"cq3a.com": 1,
	
	"cq6.com": 1,
	
	"cqbnda.com": 1,
	
	"cqbnedu.com": 1,
	
	"cqbnkx.com": 1,
	
	"cqbnly.com": 1,
	
	"cqbnrc.com": 1,
	
	"cqbntv.com": 1,
	
	"cqbys.com": 1,
	
	"cqcb.com": 1,
	
	"cqcoal.com": 1,
	
	"cqcsrc.com": 1,
	
	"cqdent.com": 1,
	
	"cqduomi.com": 1,
	
	"cqfire.com": 1,
	
	"cqfishing.net": 1,
	
	"cqgh.org": 1,
	
	"cqgj.net": 1,
	
	"cqhaokou.com": 1,
	
	"cqhxjd.net": 1,
	
	"cqjiaz.com": 1,
	
	"cqjjnet.com": 1,
	
	"cqjob.com": 1,
	
	"cqjsxx.com": 1,
	
	"cqjy.com": 1,
	
	"cqkx.com": 1,
	
	"cqlozz.com": 1,
	
	"cqmama.net": 1,
	
	"cqmmgo.com": 1,
	
	"cqnc.cc": 1,
	
	"cqncnews.com": 1,
	
	"cqnews.net": 1,
	
	"cqqiyi.com": 1,
	
	"cqqnb.net": 1,
	
	"cqrc.net": 1,
	
	"cqshebao.net": 1,
	
	"cqshenou.com": 1,
	
	"cqskl.com": 1,
	
	"cqtea.com": 1,
	
	"cqtransit.com": 1,
	
	"cquae.com": 1,
	
	"cqvip.com": 1,
	
	"cqwin.com": 1,
	
	"cqwu.net": 1,
	
	"cqxh120.com": 1,
	
	"cqxiehe.com": 1,
	
	"cqxsss.com": 1,
	
	"cqxszx.net": 1,
	
	"cqyc.net": 1,
	
	"cqyun.net": 1,
	
	"cqzls.com": 1,
	
	"cqzx.net": 1,
	
	"cqzx.org": 1,
	
	"cr173.com": 1,
	
	"cr18g.com": 1,
	
	"crabchina.com": 1,
	
	"craftcontact.com": 1,
	
	"crec4.com": 1,
	
	"crecg.com": 1,
	
	"crgk.org": 1,
	
	"cric.com": 1,
	
	"crm1001.com": 1,
	
	"crmgz.com": 1,
	
	"crosswaycn.com": 1,
	
	"crsky.com": 1,
	
	"crystaledu.com": 1,
	
	"cs-air.com": 1,
	
	"cs090.com": 1,
	
	"cs2sc.com": 1,
	
	"cs53.com": 1,
	
	"cs6s.com": 1,
	
	"csadec.com": 1,
	
	"csair.com": 1,
	
	"csats.net": 1,
	
	"csbew.com": 1,
	
	"csc86.com": 1,
	
	"cscec.com": 1,
	
	"cscoal.com": 1,
	
	"cscsf.com": 1,
	
	"cscyw.com": 1,
	
	"csdn.net": 1,
	
	"csdnimg.cn": 1,
	
	"cseyzx.com": 1,
	
	"csgc365.com": 1,
	
	"csgia.net": 1,
	
	"csgm168.com": 1,
	
	"csln.net": 1,
	
	"csmama.net": 1,
	
	"csmes.org": 1,
	
	"csrcsc.com": 1,
	
	"css.net": 1,
	
	"css.network": 1,
	
	"cssmoban.com": 1,
	
	"csstoday.net": 1,
	
	"cssyzxx.com": 1,
	
	"csvw.com": 1,
	
	"csxnews.com": 1,
	
	"csxww.com": 1,
	
	"csytv.com": 1,
	
	"cszx.com": 1,
	
	"ct10000.com": 1,
	
	"ct108.com": 1,
	
	"ct597.com": 1,
	
	"ctaoci.com": 1,
	
	"ctdisk.com": 1,
	
	"cteaw.com": 1,
	
	"ctfile.com": 1,
	
	"cthnet.com": 1,
	
	"cthy.com": 1,
	
	"ctiforum.com": 1,
	
	"ctqcp.com": 1,
	
	"ctrip.co.kr": 1,
	
	"ctrip.com": 1,
	
	"ctrip.com.hk": 1,
	
	"ctsho.com": 1,
	
	"cttsd.com": 1,
	
	"ctule.com": 1,
	
	"ctxyw.com": 1,
	
	"cubead.com": 1,
	
	"cuctv.com": 1,
	
	"cug2313.com": 1,
	
	"cunan.com": 1,
	
	"cuncun8.com": 1,
	
	"cuplayer.com": 1,
	
	"custeel.com": 1,
	
	"cut35.com": 1,
	
	"cutv.com": 1,
	
	"cwan.com": 1,
	
	"cwddd.com": 1,
	
	"cwestc.com": 1,
	
	"cwiif.com": 1,
	
	"cwmining.com": 1,
	
	"cwroom.com": 1,
	
	"cxhr.com": 1,
	
	"cxtvu.net": 1,
	
	"cxwl.com": 1,
	
	"cxwy.org": 1,
	
	"cxwz.org": 1,
	
	"cy.com": 1,
	
	"cy580.com": 1,
	
	"cy887.com": 1,
	
	"cycnet.com": 1,
	
	"cycoo.com": 1,
	
	"cyedu.org": 1,
	
	"cyjyw.net": 1,
	
	"cyol.com": 1,
	
	"cyol.net": 1,
	
	"cz2sc.com": 1,
	
	"cz365.com": 1,
	
	"czbanbantong.com": 1,
	
	"czbtv.com": 1,
	
	"czch.net": 1,
	
	"czepb.com": 1,
	
	"czfcw.com": 1,
	
	"czgjj.com": 1,
	
	"czinfo.net": 1,
	
	"czjpw.com": 1,
	
	"czonline.net": 1,
	
	"czrrw.com": 1,
	
	"czrxw.com": 1,
	
	"czsrc.com": 1,
	
	"cztour.com": 1,
	
	"cztv.com": 1,
	
	"czvv.com": 1,
	
	"czwlgy.com": 1,
	
	"czxiu.com": 1,
	
	"d17.cc": 1,
	
	"d1cm.com": 1,
	
	"d1net.com": 1,
	
	"d1xz.net": 1,
	
	"d7vg.com": 1,
	
	"d8wed.com": 1,
	
	"d9soft.com": 1,
	
	"da-hang.net": 1,
	
	"daba.com": 1,
	
	"dachanet.com": 1,
	
	"dachenglaw.com": 1,
	
	"dachengnet.com": 1,
	
	"dadipedia.com": 1,
	
	"dadiwang.com": 1,
	
	"dadiwang.net": 1,
	
	"dadou.com": 1,
	
	"dadunet.com": 1,
	
	"dafengso.com": 1,
	
	"dagancn.com": 1,
	
	"dagangcheng.com": 1,
	
	"daguantao.com": 1,
	
	"dahainan.com": 1,
	
	"dahangzhou.com": 1,
	
	"dahecc.com": 1,
	
	"dahei.com": 1,
	
	"daheshui.com": 1,
	
	"dahoutao.com": 1,
	
	"dahua8.com": 1,
	
	"dahuawang.com": 1,
	
	"dahuoji.biz": 1,
	
	"dai911.com": 1,
	
	"daibini.com": 1,
	
	"daikuane.com": 1,
	
	"dailyqd.com": 1,
	
	"daisonghua.com": 1,
	
	"daixiaomi.com": 1,
	
	"daiyanbao.com": 1,
	
	"dajiabao.com": 1,
	
	"dajianet.com": 1,
	
	"dajiashuo.com": 1,
	
	"dajiazhao.com": 1,
	
	"dajie.com": 1,
	
	"damuzzz.com": 1,
	
	"dance365.com": 1,
	
	"dance888.com": 1,
	
	"dandanplay.com": 1,
	
	"dang3.com": 1,
	
	"dangdang.com": 1,
	
	"dangjian.com": 1,
	
	"danzhaowang.com": 1,
	
	"daocloud.io": 1,
	
	"daodao.com": 1,
	
	"daogoubang.com": 1,
	
	"daoguo.com": 1,
	
	"daoxila.com": 1,
	
	"daoxila.net": 1,
	
	"daozhou.net": 1,
	
	"dapu.com": 1,
	
	"daqi.com": 1,
	
	"daqing.net": 1,
	
	"daqsoft.com": 1,
	
	"darczpw.com": 1,
	
	"darongcheng.com": 1,
	
	"darryring.com": 1,
	
	"datagrand.com": 1,
	
	"davinfo.com": 1,
	
	"daxiangrc.com": 1,
	
	"dayoo.com": 1,
	
	"dayou123.com": 1,
	
	"dazhaiwang.com": 1,
	
	"dazhe5.com": 1,
	
	"dazhenzimiao.com": 1,
	
	"dazhongemiao.com": 1,
	
	"dazhonghr.com": 1,
	
	"dazhoushan.com": 1,
	
	"dazibo.com": 1,
	
	"dazpin.com": 1,
	
	"db-nw.com": 1,
	
	"db2car.com": 1,
	
	"dbank.com": 1,
	
	"dbgtzx.com": 1,
	
	"dbtc888.com": 1,
	
	"dc-cn.com": 1,
	
	"dcqedu.com": 1,
	
	"dcxnews.com": 1,
	
	"dd001.net": 1,
	
	"ddcsh.com": 1,
	
	"ddjob.net": 1,
	
	"ddmap.com": 1,
	
	"ddmapimg.com": 1,
	
	"ddooo.com": 1,
	
	"ddos.cc": 1,
	
	"ddvip.com": 1,
	
	"decwhy.com": 1,
	
	"dedecms.com": 1,
	
	"deepin.com": 1,
	
	"deepin.org": 1,
	
	"dehua.net": 1,
	
	"demage.com": 1,
	
	"demage.net": 1,
	
	"demaxiya.com": 1,
	
	"denghuo.com": 1,
	
	"denglu.cc": 1,
	
	"dengzhou.tv": 1,
	
	"deppon.com": 1,
	
	"derenbs.com": 1,
	
	"desktx.com": 1,
	
	"destoon.com": 1,
	
	"deyang5.com": 1,
	
	"deyi.com": 1,
	
	"deyiso.com": 1,
	
	"dezhi.com": 1,
	
	"dezhoudaily.com": 1,
	
	"dfcfw.com": 1,
	
	"dfdaily.com": 1,
	
	"dfedu.com": 1,
	
	"dfhdw.com": 1,
	
	"dfhon.com": 1,
	
	"dflgnc.com": 1,
	
	"dflr.net": 1,
	
	"dfshw.com": 1,
	
	"dfsrcw.com": 1,
	
	"dftoutiao.com": 1,
	
	"dfysw.net": 1,
	
	"dg114.com": 1,
	
	"dg121.com": 1,
	
	"dgchangan.com": 1,
	
	"dginfo.com": 1,
	
	"dgjy.net": 1,
	
	"dgjyw.com": 1,
	
	"dglongmei.com": 1,
	
	"dgqjj.com": 1,
	
	"dgrc.net": 1,
	
	"dgrsg.com": 1,
	
	"dgtx888.com": 1,
	
	"dgyuanyi.com": 1,
	
	"dgzzm.com": 1,
	
	"dh818.com": 1,
	
	"dhgate.com": 1,
	
	"dhifi.com": 1,
	
	"diandian.com": 1,
	
	"diandong.com": 1,
	
	"diandongche.biz": 1,
	
	"dianji007.com": 1,
	
	"dianli114.com": 1,
	
	"dianpifa.com": 1,
	
	"dianping.com": 1,
	
	"dianpingba.com": 1,
	
	"dianyuan.com": 1,
	
	"dianzhanggui.net": 1,
	
	"diaochapai.com": 1,
	
	"diaochapai.net": 1,
	
	"diaochatong.com": 1,
	
	"diaoding.biz": 1,
	
	"diaokeji.net": 1,
	
	"diaoyanba.com": 1,
	
	"diaoyanbao.com": 1,
	
	"diaoyu.com": 1,
	
	"diaoyu123.com": 1,
	
	"diaoyu520.com": 1,
	
	"diaoyula.com": 1,
	
	"diaoyuwang.com": 1,
	
	"diaoyuweng.com": 1,
	
	"dichan.com": 1,
	
	"dict.cn": 1,
	
	"dili360.com": 1,
	
	"dilidili.com": 1,
	
	"dilidili.wang": 1,
	
	"dimeng.net": 1,
	
	"dinghuaren.com": 1,
	
	"dingsite.com": 1,
	
	"dingtalk.com": 1,
	
	"dingxinhui.com": 1,
	
	"dingyx.com": 1,
	
	"dionly.com": 1,
	
	"diqiuw.com": 1,
	
	"dir001.com": 1,
	
	"discoverhongkong.com": 1,
	
	"discoversources.com": 1,
	
	"discuz.com": 1,
	
	"discuz.net": 1,
	
	"ditan360.com": 1,
	
	"ditan369.com": 1,
	
	"diwei.net": 1,
	
	"diybeta.com": 1,
	
	"diyicai.com": 1,
	
	"diyifanwen.com": 1,
	
	"diyishijian.com": 1,
	
	"diyiyou.com": 1,
	
	"diypda.com": 1,
	
	"diytrade.com": 1,
	
	"diyvm.com": 1,
	
	"djcb71.com": 1,
	
	"djjw.com": 1,
	
	"djkk.com": 1,
	
	"djob.com": 1,
	
	"djxww.com": 1,
	
	"djye.com": 1,
	
	"dker.cc": 1,
	
	"dl.google.com": 1,
	
	"dld.com": 1,
	
	"dldcdn.com": 1,
	
	"dledu.com": 1,
	
	"dlflavor.com": 1,
	
	"dlgaoji.com": 1,
	
	"dllake.com": 1,
	
	"dlmonita.com": 1,
	
	"dltm.net": 1,
	
	"dlxww.com": 1,
	
	"dlysgh.com": 1,
	
	"dlzj.net": 1,
	
	"dm-rc.com": 1,
	
	"dm0571.com": 1,
	
	"dm456.com": 1,
	
	"dm5.com": 1,
	
	"dmansg.com": 1,
	
	"dmcbd.com": 1,
	
	"dmjob.net": 1,
	
	"dmjy.net": 1,
	
	"dmzj.com": 1,
	
	"dn1234.com": 1,
	
	"dnspod.cn": 1,
	
	"dnwx.com": 1,
	
	"dobest.com": 1,
	
	"doc88.com": 1,
	
	"docer.com": 1,
	
	"docin.com": 1,
	
	"dodonew.com": 1,
	
	"dog126.com": 1,
	
	"doido.com": 1,
	
	"dolcn.com": 1,
	
	"donews.com": 1,
	
	"dongao.com": 1,
	
	"dongbeiol.com": 1,
	
	"dongeedu.com": 1,
	
	"dongfang.com": 1,
	
	"dongfang8.com": 1,
	
	"dongfangnews.com": 1,
	
	"donglin.org": 1,
	
	"donglingying.cc": 1,
	
	"dongnanshan.com": 1,
	
	"dongtangad.com": 1,
	
	"dooland.com": 1,
	
	"doomii.com": 1,
	
	"doorhr.com": 1,
	
	"dospy.com": 1,
	
	"dostor.com": 1,
	
	"douban.com": 1,
	
	"douban.fm": 1,
	
	"doubanio.com": 1,
	
	"doubleclick.com": 1,
	
	"doubleclick.net": 1,
	
	"douguo.com": 1,
	
	"douluodalu123.com": 1,
	
	"douxie.com": 1,
	
	"douyin.com": 1,
	
	"douyu.com": 1,
	
	"douyucdn.cn": 1,
	
	"dowater.com": 1,
	
	"downhot.com": 1,
	
	"downxia.com": 1,
	
	"doyoo.net": 1,
	
	"doyouhike.net": 1,
	
	"dpfile.com": 1,
	
	"dpm360.com": 1,
	
	"dq247.com": 1,
	
	"dqccc.cc": 1,
	
	"dqccc.com": 1,
	
	"dqccc.net": 1,
	
	"dqcccc.com": 1,
	
	"dqdaily.com": 1,
	
	"dqguo.com": 1,
	
	"dqiong.com": 1,
	
	"dqjob88.com": 1,
	
	"dqzc.com": 1,
	
	"dragon-guide.net": 1,
	
	"dreams-travel.com": 1,
	
	"drivergenius.com": 1,
	
	"driversdown.com": 1,
	
	"ds123456.com": 1,
	
	"ds599.com": 1,
	
	"dsdod.com": 1,
	
	"dsfdc.com": 1,
	
	"dshigao.com": 1,
	
	"dshmama.com": 1,
	
	"dshrc.com": 1,
	
	"dsrlzy.com": 1,
	
	"dt123.net": 1,
	
	"dtcoalmine.com": 1,
	
	"dtjy.org": 1,
	
	"dtxmw.com": 1,
	
	"duanwenxue.com": 1,
	
	"duapp.com": 1,
	
	"duba.com": 1,
	
	"duba.net": 1,
	
	"duchang.org": 1,
	
	"duguletian.com": 1,
	
	"duitang.com": 1,
	
	"dukuai.com": 1,
	
	"duojiaochong.com": 1,
	
	"duokan.com": 1,
	
	"duomai.com": 1,
	
	"duomeiren.com": 1,
	
	"duomi.com": 1,
	
	"duoshitong.com": 1,
	
	"duoshuo.com": 1,
	
	"duote.com": 1,
	
	"duouoo.com": 1,
	
	"duowan.com": 1,
	
	"duoyewu.com": 1,
	
	"duoyi.com": 1,
	
	"dushicn.com": 1,
	
	"dushifang.com": 1,
	
	"duwenzhang.com": 1,
	
	"duxiu.com": 1,
	
	"dv37.com": 1,
	
	"dv37.net": 1,
	
	"dvbbs.net": 1,
	
	"dvimon.net": 1,
	
	"dwstatic.com": 1,
	
	"dx-job.com": 1,
	
	"dxda.com": 1,
	
	"dxddcx.com": 1,
	
	"dxszxy.com": 1,
	
	"dxy.com": 1,
	
	"dxycdn.com": 1,
	
	"dxyq.org": 1,
	
	"dxzx.com": 1,
	
	"dycars.com": 1,
	
	"dydh.tv": 1,
	
	"dyedu.net": 1,
	
	"dyfc.net": 1,
	
	"dyfcw.com": 1,
	
	"dygod.net": 1,
	
	"dyhjw.com": 1,
	
	"dyj.cc": 1,
	
	"dyplk.com": 1,
	
	"dyqc.com": 1,
	
	"dytt8.net": 1,
	
	"dz-z.com": 1,
	
	"dz169.net": 1,
	
	"dz1982.com": 1,
	
	"dz666.com": 1,
	
	"dzcnc.com": 1,
	
	"dzj.me": 1,
	
	"dzjob.net": 1,
	
	"dzmjw.com": 1,
	
	"dzqiche.com": 1,
	
	"dzrbs.com": 1,
	
	"dzsc.com": 1,
	
	"dzsm.com": 1,
	
	"dzsrcw.com": 1,
	
	"dzszb.com": 1,
	
	"dztv.tv": 1,
	
	"dzwindows.com": 1,
	
	"dzwork.net": 1,
	
	"dzwww.com": 1,
	
	"dzxss.com": 1,
	
	"dzxw.net": 1,
	
	"dzyysb.com": 1,
	
	"e-baojian.com": 1,
	
	"e-chinalife.com": 1,
	
	"e-jjj.com": 1,
	
	"e-tiller.com": 1,
	
	"e0514.com": 1,
	
	"e0575.com": 1,
	
	"e0734.com": 1,
	
	"e118114.com": 1,
	
	"e21cn.com": 1,
	
	"e2say.com": 1,
	
	"e521.com": 1,
	
	"e8online.com": 1,
	
	"ea3w.com": 1,
	
	"ea56.com": 1,
	
	"eabax.com": 1,
	
	"eachnet.com": 1,
	
	"eahui.com": 1,
	
	"eamn.net": 1,
	
	"earthedu.com": 1,
	
	"easdo.com": 1,
	
	"easemob.com": 1,
	
	"easiu.com": 1,
	
	"eastday.com": 1,
	
	"easthome.com": 1,
	
	"eastmoney.com": 1,
	
	"eastsilver.com": 1,
	
	"eastsoo.com": 1,
	
	"easyreadtech.com": 1,
	
	"easysofthome.com": 1,
	
	"eayuan.com": 1,
	
	"eb80.com": 1,
	
	"ebay.com": 1,
	
	"ebdoor.com": 1,
	
	"ebigear.com": 1,
	
	"ebioe.com": 1,
	
	"ebnew.com": 1,
	
	"ebrun.com": 1,
	
	"ebscn.com": 1,
	
	"ebseek.com": 1,
	
	"ec51.com": 1,
	
	"ec818.com": 1,
	
	"ecaidian.com": 1,
	
	"ecaihr.com": 1,
	
	"eccn.com": 1,
	
	"eccsp.org": 1,
	
	"ecduo.com": 1,
	
	"ecgoods.com": 1,
	
	"echiele.com": 1,
	
	"echinagov.com": 1,
	
	"ecitic.com": 1,
	
	"ecjyj.com": 1,
	
	"ecp888.com": 1,
	
	"ecppn.com": 1,
	
	"ecqun.com": 1,
	
	"ecshop.com": 1,
	
	"edai.com": 1,
	
	"edancheng.com": 1,
	
	"edaocha.com": 1,
	
	"ede35.com": 1,
	
	"edu-hb.com": 1,
	
	"edu-js.com": 1,
	
	"edu03.com": 1,
	
	"edu24ol.com": 1,
	
	"edu5a.com": 1,
	
	"edu80.com": 1,
	
	"edu84.com": 1,
	
	"edu88.com": 1,
	
	"edudh.net": 1,
	
	"edudown.net": 1,
	
	"edudt.net": 1,
	
	"eduease.com": 1,
	
	"eduego.com": 1,
	
	"eduglobal.com": 1,
	
	"edushi.com": 1,
	
	"edutt.com": 1,
	
	"eduu.com": 1,
	
	"eduuu.com": 1,
	
	"eduwo.com": 1,
	
	"eduwsw.com": 1,
	
	"eduyf.com": 1,
	
	"edzx.com": 1,
	
	"eeboard.com": 1,
	
	"eechina.com": 1,
	
	"eeeqi.net": 1,
	
	"eefocus.com": 1,
	
	"eehu.com": 1,
	
	"eeju.com": 1,
	
	"eelly.com": 1,
	
	"eeyy.com": 1,
	
	"ef-school.com": 1,
	
	"ef360.com": 1,
	
	"efang.tv": 1,
	
	"efwang.com": 1,
	
	"egou.com": 1,
	
	"eguilin.org": 1,
	
	"ehaier.com": 1,
	
	"ehomeday.com": 1,
	
	"ehometu.com": 1,
	
	"ehr99.com": 1,
	
	"ehvacr.com": 1,
	
	"eicbs.com": 1,
	
	"eiiq.com": 1,
	
	"eis100.com": 1,
	
	"eit0571.com": 1,
	
	"ejee.com": 1,
	
	"ejiacn.com": 1,
	
	"ejiaju.cc": 1,
	
	"ejier.com": 1,
	
	"eju.com": 1,
	
	"ek6.com": 1,
	
	"ekaidian.com": 1,
	
	"elanw.com": 1,
	
	"eldawa.com": 1,
	
	"ele.me": 1,
	
	"ele001.com": 1,
	
	"elecfans.com": 1,
	
	"elecinfo.com": 1,
	
	"elemecdn.com": 1,
	
	"elexcon.com": 1,
	
	"eliushi.com": 1,
	
	"ellechina.com": 1,
	
	"ellll.com": 1,
	
	"elong.com": 1,
	
	"els001.com": 1,
	
	"emarbox.com": 1,
	
	"eminiye.com": 1,
	
	"emlog.net": 1,
	
	"ems517.com": 1,
	
	"emtx.com": 1,
	
	"emushroom.net": 1,
	
	"en.cc": 1,
	
	"en51.com": 1,
	
	"ename.com": 1,
	
	"ename.net": 1,
	
	"enbowang.com": 1,
	
	"enchantshow.com": 1,
	
	"enetedu.com": 1,
	
	"eng24.com": 1,
	
	"enguo.com": 1,
	
	"enkj.com": 1,
	
	"enshijob.com": 1,
	
	"enterdesk.com": 1,
	
	"eoaoo.com": 1,
	
	"eoeandroid.com": 1,
	
	"eoemarket.com": 1,
	
	"eoffcn.com": 1,
	
	"eolinker.com": 1,
	
	"eooioo.com": 1,
	
	"eooqoo.com": 1,
	
	"eoouoo.com": 1,
	
	"eoozoo.com": 1,
	
	"eoriver.com": 1,
	
	"epanshi.com": 1,
	
	"epday.com": 1,
	
	"epjob88.com": 1,
	
	"epjyw.com": 1,
	
	"epweike.com": 1,
	
	"epzhaopin.com": 1,
	
	"eq-hl.com": 1,
	
	"eqoe.cn": 1,
	
	"eqyn.com": 1,
	
	"eqz.cc": 1,
	
	"erdsrsrc.com": 1,
	
	"erongtu.com": 1,
	
	"ershou.net": 1,
	
	"ersoso.com": 1,
	
	"erya100.com": 1,
	
	"escdn.com": 1,
	
	"esfimg.com": 1,
	
	"eshow365.com": 1,
	
	"eshufa.com": 1,
	
	"esljt.com": 1,
	
	"esnai.com": 1,
	
	"esnai.net": 1,
	
	"esongyuan.com": 1,
	
	"esun88.com": 1,
	
	"et8.org": 1,
	
	"etao.com": 1,
	
	"etest8.com": 1,
	
	"ethainan.com": 1,
	
	"etiantian.com": 1,
	
	"etlong.com": 1,
	
	"etoubao.com": 1,
	
	"etpass.com": 1,
	
	"etuan.com": 1,
	
	"eudic.net": 1,
	
	"ev123.com": 1,
	
	"evergrande.com": 1,
	
	"everychina.com": 1,
	
	"ewmzs.com": 1,
	
	"ewoka.com": 1,
	
	"eworldship.com": 1,
	
	"ewsos.com": 1,
	
	"ewt.cc": 1,
	
	"ewteacher.com": 1,
	
	"exam8.com": 1,
	
	"examda.com": 1,
	
	"examw.com": 1,
	
	"exbulk.com": 1,
	
	"exchangecn.com": 1,
	
	"expo-china.com": 1,
	
	"expoon.com": 1,
	
	"expoooo.com": 1,
	
	"expotu.com": 1,
	
	"expowindow.com": 1,
	
	"ey99.com": 1,
	
	"eyaobei.com": 1,
	
	"eye.rs": 1,
	
	"eyejoyful.com": 1,
	
	"eyizhang.com": 1,
	
	"eyou.com": 1,
	
	"eyuyao.com": 1,
	
	"eywedu.com": 1,
	
	"ezhiol.com": 1,
	
	"eztxw.com": 1,
	
	"f139.com": 1,
	
	"f1688.com": 1,
	
	"f3322.org": 1,
	
	"f537.com": 1,
	
	"fa-today.com": 1,
	
	"fa597.com": 1,
	
	"fabang.com": 1,
	
	"fabao365.com": 1,
	
	"fabu114.com": 1,
	
	"fad123.com": 1,
	
	"fafaku.com": 1,
	
	"faidns.com": 1,
	
	"faisco.com": 1,
	
	"faisys.com": 1,
	
	"faiusr.com": 1,
	
	"faiusrd.com": 1,
	
	"fala114.com": 1,
	
	"faloo.com": 1,
	
	"famen88.com": 1,
	
	"famens.com": 1,
	
	"famensi.com": 1,
	
	"fancai.com": 1,
	
	"fandian.com": 1,
	
	"fang.com": 1,
	
	"fang33.com": 1,
	
	"fang99.com": 1,
	
	"fangbx.com": 1,
	
	"fangchan.com": 1,
	
	"fangdd.com": 1,
	
	"fangdr.com": 1,
	
	"fangfa.net": 1,
	
	"fanging.com": 1,
	
	"fangjia.com": 1,
	
	"fangjiadp.com": 1,
	
	"fanglimei.com": 1,
	
	"fangtan007.com": 1,
	
	"fangte.com": 1,
	
	"fangtoo.com": 1,
	
	"fangxiaoer.com": 1,
	
	"fangyi.com": 1,
	
	"fangyou.com": 1,
	
	"fangyuan365.com": 1,
	
	"fangzhanhui.com": 1,
	
	"fangzhur.com": 1,
	
	"fanhuan.com": 1,
	
	"fanlihe.com": 1,
	
	"fanqieleyuan.com": 1,
	
	"fanqier.com": 1,
	
	"fantong.com": 1,
	
	"fanxuefei.com": 1,
	
	"fanyizhijia.com": 1,
	
	"far2000.com": 1,
	
	"fastapi.net": 1,
	
	"fastcdn.com": 1,
	
	"favolist.com": 1,
	
	"faw-mazda.com": 1,
	
	"faw-vw.com": 1,
	
	"fawan.com": 1,
	
	"fayo.net": 1,
	
	"fblife.com": 1,
	
	"fc0633.com": 1,
	
	"fc571.com": 1,
	
	"fccs.com": 1,
	
	"fcg360.com": 1,
	
	"fcgsnews.com": 1,
	
	"fcjjr.com": 1,
	
	"fcjob88.com": 1,
	
	"fcrc114.com": 1,
	
	"fcw6.com": 1,
	
	"fcyhw.com": 1,
	
	"fd597.com": 1,
	
	"fdc0760.com": 1,
	
	"fdgzw.com": 1,
	
	"fdjzu.com": 1,
	
	"fdkjgz.com": 1,
	
	"fdlt.net": 1,
	
	"fecn.net": 1,
	
	"feedsky.com": 1,
	
	"feelcars.com": 1,
	
	"feeyo.com": 1,
	
	"fei580.com": 1,
	
	"feicuiwuyu.com": 1,
	
	"feijiu.net": 1,
	
	"feiku.com": 1,
	
	"feiliu.com": 1,
	
	"feipin.com": 1,
	
	"feiyangedu.com": 1,
	
	"fenfen.com": 1,
	
	"feng.com": 1,
	
	"fengbao.com": 1,
	
	"fengfeng.cc": 1,
	
	"fengj.com": 1,
	
	"fengj.net": 1,
	
	"fengjing.com": 1,
	
	"fengkongcloud.com": 1,
	
	"fengniao.com": 1,
	
	"fengone.com": 1,
	
	"fengsung.com": 1,
	
	"fengyunzhibo.com": 1,
	
	"fenlei168.com": 1,
	
	"fenlei265.com": 1,
	
	"fenleidao.com": 1,
	
	"fensui168.com": 1,
	
	"fenzhi.com": 1,
	
	"ffpic.com": 1,
	
	"fhlczy.com": 1,
	
	"fhldns.com": 1,
	
	"fhlyou.com": 1,
	
	"fillseo.com": 1,
	
	"fimmu.com": 1,
	
	"financeun.com": 1,
	
	"findlawimg.com": 1,
	
	"findzd.com": 1,
	
	"fir.im": 1,
	
	"fishings.biz": 1,
	
	"fivecarts.net": 1,
	
	"fj-hitech.com": 1,
	
	"fj007.com": 1,
	
	"fj987.com": 1,
	
	"fjber.com": 1,
	
	"fjcha.com": 1,
	
	"fjcns.com": 1,
	
	"fjcoop.com": 1,
	
	"fjcyl.org": 1,
	
	"fjdaily.com": 1,
	
	"fjdh.com": 1,
	
	"fjhrss.com": 1,
	
	"fjhun.com": 1,
	
	"fjii.com": 1,
	
	"fjjcjy.com": 1,
	
	"fjjdrcw.com": 1,
	
	"fjkx.org": 1,
	
	"fjlh.com": 1,
	
	"fjlib.net": 1,
	
	"fjmwjx.com": 1,
	
	"fjnacc.com": 1,
	
	"fjnet.com": 1,
	
	"fjpta.com": 1,
	
	"fjsen.com": 1,
	
	"fjsjs.com": 1,
	
	"fjsy.net": 1,
	
	"fjta.com": 1,
	
	"fjtn.com": 1,
	
	"fjtv.net": 1,
	
	"fjzlym.com": 1,
	
	"fjzol.com": 1,
	
	"fl001.com": 1,
	
	"fl78.com": 1,
	
	"flash1890.com": 1,
	
	"flash8.net": 1,
	
	"flashget.com": 1,
	
	"flickr.com": 1,
	
	"fliggy.com": 1,
	
	"floorb2b.com": 1,
	
	"flow.ci": 1,
	
	"flower188.com": 1,
	
	"flssw.com": 1,
	
	"fltrp.com": 1,
	
	"flyxg.com": 1,
	
	"flzxw.org": 1,
	
	"fm93.cc": 1,
	
	"fnkq.com": 1,
	
	"fnrcw.com": 1,
	
	"fobshanghai.com": 1,
	
	"focuschina.com": 1,
	
	"folkw.com": 1,
	
	"foloda.com": 1,
	
	"foodjx.com": 1,
	
	"foodmate.net": 1,
	
	"foods1.com": 1,
	
	"foodszs.com": 1,
	
	"foofish.net": 1,
	
	"foojoo.com": 1,
	
	"for68.com": 1,
	
	"forbeschina.com": 1,
	
	"forgechina.net": 1,
	
	"fotile.com": 1,
	
	"foxue.org": 1,
	
	"foyuan.net": 1,
	
	"fpdisplay.com": 1,
	
	"fpgadev.com": 1,
	
	"fpwap.com": 1,
	
	"fq597.com": 1,
	
	"fractal-technology.com": 1,
	
	"freebuf.com": 1,
	
	"freehead.com": 1,
	
	"frkq.com": 1,
	
	"frly.net": 1,
	
	"fs121.com": 1,
	
	"fs31.com": 1,
	
	"fsclzs.com": 1,
	
	"fsdew.com": 1,
	
	"fsjoy.com": 1,
	
	"fsjy.net": 1,
	
	"fslsg.com": 1,
	
	"fstcb.com": 1,
	
	"ft22.com": 1,
	
	"ftchinese.com": 1,
	
	"ftuan.com": 1,
	
	"ftutj.net": 1,
	
	"fujianec.com": 1,
	
	"fujianrc.com": 1,
	
	"fuliao.com": 1,
	
	"fuling.com": 1,
	
	"fuliyuwang.com": 1,
	
	"fumubang.com": 1,
	
	"fumuhui.com": 1,
	
	"fun.tv": 1,
	
	"funfungolf.com": 1,
	
	"funshion.com": 1,
	
	"funxoo.com": 1,
	
	"funxun.com": 1,
	
	"fupiaopifa.com": 1,
	
	"fuqiangw.com": 1,
	
	"fuqing2006.com": 1,
	
	"furniturebbs.com": 1,
	
	"furnituremedia.com": 1,
	
	"futurescn.net": 1,
	
	"fututa.com": 1,
	
	"fuwuce.com": 1,
	
	"fuyoubank.com": 1,
	
	"fwzjia.com": 1,
	
	"fx120.net": 1,
	
	"fx168.com": 1,
	
	"fx678.com": 1,
	
	"fxxww.net": 1,
	
	"fxxz.com": 1,
	
	"fybxw.com": 1,
	
	"fyedu.org": 1,
	
	"fynews.net": 1,
	
	"fysns.com": 1,
	
	"fytcw.com": 1,
	
	"fz2sc.com": 1,
	
	"fz597.com": 1,
	
	"fzbm.com": 1,
	
	"fzengine.com": 1,
	
	"fzfzjx.com": 1,
	
	"fzg360.com": 1,
	
	"fzpig.com": 1,
	
	"fzsjob.com": 1,
	
	"fzxyyl.net": 1,
	
	"g1080.com": 1,
	
	"g12e.com": 1,
	
	"g207.com": 1,
	
	"g2b2b.com": 1,
	
	"g7430.com": 1,
	
	"gacmotor.com": 1,
	
	"gai001.com": 1,
	
	"gaibar.com": 1,
	
	"gaitu.com": 1,
	
	"gaizhui.com": 1,
	
	"game080.com": 1,
	
	"game3737.com": 1,
	
	"gamecomb.com": 1,
	
	"gamehome.tv": 1,
	
	"gamersky.com": 1,
	
	"gamestlbb.com": 1,
	
	"gamesville.com": 1,
	
	"gametea.com": 1,
	
	"gamfe.com": 1,
	
	"gangong.net": 1,
	
	"ganhuoche.com": 1,
	
	"ganji.com": 1,
	
	"ganjiangrc.com": 1,
	
	"ganjistatic1.com": 1,
	
	"gank.io": 1,
	
	"ganniu.com": 1,
	
	"ganwan.com": 1,
	
	"ganxianw.com": 1,
	
	"ganzhe.com": 1,
	
	"gao7.com": 1,
	
	"gao8dou.com": 1,
	
	"gaoan.net": 1,
	
	"gaodun.com": 1,
	
	"gaofen.com": 1,
	
	"gaokao.com": 1,
	
	"gaokao789.com": 1,
	
	"gaopeng.com": 1,
	
	"gaoqingren.com": 1,
	
	"gaosiedu.com": 1,
	
	"gaosubao.com": 1,
	
	"gaoxiaola.com": 1,
	
	"gaozhouba.com": 1,
	
	"garply.com": 1,
	
	"gasgoo.com": 1,
	
	"gashr.com": 1,
	
	"gasshow.com": 1,
	
	"gather-sc.com": 1,
	
	"gayaha.net": 1,
	
	"gazx.org": 1,
	
	"gcchina.com": 1,
	
	"gcimg.net": 1,
	
	"gczx.cc": 1,
	
	"gd-china.com": 1,
	
	"gd-fishmarket.com": 1,
	
	"gdcct.com": 1,
	
	"gdcct.net": 1,
	
	"gdcic.net": 1,
	
	"gdcoop.com": 1,
	
	"gdcrj.com": 1,
	
	"gdedu123.com": 1,
	
	"gdhbsh.com": 1,
	
	"gdmm.com": 1,
	
	"gdql.org": 1,
	
	"gdrc.com": 1,
	
	"gdsin.net": 1,
	
	"gdswine.com": 1,
	
	"gdsxxw.com": 1,
	
	"gdttc.com": 1,
	
	"gdtuoling.com": 1,
	
	"gdwca.com": 1,
	
	"gdwest.com": 1,
	
	"gdzj8.com": 1,
	
	"gedu.org": 1,
	
	"geekpark.net": 1,
	
	"geely.com": 1,
	
	"geetest.com": 1,
	
	"geihui.com": 1,
	
	"gemdale.com": 1,
	
	"gensee.com": 1,
	
	"gentags.net": 1,
	
	"geo-show.com": 1,
	
	"geochina.com": 1,
	
	"gesep.com": 1,
	
	"getfedora.org": 1,
	
	"getui.com": 1,
	
	"gewara.com": 1,
	
	"gexing.com": 1,
	
	"gezila.com": 1,
	
	"gf.cc": 1,
	
	"gfan.com": 1,
	
	"gfedu.net": 1,
	
	"gfsns.com": 1,
	
	"gg-art.com": 1,
	
	"gg-led.com": 1,
	
	"gg163.net": 1,
	
	"ggcj.com": 1,
	
	"ghjie.com": 1,
	
	"gift12345.com": 1,
	
	"gimoo.net": 1,
	
	"gitee.com": 1,
	
	"gitom.com": 1,
	
	"gjgwy.org": 1,
	
	"gk-z.com": 1,
	
	"gk99.com": 1,
	
	"gkao.com": 1,
	
	"gkong.com": 1,
	
	"gkstk.com": 1,
	
	"gkxx.com": 1,
	
	"gkzhan.com": 1,
	
	"glasseasy.com": 1,
	
	"glasshr.com": 1,
	
	"gldjc.com": 1,
	
	"glinfo.com": 1,
	
	"global-trade-center.com": 1,
	
	"globalbook.org": 1,
	
	"globalbuy.cc": 1,
	
	"globalchemmade.com": 1,
	
	"globalhardwares.com": 1,
	
	"globalimporter.net": 1,
	
	"globalmarket.com": 1,
	
	"globeimmi.com": 1,
	
	"globrand.com": 1,
	
	"glofang.com": 1,
	
	"glrcw.com": 1,
	
	"glyrc.com": 1,
	
	"glzhuang.com": 1,
	
	"gm86.com": 1,
	
	"gming.org": 1,
	
	"gmold.info": 1,
	
	"gmseb.com": 1,
	
	"gmtv.cc": 1,
	
	"gmw.cn": 1,
	
	"gndaily.com": 1,
	
	"go007.com": 1,
	
	"go2map.com": 1,
	
	"go2yd.com": 1,
	
	"go823.com": 1,
	
	"go9939.com": 1,
	
	"godsignal.com": 1,
	
	"goepe.com": 1,
	
	"gogocn.com": 1,
	
	"gojiaju.com": 1,
	
	"golaravel.com": 1,
	
	"gold600.com": 1,
	
	"gold678.com": 1,
	
	"goldenholiday.com": 1,
	
	"goldin168.com": 1,
	
	"gong123.com": 1,
	
	"gongcai.com": 1,
	
	"gongchang.com": 1,
	
	"gongjiao.com": 1,
	
	"gongjiaomi.com": 1,
	
	"gongkaocn.com": 1,
	
	"gongkong.com": 1,
	
	"gongyishibao.com": 1,
	
	"gongzhao.net": 1,
	
	"gongzhou.com": 1,
	
	"gonren.com": 1,
	
	"goo2sc.com": 1,
	
	"goocun.com": 1,
	
	"goodacc.net": 1,
	
	"goodbaby.com": 1,
	
	"goodkejian.com": 1,
	
	"google-analytics.com": 1,
	
	"googleadservices.com": 1,
	
	"googlesyndication.com": 1,
	
	"googletagmanager.com": 1,
	
	"googvv.com": 1,
	
	"gooioo.com": 1,
	
	"gooniu.com": 1,
	
	"gooooal.com": 1,
	
	"goootech.com": 1,
	
	"gopinyin.com": 1,
	
	"gopuu.com": 1,
	
	"gotohz.com": 1,
	
	"gotoip1.com": 1,
	
	"gotoip2.com": 1,
	
	"gotoip3.com": 1,
	
	"gotoip4.com": 1,
	
	"gotoip55.com": 1,
	
	"gotoningbo.com": 1,
	
	"gotozjj.net": 1,
	
	"gouchezixun.com": 1,
	
	"goufang.com": 1,
	
	"goufw.com": 1,
	
	"gougou.com": 1,
	
	"gouhuasuan.net": 1,
	
	"goulew.com": 1,
	
	"goumin.com": 1,
	
	"goupuzi.com": 1,
	
	"goushe.com": 1,
	
	"gouwuke.com": 1,
	
	"gowulong.com": 1,
	
	"gpsuu.com": 1,
	
	"gqren.com": 1,
	
	"gqsoso.com": 1,
	
	"gqsoso.net": 1,
	
	"gqw.cc": 1,
	
	"grchina.com": 1,
	
	"greatwuyi.com": 1,
	
	"greentimes.com": 1,
	
	"greenxf.com": 1,
	
	"grfy.net": 1,
	
	"grfyw.com": 1,
	
	"gridsources.com": 1,
	
	"gridsumdissector.com": 1,
	
	"grinm.com": 1,
	
	"grouplus.com": 1,
	
	"growingio.com": 1,
	
	"gsdpw.com": 1,
	
	"gsean.org": 1,
	
	"gsftw.com": 1,
	
	"gsheimeiren.com": 1,
	
	"gsjb.com": 1,
	
	"gsrcw.com": 1,
	
	"gsrecv.com": 1,
	
	"gsstgs.com": 1,
	
	"gstarcad.com": 1,
	
	"gsxpz.com": 1,
	
	"gtags.net": 1,
	
	"gtcfla.net": 1,
	
	"gtgqw.com": 1,
	
	"gtimg.cn": 1,
	
	"gtimg.com": 1,
	
	"gtja.com": 1,
	
	"gtobal.com": 1,
	
	"gtuu.com": 1,
	
	"gtxh.com": 1,
	
	"gtzyb.com": 1,
	
	"guahao.com": 1,
	
	"guan5.com": 1,
	
	"guancha.cn": 1,
	
	"guanchengrc.com": 1,
	
	"guang.com": 1,
	
	"guangdongrc.com": 1,
	
	"guangguiyin.com": 1,
	
	"guangshuishi.com": 1,
	
	"guangxirc.com": 1,
	
	"guanjiatu.com": 1,
	
	"guanjoy.com": 1,
	
	"guanyun520.com": 1,
	
	"guanzhongrc.com": 1,
	
	"gucheng.com": 1,
	
	"gucn.com": 1,
	
	"guhantai.com": 1,
	
	"guidaye.com": 1,
	
	"guidechem.com": 1,
	
	"guigu.org": 1,
	
	"guiguanrc.com": 1,
	
	"guijirc.com": 1,
	
	"guijob.com": 1,
	
	"guilincits.com": 1,
	
	"guilinhd.com": 1,
	
	"guilinlife.com": 1,
	
	"guimi.com": 1,
	
	"guiqianrc.com": 1,
	
	"gulove.com": 1,
	
	"guocar.com": 1,
	
	"guokr.com": 1,
	
	"guolairen.com": 1,
	
	"guolv.com": 1,
	
	"guolvol.com": 1,
	
	"guoshi.com": 1,
	
	"guoxue.com": 1,
	
	"guqu.net": 1,
	
	"gushiw.com": 1,
	
	"gusuwang.com": 1,
	
	"gutx.com": 1,
	
	"guuoo.com": 1,
	
	"guwanw.com": 1,
	
	"guzhiwang.com": 1,
	
	"gwfk.org": 1,
	
	"gwyoo.com": 1,
	
	"gwyou.com": 1,
	
	"gwypxw.com": 1,
	
	"gx123.com": 1,
	
	"gx12301.com": 1,
	
	"gx211.com": 1,
	
	"gxbs.net": 1,
	
	"gxbys.com": 1,
	
	"gxcic.net": 1,
	
	"gxcity.com": 1,
	
	"gxer.net": 1,
	
	"gxexam.net": 1,
	
	"gxfdcw.com": 1,
	
	"gxfpw.com": 1,
	
	"gxgymsxx.com": 1,
	
	"gxhc365.com": 1,
	
	"gxhouse.com": 1,
	
	"gxhzxw.com": 1,
	
	"gxipo.net": 1,
	
	"gxjtaq.com": 1,
	
	"gxjubao.org": 1,
	
	"gxnongmu.com": 1,
	
	"gxorg.com": 1,
	
	"gxqcw.com": 1,
	
	"gxqxj.com": 1,
	
	"gxrc.com": 1,
	
	"gxrcw.com": 1,
	
	"gxsky.com": 1,
	
	"gxsti.net": 1,
	
	"gxwj315.com": 1,
	
	"gxybw.com": 1,
	
	"gxylnews.com": 1,
	
	"gy365.com": 1,
	
	"gyedu.net": 1,
	
	"gyxnews.com": 1,
	
	"gyxuan.com": 1,
	
	"gz-travel.net": 1,
	
	"gz007.net": 1,
	
	"gz91.com": 1,
	
	"gzbsnc.com": 1,
	
	"gzccps.com": 1,
	
	"gzcofc.com": 1,
	
	"gzcol.com": 1,
	
	"gzcpc.com": 1,
	
	"gzdfxw.com": 1,
	
	"gzdsw.com": 1,
	
	"gzedu.com": 1,
	
	"gzh.com": 1,
	
	"gzjuncheng.com": 1,
	
	"gzlib.org": 1,
	
	"gzlight.com": 1,
	
	"gzmama.com": 1,
	
	"gzmanny.com": 1,
	
	"gzmtr.com": 1,
	
	"gznet.com": 1,
	
	"gzqnzyz.com": 1,
	
	"gzred.com": 1,
	
	"gzredcross.org": 1,
	
	"gzrencai.com": 1,
	
	"gzrisingsteel.com": 1,
	
	"gzsedu.com": 1,
	
	"gzstv.com": 1,
	
	"gzszk.com": 1,
	
	"gztcdj.com": 1,
	
	"gztv.com": 1,
	
	"gzucard.com": 1,
	
	"gzw.net": 1,
	
	"gzxuelun.com": 1,
	
	"gzymj.com": 1,
	
	"gzza.com": 1,
	
	"gzzyz.org": 1,
	
	"h-ui.net": 1,
	
	"h0591.com": 1,
	
	"h2o-china.com": 1,
	
	"h2os.com": 1,
	
	"habctv.com": 1,
	
	"hacdn.net": 1,
	
	"hackhome.com": 1,
	
	"hackp.com": 1,
	
	"hacpai.com": 1,
	
	"hadns.net": 1,
	
	"hafxw.org": 1,
	
	"hahaertong.com": 1,
	
	"haibao.com": 1,
	
	"haichaninfo.com": 1,
	
	"haier.com": 1,
	
	"haier.net": 1,
	
	"haihuahr.com": 1,
	
	"haihui1688.com": 1,
	
	"haimanfeisi.com": 1,
	
	"hainan.net": 1,
	
	"hainanfz.com": 1,
	
	"hainanpc.net": 1,
	
	"hainanredcross.org": 1,
	
	"hainei.org": 1,
	
	"haining.com": 1,
	
	"haitou.cc": 1,
	
	"halyul.cc": 1,
	
	"hanban.org": 1,
	
	"hanbinwang.com": 1,
	
	"hancheng.com": 1,
	
	"handu.com": 1,
	
	"hangye8.com": 1,
	
	"hanjie.biz": 1,
	
	"hanweb.com": 1,
	
	"hanxingtv.com": 1,
	
	"hao0469.com": 1,
	
	"hao123.com": 1,
	
	"hao123img.com": 1,
	
	"hao224.com": 1,
	
	"hao315.cc": 1,
	
	"hao315.com": 1,
	
	"hao315.tv": 1,
	
	"haob2b.com": 1,
	
	"haobangni.com": 1,
	
	"haochi123.com": 1,
	
	"haochimei.com": 1,
	
	"haodai.com": 1,
	
	"haodf.com": 1,
	
	"haodingdan.com": 1,
	
	"haodou.com": 1,
	
	"haofjj.com": 1,
	
	"haofung.com": 1,
	
	"haofz.com": 1,
	
	"haogongzhang.com": 1,
	
	"haojiudaili.com": 1,
	
	"haoleyou.com": 1,
	
	"haoliv.com": 1,
	
	"haomzl.com": 1,
	
	"haopoo.com": 1,
	
	"haorc.com": 1,
	
	"haorencai.net": 1,
	
	"haorenyuan.so": 1,
	
	"haote.com": 1,
	
	"haotijin.com": 1,
	
	"haotui.com": 1,
	
	"haowangpu.com": 1,
	
	"haowm.com": 1,
	
	"haowu.com": 1,
	
	"haoyisheng.com": 1,
	
	"haoyiwujin.com": 1,
	
	"haoyun56.com": 1,
	
	"haozhanhui.com": 1,
	
	"haozhou.com": 1,
	
	"haozu.com": 1,
	
	"haozuojia.com": 1,
	
	"happypingpang.com": 1,
	
	"harbin123.com": 1,
	
	"harrenmedianetwork.com": 1,
	
	"hatcy.com": 1,
	
	"havehome.com": 1,
	
	"haxiu.com": 1,
	
	"hb114.cc": 1,
	
	"hb123.net": 1,
	
	"hb12369.net": 1,
	
	"hb30.com": 1,
	
	"hbaas.com": 1,
	
	"hbcdc.net": 1,
	
	"hbcourt.org": 1,
	
	"hbdjk.com": 1,
	
	"hbeinews.com": 1,
	
	"hbfxh.com": 1,
	
	"hbfys.com": 1,
	
	"hbfzb.com": 1,
	
	"hbgajg.com": 1,
	
	"hbgrain.com": 1,
	
	"hbgsl.com": 1,
	
	"hbhscpa.com": 1,
	
	"hbhz.net": 1,
	
	"hbjie.com": 1,
	
	"hbjob88.com": 1,
	
	"hbksw.com": 1,
	
	"hbliti.com": 1,
	
	"hbnews.net": 1,
	
	"hbqc.com": 1,
	
	"hbqnb.com": 1,
	
	"hbrc.com": 1,
	
	"hbrd.net": 1,
	
	"hbsfgk.org": 1,
	
	"hbshgzx.com": 1,
	
	"hbsjz110.com": 1,
	
	"hbsztv.com": 1,
	
	"hbtcw.com": 1,
	
	"hbtycp.com": 1,
	
	"hbxfmp.com": 1,
	
	"hbxmad.com": 1,
	
	"hbycw.net": 1,
	
	"hbydsy.com": 1,
	
	"hbyidu.com": 1,
	
	"hbzhan.com": 1,
	
	"hbzkw.com": 1,
	
	"hbzkwl.com": 1,
	
	"hc360.com": 1,
	
	"hc433.com": 1,
	
	"hctvnet.com": 1,
	
	"hcxww.com": 1,
	
	"hd512.com": 1,
	
	"hdavec.org": 1,
	
	"hdeso.com": 1,
	
	"hdmnw.com": 1,
	
	"hdslb.com": 1,
	
	"hdslb.net": 1,
	
	"hdzc.net": 1,
	
	"hdzp.com": 1,
	
	"hdzxw.com": 1,
	
	"he-nan.com": 1,
	
	"healthoo.com": 1,
	
	"healthr.com": 1,
	
	"hebcoop.com": 1,
	
	"hebdx.com": 1,
	
	"hebei.cm": 1,
	
	"hebeicdc.com": 1,
	
	"hebeihr.com": 1,
	
	"hebgcc.org": 1,
	
	"hebgh.org": 1,
	
	"hebiw.com": 1,
	
	"hebpingan.org": 1,
	
	"hebradio.com": 1,
	
	"hebredcross.org": 1,
	
	"hebtv.com": 1,
	
	"hefei.cc": 1,
	
	"hefei123.org": 1,
	
	"hefeiat.com": 1,
	
	"hehu.com": 1,
	
	"heiguang.com": 1,
	
	"heima8.com": 1,
	
	"hejie.me": 1,
	
	"hejun.com": 1,
	
	"hekouqu.com": 1,
	
	"hellozb.com": 1,
	
	"hellozx.com": 1,
	
	"henan100.com": 1,
	
	"henanci.com": 1,
	
	"henanedu.com": 1,
	
	"henankf.com": 1,
	
	"henanrc.com": 1,
	
	"henanredcross.org": 1,
	
	"henantiyu.com": 1,
	
	"henanweiye.com": 1,
	
	"hengfeng.org": 1,
	
	"hengqian.com": 1,
	
	"hengqijy.com": 1,
	
	"hengyan.com": 1,
	
	"hepan.com": 1,
	
	"hepost.com": 1,
	
	"hepuwang.com": 1,
	
	"herostart.com": 1,
	
	"herschina.com": 1,
	
	"hersp.com": 1,
	
	"hetda.com": 1,
	
	"heweather.com": 1,
	
	"hexieshaanxi.com": 1,
	
	"hexindai.com": 1,
	
	"hexun.com": 1,
	
	"hexun.com.tw": 1,
	
	"hexunimg.com": 1,
	
	"heyang.cc": 1,
	
	"heyuan163.com": 1,
	
	"heze.cc": 1,
	
	"heze369.com": 1,
	
	"hezejob.com": 1,
	
	"hezerencai.cc": 1,
	
	"hezeribao.com": 1,
	
	"hf2sc.com": 1,
	
	"hf365.com": 1,
	
	"hfhouse.com": 1,
	
	"hfib.org": 1,
	
	"hfk99.com": 1,
	
	"hftogo.com": 1,
	
	"hfwenshi.com": 1,
	
	"hg-z.com": 1,
	
	"hgjob.com": 1,
	
	"hgqzj.com": 1,
	
	"hgrencai.com": 1,
	
	"hgzrc.com": 1,
	
	"hh010.com": 1,
	
	"hhczy.com": 1,
	
	"hhhrs.com": 1,
	
	"hhhtnews.com": 1,
	
	"hhjy.net": 1,
	
	"hhk365.com": 1,
	
	"hhkao.com": 1,
	
	"hhncp.com": 1,
	
	"hhncp.net": 1,
	
	"hhsq.net": 1,
	
	"hhtravel.com": 1,
	
	"hi-pda.com": 1,
	
	"hi0734.com": 1,
	
	"hi1718.com": 1,
	
	"hi2000.com": 1,
	
	"hi772.com": 1,
	
	"hiao.com": 1,
	
	"hiapk.com": 1,
	
	"hicct.com": 1,
	
	"hicdma.com": 1,
	
	"hichina.com": 1,
	
	"hikvision.com": 1,
	
	"hilizi.com": 1,
	
	"himfr.com": 1,
	
	"himinsy.com": 1,
	
	"hipiao.com": 1,
	
	"hirede.com": 1,
	
	"hisense.com": 1,
	
	"hisupplier.com": 1,
	
	"hitao.com": 1,
	
	"hitokoto.cn": 1,
	
	"hiwifi.com": 1,
	
	"hjenglish.com": 1,
	
	"hk-0898.net": 1,
	
	"hk515.com": 1,
	
	"hkcts.com": 1,
	
	"hkidc.hk": 1,
	
	"hkproperty.com": 1,
	
	"hktdc.com": 1,
	
	"hkwb.net": 1,
	
	"hkxtzgl.com": 1,
	
	"hldbtv.com": 1,
	
	"hldnews.com": 1,
	
	"hledu.net": 1,
	
	"hlgnet.com": 1,
	
	"hlgnet.net": 1,
	
	"hlj.net": 1,
	
	"hlje.net": 1,
	
	"hljgh.org": 1,
	
	"hljjc.com": 1,
	
	"hljrtvu.com": 1,
	
	"hljtcp.com": 1,
	
	"hljtv.com": 1,
	
	"hlnmg.org": 1,
	
	"hlpolice.com": 1,
	
	"hly.com": 1,
	
	"hlybar.com": 1,
	
	"hm-3223.net": 1,
	
	"hmaow.com": 1,
	
	"hme01.com": 1,
	
	"hmecw.com": 1,
	
	"hmlan.com": 1,
	
	"hmw163.com": 1,
	
	"hmw365.com": 1,
	
	"hn12333.com": 1,
	
	"hn987.com": 1,
	
	"hnair.com": 1,
	
	"hncdc.com": 1,
	
	"hnchj.com": 1,
	
	"hncic.net": 1,
	
	"hncoop.com": 1,
	
	"hncourt.org": 1,
	
	"hncpu.com": 1,
	
	"hncsmjzs.com": 1,
	
	"hnditu.com": 1,
	
	"hndpf.org": 1,
	
	"hnemap.com": 1,
	
	"hnfgdj.com": 1,
	
	"hnfxh.com": 1,
	
	"hnfz.net": 1,
	
	"hnfzb.com": 1,
	
	"hngawj.net": 1,
	
	"hngbjy.com": 1,
	
	"hngfjy.com": 1,
	
	"hngh.org": 1,
	
	"hngjj.net": 1,
	
	"hnhjw.com": 1,
	
	"hnhw.com": 1,
	
	"hnhyrc.com": 1,
	
	"hnjkw.net": 1,
	
	"hnkejixueyuan.com": 1,
	
	"hnkjonline.net": 1,
	
	"hnloushi.com": 1,
	
	"hnlrx.net": 1,
	
	"hnlzw.net": 1,
	
	"hnmama.com": 1,
	
	"hnnw.net": 1,
	
	"hnnypp.com": 1,
	
	"hnol.net": 1,
	
	"hnpi.net": 1,
	
	"hnradio.com": 1,
	
	"hnrc.com": 1,
	
	"hnrcsc.com": 1,
	
	"hnrczpw.com": 1,
	
	"hnrsks.com": 1,
	
	"hnskl.net": 1,
	
	"hnsncb.com": 1,
	
	"hnswtzb.org": 1,
	
	"hnsxfj.net": 1,
	
	"hnszgh.org": 1,
	
	"hntianya.net": 1,
	
	"hnticai.com": 1,
	
	"hntjtjw.com": 1,
	
	"hntv.tv": 1,
	
	"hnwencheng.com": 1,
	
	"hnwn.net": 1,
	
	"hnxxw666.com": 1,
	
	"hnxxwzz.com": 1,
	
	"hnxysteel.com": 1,
	
	"hnyxhb.com": 1,
	
	"hnyymd.com": 1,
	
	"hnzhuang.com": 1,
	
	"hnzqw.com": 1,
	
	"hnzscl.com": 1,
	
	"hnzssj.com": 1,
	
	"hnzyzx.com": 1,
	
	"hogesoft.com": 1,
	
	"holdfine.com": 1,
	
	"home77.com": 1,
	
	"home898.com": 1,
	
	"homeinns.com": 1,
	
	"homekoo.com": 1,
	
	"hometex114.com": 1,
	
	"hometexnet.com": 1,
	
	"homeun.com": 1,
	
	"homomo.net": 1,
	
	"hong-men.com": 1,
	
	"hongdamold.com": 1,
	
	"hongen.com": 1,
	
	"hongfeng.co": 1,
	
	"honghuowang.com": 1,
	
	"hongjingedu.com": 1,
	
	"hongmen.cc": 1,
	
	"hongmen.com": 1,
	
	"hongniang.com": 1,
	
	"hongshu.com": 1,
	
	"hongtu.com": 1,
	
	"hongxiu.com": 1,
	
	"hongzao114.com": 1,
	
	"hoolo.tv": 1,
	
	"hoopchina.com": 1,
	
	"hooshong.com": 1,
	
	"horsehr.com": 1,
	
	"hosocorp.com": 1,
	
	"hostadm.net": 1,
	
	"hostker.com": 1,
	
	"hot178.com": 1,
	
	"hotsales.net": 1,
	
	"houcar.com": 1,
	
	"houdao.com": 1,
	
	"house365.com": 1,
	
	"house371.com": 1,
	
	"house666.com": 1,
	
	"househr.com": 1,
	
	"househy.com": 1,
	
	"housoo.com": 1,
	
	"houstyle.com": 1,
	
	"houxue.com": 1,
	
	"howbuy.com": 1,
	
	"howjia.com": 1,
	
	"howzhi.com": 1,
	
	"hq-ielts.com": 1,
	
	"hq0564.com": 1,
	
	"hq88.com": 1,
	
	"hqbpc.com": 1,
	
	"hqcr.com": 1,
	
	"hqdoor.com": 1,
	
	"hqew.com": 1,
	
	"hqfb.org": 1,
	
	"hqjhw.com": 1,
	
	"hql8.com": 1,
	
	"hqlsw.com": 1,
	
	"hqmianshou.com": 1,
	
	"hqqrc.com": 1,
	
	"hqsxy.com": 1,
	
	"hqthw.com": 1,
	
	"hqyj.com": 1,
	
	"hr006.com": 1,
	
	"hr025.com": 1,
	
	"hr0571.com": 1,
	
	"hr0660.com": 1,
	
	"hr0751.com": 1,
	
	"hr0752.com": 1,
	
	"hr0753.com": 1,
	
	"hr0755.com": 1,
	
	"hr0759.com": 1,
	
	"hr0766.com": 1,
	
	"hr0898.com": 1,
	
	"hr1000.com": 1,
	
	"hr33.com": 1,
	
	"hr369.com": 1,
	
	"hr762.com": 1,
	
	"hr763.com": 1,
	
	"hrbanlv.com": 1,
	
	"hrbhw.net": 1,
	
	"hrbit.com": 1,
	
	"hrbjsd.com": 1,
	
	"hrblaw.net": 1,
	
	"hrbuilds.com": 1,
	
	"hrhorse.com": 1,
	
	"hrpin.com": 1,
	
	"hrsalon.org": 1,
	
	"hs-cn.com": 1,
	
	"hsdcw.com": 1,
	
	"hsdhq.com": 1,
	
	"hshan.com": 1,
	
	"hsjy.net": 1,
	
	"hsjyxx.com": 1,
	
	"hsmhw.com": 1,
	
	"hsrcw.com": 1,
	
	"hssanli.com": 1,
	
	"hsw365.com": 1,
	
	"hsx99.com": 1,
	
	"htbenet.net": 1,
	
	"hteacher.net": 1,
	
	"htexam.com": 1,
	
	"htexam.net": 1,
	
	"htinns.com": 1,
	
	"htkaoyan.com": 1,
	
	"html5cn.org": 1,
	
	"htsec.com": 1,
	
	"httpbin.org": 1,
	
	"httpcn.com": 1,
	
	"hty.cc": 1,
	
	"htyuqi.com": 1,
	
	"htzx.org": 1,
	
	"hua.com": 1,
	
	"huaban.com": 1,
	
	"huabian.com": 1,
	
	"huacolor.com": 1,
	
	"huadaofengye.com": 1,
	
	"huaer.cc": 1,
	
	"huagu.com": 1,
	
	"huaian.com": 1,
	
	"huaibei163.com": 1,
	
	"huaihai.tv": 1,
	
	"huainet.com": 1,
	
	"huaiyangnews.com": 1,
	
	"huajiemba.com": 1,
	
	"huajx.com": 1,
	
	"hualady.com": 1,
	
	"hualala.com": 1,
	
	"hualongxiang.com": 1,
	
	"huamanche.com": 1,
	
	"huamu.com": 1,
	
	"huanancn.com": 1,
	
	"huangru.com": 1,
	
	"huangye88.com": 1,
	
	"huangyesoso.com": 1,
	
	"huanjinrong.com": 1,
	
	"huanmusic.com": 1,
	
	"huanq.com": 1,
	
	"huanqiu.com": 1,
	
	"huantu.com": 1,
	
	"huapinwang.com": 1,
	
	"huas.co": 1,
	
	"huash.com": 1,
	
	"huashihongfeng.com": 1,
	
	"huasmaple.com": 1,
	
	"huatai.com": 1,
	
	"huatu.com": 1,
	
	"huaue.com": 1,
	
	"huawei.com": 1,
	
	"huaxi100.com": 1,
	
	"huaxia.com": 1,
	
	"huaxiajiayuan.net": 1,
	
	"huaxirc.com": 1,
	
	"huayin114.com": 1,
	
	"huayin520.com": 1,
	
	"huayuanjuye.com": 1,
	
	"huayuejob.com": 1,
	
	"huazhile.com": 1,
	
	"huazhu.com": 1,
	
	"hubai.com": 1,
	
	"hubeirc.com": 1,
	
	"hudong.com": 1,
	
	"huedu.net": 1,
	
	"hugd.com": 1,
	
	"hui800.com": 1,
	
	"huibo.com": 1,
	
	"huibojob.com": 1,
	
	"huiche.com": 1,
	
	"huiche100.com": 1,
	
	"huiji.wiki": 1,
	
	"huijistatic.com": 1,
	
	"huijiwiki.com": 1,
	
	"huilaimai.com": 1,
	
	"huilan.com": 1,
	
	"huimaiche.com": 1,
	
	"huishangbao.com": 1,
	
	"huishi365.com": 1,
	
	"huishoushang.com": 1,
	
	"huisou.com": 1,
	
	"huitong123.com": 1,
	
	"huitu.com": 1,
	
	"huixiaodai.com": 1,
	
	"huizcn.com": 1,
	
	"huizhuang.com": 1,
	
	"hujiang.com": 1,
	
	"huluxia.com": 1,
	
	"humanrights-china.org": 1,
	
	"hunanedu.net": 1,
	
	"hunangy.com": 1,
	
	"hunanpta.com": 1,
	
	"hunanrc.com": 1,
	
	"hunantv.com": 1,
	
	"hunbys.com": 1,
	
	"hunchunnet.com": 1,
	
	"hunlimama.com": 1,
	
	"hunqingren.com": 1,
	
	"hunt007.com": 1,
	
	"hunuo.com": 1,
	
	"huobi.com": 1,
	
	"huoche.com": 1,
	
	"huoche.net": 1,
	
	"huochepiao.com": 1,
	
	"huochepiao.net": 1,
	
	"huochepu.com": 1,
	
	"huocheshikebiao.org": 1,
	
	"huodongjia.com": 1,
	
	"huodongxing.com": 1,
	
	"huohu123.com": 1,
	
	"huolinhe.com": 1,
	
	"huoshan.cc": 1,
	
	"huoshannews.com": 1,
	
	"huowan.com": 1,
	
	"huoxue.com": 1,
	
	"hupu.com": 1,
	
	"hushi114.com": 1,
	
	"hustonline.net": 1,
	
	"huway.com": 1,
	
	"huxi.cc": 1,
	
	"huxiu.com": 1,
	
	"hvbao.com": 1,
	
	"hwit.net": 1,
	
	"hwlai.com": 1,
	
	"hx-car.com": 1,
	
	"hx116.com": 1,
	
	"hx2car.com": 1,
	
	"hx95.com": 1,
	
	"hxen.com": 1,
	
	"hxfz.org": 1,
	
	"hxfzzx.com": 1,
	
	"hxjyb.com": 1,
	
	"hxrc.com": 1,
	
	"hxsd.com": 1,
	
	"hxsx.net": 1,
	
	"hxuu.com": 1,
	
	"hxyjw.com": 1,
	
	"hxzg.net": 1,
	
	"hy123.com": 1,
	
	"hydcd.com": 1,
	
	"hyedu.com": 1,
	
	"hyedu.net": 1,
	
	"hyjzw.com": 1,
	
	"hyk123.net": 1,
	
	"hykaoyan.org": 1,
	
	"hynews.net": 1,
	
	"hynews.org": 1,
	
	"hyqcw.com": 1,
	
	"hyrmw.com": 1,
	
	"hytechan.com": 1,
	
	"hywlm.com": 1,
	
	"hyxfhq.com": 1,
	
	"hyxnews.com": 1,
	
	"hyxww.com": 1,
	
	"hyxzx.net": 1,
	
	"hyyxw.net": 1,
	
	"hz321.com": 1,
	
	"hz66.com": 1,
	
	"hzagro.com": 1,
	
	"hzbj.com": 1,
	
	"hzbx.com": 1,
	
	"hzcnb.com": 1,
	
	"hzcnc.com": 1,
	
	"hzcskj.com": 1,
	
	"hzedu.net": 1,
	
	"hzgh.org": 1,
	
	"hzgjj.com": 1,
	
	"hzhr.com": 1,
	
	"hzhuti.com": 1,
	
	"hzins.com": 1,
	
	"hzjxy.net": 1,
	
	"hzjys.net": 1,
	
	"hzland.com": 1,
	
	"hzlib.net": 1,
	
	"hzlp.com": 1,
	
	"hzlw.com": 1,
	
	"hzmba.com": 1,
	
	"hznews.com": 1,
	
	"hznzcn.com": 1,
	
	"hzpzs.net": 1,
	
	"hzqx.com": 1,
	
	"hzrc.com": 1,
	
	"hzrx.net": 1,
	
	"hzshw.com": 1,
	
	"hzsmesc.com": 1,
	
	"hztbc.com": 1,
	
	"hzti.com": 1,
	
	"hzutc.com": 1,
	
	"hzwmw.com": 1,
	
	"hzyhrc.net": 1,
	
	"i-jjj.com": 1,
	
	"i-meto.com": 1,
	
	"i-okla.com": 1,
	
	"i0456.com": 1,
	
	"i1515.com": 1,
	
	"i1515.mobi": 1,
	
	"i21st.cn": 1,
	
	"i360mall.com": 1,
	
	"i8i8i8.com": 1,
	
	"i9133.com": 1,
	
	"iacmall.com": 1,
	
	"iapps.im": 1,
	
	"iask.com": 1,
	
	"iaweg.com": 1,
	
	"ib-china.com": 1,
	
	"ibamaol.com": 1,
	
	"ibanggo.com": 1,
	
	"ibangkf.com": 1,
	
	"ibeifeng.com": 1,
	
	"ibicn.com": 1,
	
	"ibm.com": 1,
	
	"ibruce.info": 1,
	
	"ibusdb.com": 1,
	
	"ic10.com": 1,
	
	"ic37.com": 1,
	
	"ic98.com": 1,
	
	"icafe8.com": 1,
	
	"icaile.com": 1,
	
	"icar168.net": 1,
	
	"icbuy.com": 1,
	
	"ichacha.net": 1,
	
	"ichengzi.com": 1,
	
	"ichtf.com": 1,
	
	"iciba.com": 1,
	
	"icis-china.com": 1,
	
	"icjyw.com": 1,
	
	"icloud.com": 1,
	
	"icoat.cc": 1,
	
	"icpcw.com": 1,
	
	"icson.com": 1,
	
	"icxo.com": 1,
	
	"icycn.com": 1,
	
	"idcquan.com": 1,
	
	"idcspy.com": 1,
	
	"idiaoyan.com": 1,
	
	"idongzhi.com": 1,
	
	"idooor.com": 1,
	
	"idqqimg.com": 1,
	
	"idting.com": 1,
	
	"ieche.com": 1,
	
	"iecity.com": 1,
	
	"iecworld.com": 1,
	
	"iedu.sg": 1,
	
	"ieee.org": 1,
	
	"iefang.com": 1,
	
	"iezhan.com": 1,
	
	"ifanr.com": 1,
	
	"ifanr.in": 1,
	
	"ifanrusercontent.com": 1,
	
	"ifconfig.co": 1,
	
	"ifconfig.me": 1,
	
	"ifdream.net": 1,
	
	"ifeng.com": 1,
	
	"ifenghui.com": 1,
	
	"ifengimg.com": 1,
	
	"ifensi.com": 1,
	
	"iflying.com": 1,
	
	"ifsino.com": 1,
	
	"igeak.com": 1,
	
	"iguxuan.com": 1,
	
	"ihaiyan.com": 1,
	
	"ihanhua.com": 1,
	
	"ihei5.com": 1,
	
	"iheima.com": 1,
	
	"ihome99.com": 1,
	
	"ihongyou.com": 1,
	
	"ihoome.com": 1,
	
	"ihuatong.com": 1,
	
	"ii010.com": 1,
	
	"iianews.com": 1,
	
	"iiigo.com": 1,
	
	"iiijjj.com": 1,
	
	"iiyi.com": 1,
	
	"ijia360.com": 1,
	
	"ijiatv.com": 1,
	
	"ijie.com": 1,
	
	"ijinshan.com": 1,
	
	"ijjnews.com": 1,
	
	"ijxjj.com": 1,
	
	"ik123.com": 1,
	
	"ikafan.com": 1,
	
	"ikaka.com": 1,
	
	"ikanchai.com": 1,
	
	"ikandian.com": 1,
	
	"ikang.com": 1,
	
	"ikea.com": 1,
	
	"iknoworld.net": 1,
	
	"ikuyy.com": 1,
	
	"ilangwen.com": 1,
	
	"ileci.com": 1,
	
	"ileehoo.com": 1,
	
	"ilinyi.net": 1,
	
	"ilongre.com": 1,
	
	"iloveyouxi.com": 1,
	
	"ilqut.com": 1,
	
	"im286.com": 1,
	
	"im9.com": 1,
	
	"imanhua.com": 1,
	
	"imeimama.com": 1,
	
	"img.cctvpic.com": 1,
	
	"imglefeng.com": 1,
	
	"imgo.tv": 1,
	
	"imiku.me": 1,
	
	"iminte.com": 1,
	
	"imjad.cn": 1,
	
	"imlvyou.com": 1,
	
	"imooc.com": 1,
	
	"imosi.com": 1,
	
	"imp3.net": 1,
	
	"importfood.net": 1,
	
	"imqq.com": 1,
	
	"imququ.com": 1,
	
	"imrworldwide.com": 1,
	
	"in-en.com": 1,
	
	"in189.com": 1,
	
	"inabr.com": 1,
	
	"inanle.com": 1,
	
	"inchedao.com": 1,
	
	"indexedu.com": 1,
	
	"indexedu.net": 1,
	
	"inezha.com": 1,
	
	"infiworks.com": 1,
	
	"infobidding.com": 1,
	
	"infohc.com": 1,
	
	"infoq.com": 1,
	
	"infoqstatic.com": 1,
	
	"infx.org": 1,
	
	"infzm.com": 1,
	
	"inhe.com": 1,
	
	"inhe.net": 1,
	
	"inlishui.com": 1,
	
	"inshion.com": 1,
	
	"installbi.me": 1,
	
	"intel.com": 1,
	
	"intertid.com": 1,
	
	"intil.biz": 1,
	
	"inuobi.com": 1,
	
	"investjilin.com": 1,
	
	"invitemedia.com": 1,
	
	"ioeoo.com": 1,
	
	"iooeoo.com": 1,
	
	"ioomoo.com": 1,
	
	"iooqoo.com": 1,
	
	"iooroo.com": 1,
	
	"ioroo.com": 1,
	
	"iouoo.com": 1,
	
	"iouter.com": 1,
	
	"iowoo.com": 1,
	
	"ip-api.com": 1,
	
	"ip.sb": 1,
	
	"ip138.com": 1,
	
	"ip1840.com": 1,
	
	"ipadown.com": 1,
	
	"ipapi.co": 1,
	
	"ipchina.com": 1,
	
	"ipetfair.com": 1,
	
	"ipincai.com": 1,
	
	"ipingshan.com": 1,
	
	"ipinyou.com": 1,
	
	"ipip.net": 1,
	
	"iplaysoft.com": 1,
	
	"ipshu.com": 1,
	
	"iqilu.com": 1,
	
	"iqing.in": 1,
	
	"iqingren.com": 1,
	
	"iqiyi.com": 1,
	
	"iquicksample.com": 1,
	
	"iraoping.com": 1,
	
	"irrichina.com": 1,
	
	"irs01.com": 1,
	
	"irs01.net": 1,
	
	"isanmen.com": 1,
	
	"ishaanxi.com": 1,
	
	"ishang.net": 1,
	
	"ishangman.com": 1,
	
	"ishowx.com": 1,
	
	"isoucai.com": 1,
	
	"it-home.org": 1,
	
	"it168.com": 1,
	
	"it7t.com": 1,
	
	"itbulo.com": 1,
	
	"itc.cn": 1,
	
	"itchaguan.com": 1,
	
	"itcpn.net": 1,
	
	"itdcw.com": 1,
	
	"itellyou.cn": 1,
	
	"iteye.com": 1,
	
	"ithome.com": 1,
	
	"itiexue.net": 1,
	
	"itmop.com": 1,
	
	"itoptrip.com": 1,
	
	"itouzi.com": 1,
	
	"itpub.net": 1,
	
	"itrancn.com": 1,
	
	"itravelqq.com": 1,
	
	"itshai.com": 1,
	
	"itsogo.net": 1,
	
	"itunion.net": 1,
	
	"itxinwen.com": 1,
	
	"ivsky.com": 1,
	
	"iwebchoice.com": 1,
	
	"iwencai.com": 1,
	
	"iwhr.com": 1,
	
	"iwms.net": 1,
	
	"ixiaoma.com": 1,
	
	"ixiawan.com": 1,
	
	"ixumu.com": 1,
	
	"iyaxin.com": 1,
	
	"iyaya.com": 1,
	
	"iyaya.info": 1,
	
	"iyizhai.com": 1,
	
	"iyuanhong.com": 1,
	
	"iyxwzx.com": 1,
	
	"iyy.im": 1,
	
	"iyzx.com": 1,
	
	"iz.la": 1,
	
	"izaojiao.com": 1,
	
	"izda.com": 1,
	
	"izdap.com": 1,
	
	"izdinix.com": 1,
	
	"izhufu.com": 1,
	
	"izhuti.com": 1,
	
	"j.cn": 1,
	
	"j1.com": 1,
	
	"j2014.com": 1,
	
	"ja001.com": 1,
	
	"jaecdn.com": 1,
	
	"jaedu.com": 1,
	
	"jandan.net": 1,
	
	"jarhu.com": 1,
	
	"javaeye.com": 1,
	
	"jaz581.com": 1,
	
	"jb1000.com": 1,
	
	"jb51.net": 1,
	
	"jbdown.com": 1,
	
	"jbedu.net": 1,
	
	"jbzyw.com": 1,
	
	"jc114.com": 1,
	
	"jc35.com": 1,
	
	"jc68.com": 1,
	
	"jc85.com": 1,
	
	"jcbao.com": 1,
	
	"jcbctv.com": 1,
	
	"jcoal.com": 1,
	
	"jcodecraeer.com": 1,
	
	"jcqzw.com": 1,
	
	"jcrb.com": 1,
	
	"jcrcw.com": 1,
	
	"jcsychina.com": 1,
	
	"jctrans.com": 1,
	
	"jcwcn.com": 1,
	
	"jcz001.com": 1,
	
	"jczsw.net": 1,
	
	"jczxb.com": 1,
	
	"jd-cg.com": 1,
	
	"jd.com": 1,
	
	"jd100.com": 1,
	
	"jdbbx.com": 1,
	
	"jdcjsr.com": 1,
	
	"jdedu.net": 1,
	
	"jdgod.com": 1,
	
	"jdjob88.com": 1,
	
	"jdsc35.com": 1,
	
	"jdw001.com": 1,
	
	"jdypgxw.com": 1,
	
	"jdzj.com": 1,
	
	"jdzol.com": 1,
	
	"jdzol.net": 1,
	
	"jewelchina.com": 1,
	
	"jfcaifu.com": 1,
	
	"jfdaily.com": 1,
	
	"jfgphzs.com": 1,
	
	"jfinfo.com": 1,
	
	"jfxx.net": 1,
	
	"jgaoxiao.com": 1,
	
	"jgcx56.com": 1,
	
	"jgedu.net": 1,
	
	"jgjob88.com": 1,
	
	"jgjw.com": 1,
	
	"jgny.net": 1,
	
	"jgsdaily.com": 1,
	
	"jgxxw.com": 1,
	
	"jh2sc.com": 1,
	
	"jh597.com": 1,
	
	"jhbezs.com": 1,
	
	"jhcxl.com": 1,
	
	"jhdec.com": 1,
	
	"jhhssy.com": 1,
	
	"jhjy.net": 1,
	
	"jia.com": 1,
	
	"jia360.com": 1,
	
	"jia400.com": 1,
	
	"jiadinglife.net": 1,
	
	"jiafangyun.com": 1,
	
	"jiagle.com": 1,
	
	"jiahesj.com": 1,
	
	"jiahesuji.com": 1,
	
	"jiaj.org": 1,
	
	"jiajiao114.com": 1,
	
	"jiajiao400.com": 1,
	
	"jiajiaoban.com": 1,
	
	"jiaju.com": 1,
	
	"jiaju001.com": 1,
	
	"jiajumi.com": 1,
	
	"jiajuol.com": 1,
	
	"jiajushichang.net": 1,
	
	"jiakao.com": 1,
	
	"jiameng.com": 1,
	
	"jiameng001.com": 1,
	
	"jiameng8.com": 1,
	
	"jiancai.com": 1,
	
	"jiancaizhanhui.com": 1,
	
	"jiandaoyun.com": 1,
	
	"jiangduoduo.com": 1,
	
	"jiangdurencai.com": 1,
	
	"jianghairc.com": 1,
	
	"jianghuairc.com": 1,
	
	"jiangmin.com": 1,
	
	"jiangnews.com": 1,
	
	"jiangshi.com": 1,
	
	"jiangshi.org": 1,
	
	"jiangsuedu.net": 1,
	
	"jiangsugqt.org": 1,
	
	"jiangsurc.com": 1,
	
	"jianguoyun.com": 1,
	
	"jiangxia.cc": 1,
	
	"jiangxirc.com": 1,
	
	"jiankang.com": 1,
	
	"jiankangzu.com": 1,
	
	"jianke.com": 1,
	
	"jiankongbao.com": 1,
	
	"jianli-sky.com": 1,
	
	"jianshe99.com": 1,
	
	"jianshu.com": 1,
	
	"jianshu.io": 1,
	
	"jianso.com": 1,
	
	"jiansuji.org": 1,
	
	"jianzhi8.com": 1,
	
	"jianzhiabc.com": 1,
	
	"jiaodong.net": 1,
	
	"jiaomai.com": 1,
	
	"jiaoman.com": 1,
	
	"jiaoshizhaopin.net": 1,
	
	"jiaotanqihuo.com": 1,
	
	"jiaoyimao.com": 1,
	
	"jiaoyulei.com": 1,
	
	"jiaozhou.net": 1,
	
	"jiashule.com": 1,
	
	"jiasule.com": 1,
	
	"jiathis.com": 1,
	
	"jiatx.com": 1,
	
	"jiaxingsteel.com": 1,
	
	"jiayouqiche.com": 1,
	
	"jiayuan.com": 1,
	
	"jiazhao.com": 1,
	
	"jiazhuang6.com": 1,
	
	"jichuang.net": 1,
	
	"jichuang360.com": 1,
	
	"jide123.com": 1,
	
	"jidi.com": 1,
	
	"jidongrc.com": 1,
	
	"jiemeng8.com": 1,
	
	"jiemian.com": 1,
	
	"jiemo.net": 1,
	
	"jiepang.com": 1,
	
	"jiepei.com": 1,
	
	"jietusoft.com": 1,
	
	"jieyitong668.com": 1,
	
	"jieyue.net": 1,
	
	"jifang360.com": 1,
	
	"jiiaa.com": 1,
	
	"jijidi.com": 1,
	
	"jike.com": 1,
	
	"jikexueyuan.com": 1,
	
	"jilaibao.com": 1,
	
	"jilaidai.com": 1,
	
	"jilinfc.com": 1,
	
	"jilinrc.com": 1,
	
	"jilinzhaopin.com": 1,
	
	"jin14.com": 1,
	
	"jinbifun.com": 1,
	
	"jincin.com": 1,
	
	"jinde.org": 1,
	
	"jinfr.com": 1,
	
	"jinfuzi.com": 1,
	
	"jing.fm": 1,
	
	"jingchurc.com": 1,
	
	"jingdianwan.com": 1,
	
	"jinghua.com": 1,
	
	"jinghua.org": 1,
	
	"jingjia.org": 1,
	
	"jingjiawang.com": 1,
	
	"jingjinnews.com": 1,
	
	"jingjishi.com": 1,
	
	"jinglao.net": 1,
	
	"jingnei.net": 1,
	
	"jingpinke.com": 1,
	
	"jingwei.com": 1,
	
	"jingwumeishi.com": 1,
	
	"jingyanbus.com": 1,
	
	"jingzheng.com": 1,
	
	"jingzhengu.com": 1,
	
	"jinhejs.com": 1,
	
	"jinhongmc.com": 1,
	
	"jinhuatv.com": 1,
	
	"jinjianginns.com": 1,
	
	"jinkaoedu.com": 1,
	
	"jinku.com": 1,
	
	"jinlaoxi.com": 1,
	
	"jinmajia.com": 1,
	
	"jinmenrc.com": 1,
	
	"jinnong.cc": 1,
	
	"jinpu.com": 1,
	
	"jinquktv.com": 1,
	
	"jinrongren.net": 1,
	
	"jinshangrc.com": 1,
	
	"jinshuju.net": 1,
	
	"jinti.com": 1,
	
	"jinwangye.com": 1,
	
	"jinxian.cc": 1,
	
	"jinxiang114.com": 1,
	
	"jinxun.cc": 1,
	
	"jinyuan2008.com": 1,
	
	"jinzhoubank.com": 1,
	
	"jisibar.com": 1,
	
	"jisuanke.com": 1,
	
	"jitimes.com": 1,
	
	"jitongtianxia.com": 1,
	
	"jiu6.com": 1,
	
	"jiudianzhaopin.com": 1,
	
	"jiukuaiyou.com": 1,
	
	"jius.net": 1,
	
	"jiuxian.com": 1,
	
	"jiuzhouxue.com": 1,
	
	"jiwu.com": 1,
	
	"jixie.net": 1,
	
	"jixinet.com": 1,
	
	"jiyifa.com": 1,
	
	"jiyou.tv": 1,
	
	"jiyuantour.com": 1,
	
	"jj20.com": 1,
	
	"jj831.com": 1,
	
	"jjjaaa.com": 1,
	
	"jjjgame.com": 1,
	
	"jjjlll.com": 1,
	
	"jjlxpz.com": 1,
	
	"jjmmw.com": 1,
	
	"jjsrcw.com": 1,
	
	"jjtang.com": 1,
	
	"jjwn.com": 1,
	
	"jjwxc.net": 1,
	
	"jjzg365.com": 1,
	
	"jk51.com": 1,
	
	"jl168.net": 1,
	
	"jldledu.com": 1,
	
	"jlhcszx.com": 1,
	
	"jlit365.com": 1,
	
	"jljbbs.com": 1,
	
	"jljob88.com": 1,
	
	"jllnzz.com": 1,
	
	"jlmhk.com": 1,
	
	"jlonline.com": 1,
	
	"jlqf.net": 1,
	
	"jlsgjt.com": 1,
	
	"jlshumei.com": 1,
	
	"jlsjswm.com": 1,
	
	"jlsmm.com": 1,
	
	"jlstnet.net": 1,
	
	"jluzh.com": 1,
	
	"jlxtdz.com": 1,
	
	"jlzkb.com": 1,
	
	"jm-tour.com": 1,
	
	"jmlr.com": 1,
	
	"jmrb.com": 1,
	
	"jmstatic.com": 1,
	
	"jn001.com": 1,
	
	"jnesc.com": 1,
	
	"jnflsky.com": 1,
	
	"jnlandao.com": 1,
	
	"jnlc.com": 1,
	
	"jnmama.com": 1,
	
	"jnmc.com": 1,
	
	"jnmte.com": 1,
	
	"jnnc.com": 1,
	
	"jnnews.tv": 1,
	
	"jnzxw.net": 1,
	
	"job-sky.com": 1,
	
	"job0663.com": 1,
	
	"job0768.com": 1,
	
	"job100.com": 1,
	
	"job10000.com": 1,
	
	"job1001.com": 1,
	
	"job120.com": 1,
	
	"job128.com": 1,
	
	"job168.com": 1,
	
	"job2299.com": 1,
	
	"job234.net": 1,
	
	"job250.com": 1,
	
	"job256.com": 1,
	
	"job36.com": 1,
	
	"job369.com": 1,
	
	"job5156.com": 1,
	
	"job592.com": 1,
	
	"job616.com": 1,
	
	"job700.com": 1,
	
	"job8001.com": 1,
	
	"job910.com": 1,
	
	"job9151.com": 1,
	
	"job98.com": 1,
	
	"job9981.com": 1,
	
	"job9988.com": 1,
	
	"jobbole.com": 1,
	
	"jobcn.com": 1,
	
	"jobeast.com": 1,
	
	"jobems.com": 1,
	
	"jobfn.com": 1,
	
	"jobgao.com": 1,
	
	"jobgojob.com": 1,
	
	"jobhb.com": 1,
	
	"jobi5.com": 1,
	
	"jobinhe.net": 1,
	
	"jobpin.com": 1,
	
	"jobui.com": 1,
	
	"jobuy.com": 1,
	
	"jobvvv.com": 1,
	
	"jobyun.com": 1,
	
	"joeoo.com": 1,
	
	"joingoo.com": 1,
	
	"jomodns.com": 1,
	
	"joobbe.com": 1,
	
	"joojcc.com": 1,
	
	"joojzz.com": 1,
	
	"joouoo.com": 1,
	
	"jooxoo.com": 1,
	
	"joyes.com": 1,
	
	"joyme.com": 1,
	
	"joyo.com": 1,
	
	"joyowo.com": 1,
	
	"joyyang.com": 1,
	
	"jpkjz.com": 1,
	
	"jq-school.com": 1,
	
	"jqw.com": 1,
	
	"jr18.com": 1,
	
	"jrb2b.com": 1,
	
	"jrj.com": 1,
	
	"jrlpw.com": 1,
	
	"jrpengze.com": 1,
	
	"jrrsq.com": 1,
	
	"jrshx.com": 1,
	
	"jrsmw.com": 1,
	
	"jrw100.com": 1,
	
	"jrxjnet.com": 1,
	
	"jryghq.com": 1,
	
	"jrzj.com": 1,
	
	"jrzp.com": 1,
	
	"js-lottery.com": 1,
	
	"js0573.com": 1,
	
	"js118114.com": 1,
	
	"js119.com": 1,
	
	"js811.com": 1,
	
	"js95598.com": 1,
	
	"jsbc.com": 1,
	
	"jscj.com": 1,
	
	"jsenews.com": 1,
	
	"jsfxh.org": 1,
	
	"jsgc168.com": 1,
	
	"jsgh.org": 1,
	
	"jshealth.com": 1,
	
	"jshyrsrc.com": 1,
	
	"jshze.com": 1,
	
	"jsinfo.net": 1,
	
	"jsjrc.com": 1,
	
	"jslottery.com": 1,
	
	"jsly001.com": 1,
	
	"jsnxs.com": 1,
	
	"jsqw.com": 1,
	
	"jsr365.net": 1,
	
	"jsrc.com": 1,
	
	"jsrsrc.com": 1,
	
	"jsrxny.com": 1,
	
	"jssdw.com": 1,
	
	"jssjys.com": 1,
	
	"jstedu.com": 1,
	
	"jstour.com": 1,
	
	"jstv.com": 1,
	
	"jsvolunteer.org": 1,
	
	"jswmw.com": 1,
	
	"jsxlmed.com": 1,
	
	"jsxmws.com": 1,
	
	"jsyks.com": 1,
	
	"jsymyjs.com": 1,
	
	"jsypj.com": 1,
	
	"jszhaobiao.com": 1,
	
	"jszjsx.com": 1,
	
	"jt122.com": 1,
	
	"jtbole.com": 1,
	
	"jthysh.com": 1,
	
	"jtimg.com": 1,
	
	"jtlhome.com": 1,
	
	"jtxxol.com": 1,
	
	"jtyjy.com": 1,
	
	"ju51.com": 1,
	
	"juanpi.com": 1,
	
	"juchang.com": 1,
	
	"juedui100.com": 1,
	
	"juesheng.com": 1,
	
	"jufengshang.com": 1,
	
	"juhaof.com": 1,
	
	"jujiaonet.com": 1,
	
	"jumei.com": 1,
	
	"junbaike.com": 1,
	
	"junjiajob.com": 1,
	
	"junshishu.com": 1,
	
	"junzhe.com": 1,
	
	"junzhuan.com": 1,
	
	"junzimen.com": 1,
	
	"juooo.com": 1,
	
	"juoooo.com": 1,
	
	"jupai.net": 1,
	
	"juren.com": 1,
	
	"jutuw.com": 1,
	
	"juwai.com": 1,
	
	"juxia.com": 1,
	
	"juyouxi.com": 1,
	
	"juyuan.com": 1,
	
	"jwjy.net": 1,
	
	"jx09.com": 1,
	
	"jx612345.com": 1,
	
	"jxazjd.com": 1,
	
	"jxcnt.com": 1,
	
	"jxcua.com": 1,
	
	"jxdcw.com": 1,
	
	"jxdiguo.com": 1,
	
	"jxdyf.com": 1,
	
	"jxedt.com": 1,
	
	"jxedu.com": 1,
	
	"jxfdc.com": 1,
	
	"jxfgts.com": 1,
	
	"jxga.com": 1,
	
	"jxgdw.com": 1,
	
	"jxgsgl.com": 1,
	
	"jxgydc.com": 1,
	
	"jxhcw.com": 1,
	
	"jxhi.com": 1,
	
	"jxjas.com": 1,
	
	"jxjatv.com": 1,
	
	"jxjjw.net": 1,
	
	"jxjjx.com": 1,
	
	"jxjtxy.com": 1,
	
	"jxjyzy.com": 1,
	
	"jxlcx.com": 1,
	
	"jxllt.com": 1,
	
	"jxltw.com": 1,
	
	"jxpaw.com": 1,
	
	"jxpf.com": 1,
	
	"jxpta.com": 1,
	
	"jxrcw.com": 1,
	
	"jxrencai.com": 1,
	
	"jxrsrc.com": 1,
	
	"jxrtv.com": 1,
	
	"jxsedu.com": 1,
	
	"jxslsd.com": 1,
	
	"jxsoso.com": 1,
	
	"jxsrr.com": 1,
	
	"jxt189.com": 1,
	
	"jxteacher.com": 1,
	
	"jxtourism.com": 1,
	
	"jxtutechan.com": 1,
	
	"jxtyzx.org": 1,
	
	"jxwei.com": 1,
	
	"jxycw.com": 1,
	
	"jygycp.com": 1,
	
	"jynews.net": 1,
	
	"jyrcjl.com": 1,
	
	"jysedu.com": 1,
	
	"jysq.net": 1,
	
	"jyyuan.com": 1,
	
	"jz.cc": 1,
	
	"jz0574.com": 1,
	
	"jz5u.com": 1,
	
	"jzb.com": 1,
	
	"jzcn.net": 1,
	
	"jzcool.com": 1,
	
	"jzdd.net": 1,
	
	"jzjob007.com": 1,
	
	"jznj.com": 1,
	
	"jzpt.com": 1,
	
	"jzqyw.com": 1,
	
	"jzrb.com": 1,
	
	"jzshsc.com": 1,
	
	"jzvip.com": 1,
	
	"jzwcom.com": 1,
	
	"jzyx.com": 1,
	
	"k0410.com": 1,
	
	"k18.com": 1,
	
	"k191.com": 1,
	
	"k366.com": 1,
	
	"k369.com": 1,
	
	"k76.com": 1,
	
	"k8008.com": 1,
	
	"k8k9.com": 1,
	
	"kaba365.com": 1,
	
	"kadaiw.com": 1,
	
	"kadang.com": 1,
	
	"kafan.cn": 1,
	
	"kaichewan.com": 1,
	
	"kaidi163.net": 1,
	
	"kaifu.com": 1,
	
	"kaifu7.com": 1,
	
	"kaiwind.com": 1,
	
	"kaixin001.com": 1,
	
	"kakaba.com": 1,
	
	"kameng.com": 1,
	
	"kanbox.com": 1,
	
	"kancloud.cn": 1,
	
	"kandeng.com": 1,
	
	"kandian.com": 1,
	
	"kandian.net": 1,
	
	"kanghu.net": 1,
	
	"kanglu.com": 1,
	
	"kangq.com": 1,
	
	"kangzhi.com": 1,
	
	"kanimg.com": 1,
	
	"kankan.com": 1,
	
	"kankanews.com": 1,
	
	"kanshu.com": 1,
	
	"kantao.net": 1,
	
	"kanxue.com": 1,
	
	"kanzhun.com": 1,
	
	"kaopu001.com": 1,
	
	"kaoshi110.com": 1,
	
	"kaoyan.com": 1,
	
	"kaoyanfuxi.com": 1,
	
	"kaoyee.com": 1,
	
	"kaozc.com": 1,
	
	"kazakhsoft.com": 1,
	
	"kb-medical.com": 1,
	
	"kdnet.net": 1,
	
	"kds100.com": 1,
	
	"kdslife.com": 1,
	
	"kedou.com": 1,
	
	"keepc.com": 1,
	
	"kehou.com": 1,
	
	"keinsci.com": 1,
	
	"kejet.net": 1,
	
	"kejiqi.com": 1,
	
	"kejiqikan.net": 1,
	
	"kejixun.com": 1,
	
	"kekenet.com": 1,
	
	"kenfor.com": 1,
	
	"keqii.com": 1,
	
	"kesion.com": 1,
	
	"keyunzhan.com": 1,
	
	"keywin.org": 1,
	
	"kf5.com": 1,
	
	"kfsfu.com": 1,
	
	"kfw001.com": 1,
	
	"kgimg.com": 1,
	
	"khez.net": 1,
	
	"khly.net": 1,
	
	"kimiss.com": 1,
	
	"kingdee.com": 1,
	
	"kingsoft.com": 1,
	
	"kisdee.com": 1,
	
	"kjw.cc": 1,
	
	"kkeye.com": 1,
	
	"kkk5.com": 1,
	
	"kkkedu.com": 1,
	
	"kldjy.com": 1,
	
	"km.com": 1,
	
	"km169.net": 1,
	
	"kmeb.net": 1,
	
	"kmf.com": 1,
	
	"kmguolv.com": 1,
	
	"kms88.com": 1,
	
	"kmxsedu.com": 1,
	
	"knownsec.com": 1,
	
	"knowsky.com": 1,
	
	"koeoo.com": 1,
	
	"kongfz.com": 1,
	
	"kongzhong.com": 1,
	
	"konka.com": 1,
	
	"kooaoo.com": 1,
	
	"koofang.com": 1,
	
	"koolearn.com": 1,
	
	"koovoo.com": 1,
	
	"koowo.com": 1,
	
	"kooxoo.com": 1,
	
	"koubei.com": 1,
	
	"koudai.com": 1,
	
	"koudai8.com": 1,
	
	"kq81.com": 1,
	
	"kq88.com": 1,
	
	"kqs114.com": 1,
	
	"kqzp.com": 1,
	
	"krspace.cn": 1,
	
	"ks116.com": 1,
	
	"ks5u.com": 1,
	
	"ksbao.com": 1,
	
	"ksbbs.com": 1,
	
	"ksgs.net": 1,
	
	"kskino.com": 1,
	
	"ktvcity.com": 1,
	
	"ktxp.com": 1,
	
	"ku6.com": 1,
	
	"ku6cdn.com": 1,
	
	"ku6img.com": 1,
	
	"ku6vms.com": 1,
	
	"kuai8.com": 1,
	
	"kuaidi100.com": 1,
	
	"kuaidi100.net": 1,
	
	"kuaifawu.com": 1,
	
	"kuaiji.com": 1,
	
	"kuailezu.com": 1,
	
	"kuailiyu.com": 1,
	
	"kuaiyoujia.com": 1,
	
	"kuaizhan.com": 1,
	
	"kuakao.com": 1,
	
	"kuakao.net": 1,
	
	"kuangchan.biz": 1,
	
	"kuche.com": 1,
	
	"kufa88.com": 1,
	
	"kuge.cc": 1,
	
	"kugou.com": 1,
	
	"kujiale.com": 1,
	
	"kukuplay.com": 1,
	
	"kunlun.com": 1,
	
	"kunlungr.com": 1,
	
	"kunshanrc.com": 1,
	
	"kuotu.com": 1,
	
	"kuparts.com": 1,
	
	"kuqyu.com": 1,
	
	"kutj.com": 1,
	
	"kutongji.com": 1,
	
	"kuwan8.com": 1,
	
	"kuyibu.com": 1,
	
	"kuyiso.com": 1,
	
	"kvov.com": 1,
	
	"kvov.org": 1,
	
	"ky-akoya.com": 1,
	
	"kyhs.me": 1,
	
	"kyjia.com": 1,
	
	"kyp.com": 1,
	
	"kywmall.com": 1,
	
	"kzhuang.com": 1,
	
	"kzj365.com": 1,
	
	"kzjdb.com": 1,
	
	"l-zzz.com": 1,
	
	"l99.com": 1,
	
	"la-bbs.net": 1,
	
	"laawoo.com": 1,
	
	"labbase.net": 1,
	
	"lackar.com": 1,
	
	"lacpj.com": 1,
	
	"lady8844.com": 1,
	
	"lafaso.com": 1,
	
	"lagou.com": 1,
	
	"laidianduo.com": 1,
	
	"laidingba.com": 1,
	
	"laifeng.com": 1,
	
	"laijiuye.com": 1,
	
	"laiwang.com": 1,
	
	"lajmzs.com": 1,
	
	"lamabang.com": 1,
	
	"lamahui.com": 1,
	
	"lan1001.com": 1,
	
	"landai.com": 1,
	
	"landchina.com": 1,
	
	"landjs.com": 1,
	
	"landtu.com": 1,
	
	"lanfw.com": 1,
	
	"langfly.com": 1,
	
	"langge.net": 1,
	
	"langtaojin.com": 1,
	
	"lanhii.com": 1,
	
	"lanou3g.com": 1,
	
	"lanqi.com": 1,
	
	"lanrentuku.com": 1,
	
	"lanrenzhaofang.com": 1,
	
	"lanrenzhijia.com": 1,
	
	"lanshandichan.com": 1,
	
	"lany.me": 1,
	
	"lanyanwan.com": 1,
	
	"lanyus.com": 1,
	
	"laohu.com": 1,
	
	"laohuangli.net": 1,
	
	"laoke.com": 1,
	
	"laomoo.com": 1,
	
	"laonanren.com": 1,
	
	"laoqianzhuang.com": 1,
	
	"laoren.com": 1,
	
	"laravel-china.org": 1,
	
	"laser-chn.com": 1,
	
	"laserfair.com": 1,
	
	"lashou.com": 1,
	
	"lashouimg.com": 1,
	
	"lavago.com": 1,
	
	"law-lib.com": 1,
	
	"law-star.com": 1,
	
	"law1818.com": 1,
	
	"lawtimeimg.com": 1,
	
	"lawyermr.com": 1,
	
	"lawyerwq.com": 1,
	
	"lazyren.com": 1,
	
	"lbesec.com": 1,
	
	"lbgoo.com": 1,
	
	"lbx.cc": 1,
	
	"lbx777.com": 1,
	
	"lc-news.com": 1,
	
	"lcfcw.com": 1,
	
	"lchssy.com": 1,
	
	"lcyx.com": 1,
	
	"ldrczpw.com": 1,
	
	"ldsshj.com": 1,
	
	"ldz.cc": 1,
	
	"le.com": 1,
	
	"leancloud.cn": 1,
	
	"leatherhr.com": 1,
	
	"leazn.com": 1,
	
	"lecai.com": 1,
	
	"ledcac.com": 1,
	
	"ledcax.com": 1,
	
	"lediaocha.com": 1,
	
	"ledmmw.com": 1,
	
	"ledth.com": 1,
	
	"ledu.com": 1,
	
	"ledwn.com": 1,
	
	"lefeng.com": 1,
	
	"leglek.com": 1,
	
	"legolas-media.com": 1,
	
	"legongchang.com": 1,
	
	"lehecai.com": 1,
	
	"leho.com": 1,
	
	"leidian.com": 1,
	
	"leiphone.com": 1,
	
	"lejiaoyun.com": 1,
	
	"lejj.com": 1,
	
	"leju.com": 1,
	
	"lejuju.com": 1,
	
	"lengxiaohua.com": 1,
	
	"lenosoft.net": 1,
	
	"lenovo.com": 1,
	
	"lenovo.com.cn": 1,
	
	"lenovomobile.cn": 1,
	
	"lenovomobile.com": 1,
	
	"lenovoqm.com": 1,
	
	"leqiyou.com": 1,
	
	"letao.com": 1,
	
	"letfind.com": 1,
	
	"letian.net": 1,
	
	"letv.com": 1,
	
	"letvcdn.com": 1,
	
	"letvimg.com": 1,
	
	"lexue.com": 1,
	
	"lexun.com": 1,
	
	"leyoo.com": 1,
	
	"leyou.com": 1,
	
	"lezhi.com": 1,
	
	"leziyou.com": 1,
	
	"lfang.com": 1,
	
	"lfkt.com": 1,
	
	"lfxww.com": 1,
	
	"lg.com": 1,
	
	"lgmi.com": 1,
	
	"lgrcsc.com": 1,
	
	"lh168.net": 1,
	
	"lh36524.com": 1,
	
	"lhjy.net": 1,
	
	"li63.com": 1,
	
	"li63.net": 1,
	
	"liang360.com": 1,
	
	"liangjing.org": 1,
	
	"lianjia.com": 1,
	
	"lianm.com": 1,
	
	"liansuo.com": 1,
	
	"liansuopinpai.com": 1,
	
	"liantu.com": 1,
	
	"liao1.com": 1,
	
	"liaoba.cc": 1,
	
	"liaoing.com": 1,
	
	"liaoshenrc.com": 1,
	
	"liaotuo.org": 1,
	
	"liaoxuefeng.com": 1,
	
	"liaozhai.tv": 1,
	
	"liba.com": 1,
	
	"lie-che.com": 1,
	
	"liebiao.com": 1,
	
	"liebo.com": 1,
	
	"liecheng.com": 1,
	
	"liejin99.com": 1,
	
	"lieju.com": 1,
	
	"liepin.com": 1,
	
	"lierencai.com": 1,
	
	"lietou-static.com": 1,
	
	"lietou.com": 1,
	
	"lietou.so": 1,
	
	"lieyou.com": 1,
	
	"life139.com": 1,
	
	"lifeyoyo.com": 1,
	
	"lightget.com": 1,
	
	"lightingchina.com": 1,
	
	"lihaisheng.com": 1,
	
	"linekong.com": 1,
	
	"linezing.com": 1,
	
	"linfangwang.com": 1,
	
	"lingaoren.com": 1,
	
	"lingnanrc.com": 1,
	
	"lingshi.com": 1,
	
	"lingtuan.com": 1,
	
	"lingw.net": 1,
	
	"lingyuan.net": 1,
	
	"linjiang.org": 1,
	
	"linjiang365.com": 1,
	
	"link-future.com": 1,
	
	"linkedin.com": 1,
	
	"linkhx.com": 1,
	
	"linkwan.com": 1,
	
	"linuxdiyf.com": 1,
	
	"linuxidc.com": 1,
	
	"linxi.net": 1,
	
	"linyiren.com": 1,
	
	"lipu.net": 1,
	
	"liqucn.com": 1,
	
	"lishi5.com": 1,
	
	"lishifengyun.com": 1,
	
	"litianbg.com": 1,
	
	"liudu.com": 1,
	
	"liuhe.com": 1,
	
	"liulanmi.com": 1,
	
	"liulin.cc": 1,
	
	"liuts.com": 1,
	
	"liuxilife.com": 1,
	
	"liuxue114.com": 1,
	
	"liuxue360.com": 1,
	
	"liuxue3600.com": 1,
	
	"liuxue51.net": 1,
	
	"liuxue86.com": 1,
	
	"liuxueca.com": 1,
	
	"live754.com": 1,
	
	"live800.com": 1,
	
	"liveuc.net": 1,
	
	"livnj.com": 1,
	
	"liwai.com": 1,
	
	"liwuyou.com": 1,
	
	"lixianedu.net": 1,
	
	"lixin.co": 1,
	
	"liyezhongzhi.com": 1,
	
	"liyi99.com": 1,
	
	"liyin.date": 1,
	
	"lizhi.io": 1,
	
	"lizi.com": 1,
	
	"lj597.com": 1,
	
	"ljforest.com": 1,
	
	"ljia.net": 1,
	
	"ljspjm.com": 1,
	
	"lkgame.com": 1,
	
	"lkme.cc": 1,
	
	"lldgd.com": 1,
	
	"lllddd.com": 1,
	
	"lltqc.com": 1,
	
	"llvan.com": 1,
	
	"llzg.com": 1,
	
	"lm263.com": 1,
	
	"lmbang.com": 1,
	
	"lmdigi.com": 1,
	
	"lmjx.net": 1,
	
	"lmzm.org": 1,
	
	"ln-rc.com": 1,
	
	"ln2car.com": 1,
	
	"ln632.com": 1,
	
	"lncld.net": 1,
	
	"lndzz.com": 1,
	
	"lnfisher.com": 1,
	
	"lnk0.com": 1,
	
	"lnlib.com": 1,
	
	"lnny.net": 1,
	
	"lnpaw.com": 1,
	
	"lnrsks.com": 1,
	
	"lnszgh.org": 1,
	
	"lntvu.com": 1,
	
	"lnwomen.org": 1,
	
	"lnzsks.com": 1,
	
	"local": 1,
	
	"locoso.com": 1,
	
	"locvps.com": 1,
	
	"lofter.com": 1,
	
	"logclub.com": 1,
	
	"login.live.com": 1,
	
	"logmein.com": 1,
	
	"lohcn.org": 1,
	
	"loho88.com": 1,
	
	"lolbuku.com": 1,
	
	"loli.mg": 1,
	
	"loli.vg": 1,
	
	"lolinet.com": 1,
	
	"longchengrc.com": 1,
	
	"longhoo.net": 1,
	
	"longjiang.net": 1,
	
	"longkangmiaomu.com": 1,
	
	"longmen.net": 1,
	
	"longre.com": 1,
	
	"longren.com": 1,
	
	"longshangrc.com": 1,
	
	"longtengcn.com": 1,
	
	"longwenedu.com": 1,
	
	"longyu.cc": 1,
	
	"longzhouwan.com": 1,
	
	"longzhu.com": 1,
	
	"lonlife.net": 1,
	
	"looedu.com": 1,
	
	"loogoo.com": 1,
	
	"loorin.com": 1,
	
	"looyu.com": 1,
	
	"looyuoms.com": 1,
	
	"lotour.com": 1,
	
	"lotour.net": 1,
	
	"louoo.com": 1,
	
	"loupan.com": 1,
	
	"lousw.com": 1,
	
	"love169.com": 1,
	
	"love21cn.com": 1,
	
	"loveinhere.com": 1,
	
	"loveliao.com": 1,
	
	"lovingjob.com": 1,
	
	"loyo.cc": 1,
	
	"lp91.com": 1,
	
	"lpb2b.com": 1,
	
	"lpsrc.com": 1,
	
	"lqjob88.com": 1,
	
	"lqzp.com": 1,
	
	"lrbaba.com": 1,
	
	"lrd.cc": 1,
	
	"lrswl.com": 1,
	
	"ls520.net": 1,
	
	"ls666.com": 1,
	
	"lsdag.com": 1,
	
	"lsgzn.com": 1,
	
	"lsjyw.net": 1,
	
	"lsnetlib.com": 1,
	
	"lsrczpw.com": 1,
	
	"lssdjt.com": 1,
	
	"lssen.com": 1,
	
	"lsszj.com": 1,
	
	"lstcw.com": 1,
	
	"lsw88.com": 1,
	
	"lsyzzzz.com": 1,
	
	"lszxyey.com": 1,
	
	"ltesting.net": 1,
	
	"luan163.com": 1,
	
	"luaninfo.com": 1,
	
	"luanren.com": 1,
	
	"lubanu.com": 1,
	
	"lucifr.com": 1,
	
	"ludashi.com": 1,
	
	"lufax.com": 1,
	
	"lunwentianxia.com": 1,
	
	"luoanguo.com": 1,
	
	"luoherc.com": 1,
	
	"luohuedu.net": 1,
	
	"luojuly.cn": 1,
	
	"luoo.net": 1,
	
	"luosi.com": 1,
	
	"luoyuan597.com": 1,
	
	"lure123.com": 1,
	
	"lusongsong.com": 1,
	
	"luwenwang.com": 1,
	
	"luxtarget.com": 1,
	
	"luyi.so": 1,
	
	"luzhou4.com": 1,
	
	"lvehaisen.com": 1,
	
	"lvhua.com": 1,
	
	"lvlian5.com": 1,
	
	"lvmama.com": 1,
	
	"lvping.com": 1,
	
	"lvse.com": 1,
	
	"lvseba.com": 1,
	
	"lvshou.com": 1,
	
	"lvtu.com": 1,
	
	"lvxing.fm": 1,
	
	"lvye.com": 1,
	
	"lvyou114.com": 1,
	
	"lvziyao.com": 1,
	
	"lwcj.com": 1,
	
	"lwedu.com": 1,
	
	"lwhfishing.com": 1,
	
	"lwhouse.com": 1,
	
	"lwinfo.com": 1,
	
	"lwjy.net": 1,
	
	"lwl12.com": 1,
	
	"lwnews.net": 1,
	
	"lx0830.com": 1,
	
	"lxdns.com": 1,
	
	"lxtedu.com": 1,
	
	"ly.com": 1,
	
	"ly3506.com": 1,
	
	"lycos.com": 1,
	
	"lydfdz.com": 1,
	
	"lyfcw.com": 1,
	
	"lyfff.com": 1,
	
	"lyfxw.net": 1,
	
	"lygbole.com": 1,
	
	"lygczj.com": 1,
	
	"lygmedia.com": 1,
	
	"lygo.com": 1,
	
	"lygrc.com": 1,
	
	"lygrc.net": 1,
	
	"lygredcross.org": 1,
	
	"lyhero.com": 1,
	
	"lyielts.com": 1,
	
	"lyjob.net": 1,
	
	"lyjsws.com": 1,
	
	"lyjy.net": 1,
	
	"lymffyjd.com": 1,
	
	"lyqcw.com": 1,
	
	"lyrc.cc": 1,
	
	"lyrcw.com": 1,
	
	"lysk.net": 1,
	
	"lyvec.net": 1,
	
	"lywj.net": 1,
	
	"lywww.com": 1,
	
	"lywxww.com": 1,
	
	"lywzc.com": 1,
	
	"lz54.net": 1,
	
	"lzgd.net": 1,
	
	"lzhuba.com": 1,
	
	"lzlj.com": 1,
	
	"lzsgaj.com": 1,
	
	"lzsq.net": 1,
	
	"lztech.info": 1,
	
	"lzzy.net": 1,
	
	"m148.com": 1,
	
	"m18.com": 1,
	
	"m1905.com": 1,
	
	"m3guo.com": 1,
	
	"m598.com": 1,
	
	"m6699.com": 1,
	
	"machine35.com": 1,
	
	"machine365.com": 1,
	
	"machineryinfo.net": 1,
	
	"machjobs.com": 1,
	
	"made-in-china.com": 1,
	
	"mafengwo.net": 1,
	
	"magedu.com": 1,
	
	"mahua.com": 1,
	
	"maichawang.com": 1,
	
	"maidong100.com": 1,
	
	"maifang.com": 1,
	
	"maigoo.com": 1,
	
	"maijipu.com": 1,
	
	"maijx.com": 1,
	
	"mail4geek.com": 1,
	
	"mainone.com": 1,
	
	"maituan.com": 1,
	
	"maiwaiwai.com": 1,
	
	"maizufang.com": 1,
	
	"makepolo.com": 1,
	
	"makepolo.net": 1,
	
	"malmam.com": 1,
	
	"mamacn.com": 1,
	
	"manggojia.com": 1,
	
	"mangocity.com": 1,
	
	"manmankan.com": 1,
	
	"manyou.com": 1,
	
	"manzuo.com": 1,
	
	"mao114.com": 1,
	
	"maomeilock.com": 1,
	
	"maoren8.com": 1,
	
	"maotiao.com": 1,
	
	"maoyan.com": 1,
	
	"maoyigu.com": 1,
	
	"maoyiw.com": 1,
	
	"maozhiwang.com": 1,
	
	"map456.com": 1,
	
	"map456.net": 1,
	
	"mapabc.com": 1,
	
	"mapbar.com": 1,
	
	"marry5.com": 1,
	
	"marry52.com": 1,
	
	"marstv.com": 1,
	
	"masadora.net": 1,
	
	"masamaso.com": 1,
	
	"masfy.net": 1,
	
	"maslink.com": 1,
	
	"mastertimes.net": 1,
	
	"materializecss.cn": 1,
	
	"mathtag.com": 1,
	
	"maxfox.me": 1,
	
	"mayi.com": 1,
	
	"mayiw.com": 1,
	
	"mayiyou.com": 1,
	
	"mb5u.com": 1,
	
	"mbachina.com": 1,
	
	"mbahome.com": 1,
	
	"mbalib.com": 1,
	
	"mbaobao.com": 1,
	
	"mbatrip.com": 1,
	
	"mbscss.com": 1,
	
	"mc-test.com": 1,
	
	"mc1314.com": 1,
	
	"mc870.com": 1,
	
	"mcbaidu.com": 1,
	
	"mcbbs.net": 1,
	
	"mcchina.com": 1,
	
	"mcixi.com": 1,
	
	"mcmqyc.com": 1,
	
	"mdui.org": 1,
	
	"mdvoo.com": 1,
	
	"meadin.com": 1,
	
	"mechr.com": 1,
	
	"med126.com": 1,
	
	"med66.com": 1,
	
	"medejob.com": 1,
	
	"mediaplex.com": 1,
	
	"mediav.com": 1,
	
	"medic360.com": 1,
	
	"medzpw.com": 1,
	
	"meet99.com": 1,
	
	"mei5w.com": 1,
	
	"meidal.com": 1,
	
	"meidianwang.com": 1,
	
	"meigui3.com": 1,
	
	"meihongfeng.com": 1,
	
	"meihua.info": 1,
	
	"meijing.com": 1,
	
	"meijw.com": 1,
	
	"meilele.com": 1,
	
	"meilishuo.com": 1,
	
	"meinv.com": 1,
	
	"meinvjz.com": 1,
	
	"meiqia.com": 1,
	
	"meishanren.com": 1,
	
	"meishichina.com": 1,
	
	"meishij.net": 1,
	
	"meitantong.com": 1,
	
	"meitanwang.com": 1,
	
	"meitu.com": 1,
	
	"meituan.com": 1,
	
	"meituan.net": 1,
	
	"meixun.org": 1,
	
	"meiya.com": 1,
	
	"meiyuanchun.com": 1,
	
	"meizhou.com": 1,
	
	"meizhouchina.com": 1,
	
	"meizu.com": 1,
	
	"memall360.com": 1,
	
	"menchuang.biz": 1,
	
	"mengniang.org": 1,
	
	"menkou.com": 1,
	
	"menmian.com": 1,
	
	"mepfair.com": 1,
	
	"mercachina.com": 1,
	
	"messebbs.com": 1,
	
	"metalchina.com": 1,
	
	"metaltechexpo.com": 1,
	
	"metroer.com": 1,
	
	"meyol.com": 1,
	
	"mf08s.com": 1,
	
	"mfdyy.com": 1,
	
	"mfw365.com": 1,
	
	"mgccjg.com": 1,
	
	"mghf.org": 1,
	
	"mgknives.com": 1,
	
	"mgshk.com": 1,
	
	"mgyun.com": 1,
	
	"mh28.com": 1,
	
	"mhdz.com": 1,
	
	"mhongfeng.com": 1,
	
	"mi.com": 1,
	
	"mianbao.com": 1,
	
	"miaomudi.com": 1,
	
	"miaopai.com": 1,
	
	"miaotiao.com": 1,
	
	"miaozhen.com": 1,
	
	"micamika.com": 1,
	
	"microad-cn.com": 1,
	
	"microsoft.com": 1,
	
	"midea.com": 1,
	
	"miercn.com": 1,
	
	"miit.cc": 1,
	
	"mikanani.me": 1,
	
	"mikecrm.com": 1,
	
	"miliao.com": 1,
	
	"mimimama.com": 1,
	
	"mindstore.io": 1,
	
	"mingche.com": 1,
	
	"mingdao.com": 1,
	
	"mingjian.com": 1,
	
	"mingluji.com": 1,
	
	"mingong123.com": 1,
	
	"mingxing.com": 1,
	
	"mingzhurc.com": 1,
	
	"mining120.com": 1,
	
	"mininghr.com": 1,
	
	"minjiangrc.com": 1,
	
	"mipang.com": 1,
	
	"mirautomation.com": 1,
	
	"misranim.com": 1,
	
	"missyuan.com": 1,
	
	"miui.com": 1,
	
	"miyabaobei.com": 1,
	
	"miyun360.com": 1,
	
	"mizhe.com": 1,
	
	"mjceo.com": 1,
	
	"mjingpin.com": 1,
	
	"mjjq.com": 1,
	
	"mkzhan.com": 1,
	
	"mlbuy.com": 1,
	
	"mlinks.cc": 1,
	
	"mlt01.com": 1,
	
	"mm111.net": 1,
	
	"mmall.com": 1,
	
	"mmbang.com": 1,
	
	"mmfj.com": 1,
	
	"mmimm.com": 1,
	
	"mmjyw.com": 1,
	
	"mmrcw.com": 1,
	
	"mmsfw.com": 1,
	
	"mmstat.com": 1,
	
	"mmstw.com": 1,
	
	"mmtrix.com": 1,
	
	"mnkjxy.com": 1,
	
	"mnpaw.com": 1,
	
	"mnrb.net": 1,
	
	"mnsfh.com": 1,
	
	"mnwan.com": 1,
	
	"mnwww.com": 1,
	
	"mob.com": 1,
	
	"mobao.com": 1,
	
	"mobiletrain.org": 1,
	
	"moe.im": 1,
	
	"moe123.com": 1,
	
	"moe123.net": 1,
	
	"moegirl.org": 1,
	
	"moejam.com": 1,
	
	"moetransit.com": 1,
	
	"mofang.com": 1,
	
	"mofangge.com": 1,
	
	"mogujie.com": 1,
	
	"moke8.com": 1,
	
	"mokeedev.com": 1,
	
	"moko.cc": 1,
	
	"momentcdn.com": 1,
	
	"momo35.com": 1,
	
	"monfr.com": 1,
	
	"monteamor.com": 1,
	
	"monternet.com": 1,
	
	"mookie1.com": 1,
	
	"moonbasa.com": 1,
	
	"mop.com": 1,
	
	"morcato.com": 1,
	
	"mosso.com": 1,
	
	"motie.com": 1,
	
	"motnt.com": 1,
	
	"motorchina.com": 1,
	
	"moukao.com": 1,
	
	"mouldu.com": 1,
	
	"moutaichina.com": 1,
	
	"moxingwang.com": 1,
	
	"moyiza.com": 1,
	
	"mozillaonline.com": 1,
	
	"mplife.com": 1,
	
	"mr91.com": 1,
	
	"mshw.net": 1,
	
	"msn.com": 1,
	
	"mstxx.com": 1,
	
	"msxf.net": 1,
	
	"mtime.com": 1,
	
	"mtnets.com": 1,
	
	"mtv123.com": 1,
	
	"mtw001.com": 1,
	
	"mtyun.com": 1,
	
	"mubu.com": 1,
	
	"muchong.com": 1,
	
	"mukewang.com": 1,
	
	"mumayi.com": 1,
	
	"muniao.com": 1,
	
	"mushroommarket.net": 1,
	
	"muyee.com": 1,
	
	"muyingjie.com": 1,
	
	"muyingzhijia.com": 1,
	
	"muzhiwan.com": 1,
	
	"mw1950.com": 1,
	
	"mx175.com": 1,
	
	"mxwz.com": 1,
	
	"my-card.in": 1,
	
	"my0511.com": 1,
	
	"my0538.com": 1,
	
	"my0792.com": 1,
	
	"my0813.com": 1,
	
	"my0832.com": 1,
	
	"my399.com": 1,
	
	"my3dparts.com": 1,
	
	"my3w.com": 1,
	
	"my4399.com": 1,
	
	"my71.com": 1,
	
	"myapp.com": 1,
	
	"mybu.net": 1,
	
	"mybulkstock.com": 1,
	
	"mybuxiu.com": 1,
	
	"mybxg.com": 1,
	
	"mycar168.com": 1,
	
	"mycar168.net": 1,
	
	"mychemjob.com": 1,
	
	"mycimt.com": 1,
	
	"mycollect.net": 1,
	
	"mydown.com": 1,
	
	"mydrivers.com": 1,
	
	"myepjob.com": 1,
	
	"myhard.com": 1,
	
	"myhostadmin.net": 1,
	
	"myjmw.com": 1,
	
	"myjob.com": 1,
	
	"mylegist.com": 1,
	
	"mypethome.com": 1,
	
	"mypharma.com": 1,
	
	"myrb.net": 1,
	
	"myrice.com": 1,
	
	"myrolan.com": 1,
	
	"myshipjob.com": 1,
	
	"myshuo.com": 1,
	
	"mysipo.com": 1,
	
	"mysteel.com": 1,
	
	"mysteel.net": 1,
	
	"mysteelcdn.com": 1,
	
	"mysteelcms.com": 1,
	
	"mysteelweekly.com": 1,
	
	"mytophome.com": 1,
	
	"mytv365.com": 1,
	
	"myubbs.com": 1,
	
	"myyouse.com": 1,
	
	"myzhengxing.com": 1,
	
	"mzedu.com": 1,
	
	"mzrcw.com": 1,
	
	"mzsky.cc": 1,
	
	"mzstatic.com": 1,
	
	"mzwok.com": 1,
	
	"mzyfz.com": 1,
	
	"n21.cc": 1,
	
	"nahuo.com": 1,
	
	"naliwan.com": 1,
	
	"namoc.org": 1,
	
	"nanbuxc.com": 1,
	
	"nandagang.cc": 1,
	
	"nandu.com": 1,
	
	"nanjing2014.org": 1,
	
	"nanjob.com": 1,
	
	"nanningjie.com": 1,
	
	"nanputuo.com": 1,
	
	"nanrenwo.net": 1,
	
	"nantaihu.com": 1,
	
	"nanxi.me": 1,
	
	"narkii.com": 1,
	
	"narutom.com": 1,
	
	"nature.com": 1,
	
	"nb2car.com": 1,
	
	"nba.com": 1,
	
	"nbbltv.com": 1,
	
	"nbch2sc.com": 1,
	
	"nbcoop.com": 1,
	
	"nbcredit.net": 1,
	
	"nbgjj.com": 1,
	
	"nbjbsun.com": 1,
	
	"nbjnzx.com": 1,
	
	"nbks.net": 1,
	
	"nbol.net": 1,
	
	"nbptweb.net": 1,
	
	"nbqcrl.com": 1,
	
	"nbradio.com": 1,
	
	"nbwater.com": 1,
	
	"nbyouth.com": 1,
	
	"nbzhaopin.net": 1,
	
	"nc2sc.com": 1,
	
	"ncdiy.com": 1,
	
	"ncmgcc.com": 1,
	
	"ncxww.com": 1,
	
	"nd-medicine.com": 1,
	
	"nd090.com": 1,
	
	"nd2sc.com": 1,
	
	"nd597.com": 1,
	
	"nd999.com": 1,
	
	"nddaily.com": 1,
	
	"ndfang.com": 1,
	
	"nduoa.com": 1,
	
	"ne365.com": 1,
	
	"ne51.com": 1,
	
	"neeu.com": 1,
	
	"neimengrc.com": 1,
	
	"nekonazo.com": 1,
	
	"nengyuan.com": 1,
	
	"nengyuan.net": 1,
	
	"nerjob.com": 1,
	
	"nestcms.com": 1,
	
	"net-school.net": 1,
	
	"net114.com": 1,
	
	"netandtv.com": 1,
	
	"netat.net": 1,
	
	"netbian.com": 1,
	
	"netease.com": 1,
	
	"netease.im": 1,
	
	"netor.com": 1,
	
	"netover.net": 1,
	
	"netqin.com": 1,
	
	"netseer.com": 1,
	
	"netsun.com": 1,
	
	"newasp.net": 1,
	
	"newchannel.org": 1,
	
	"newft.com": 1,
	
	"newhua.com": 1,
	
	"newmaker.com": 1,
	
	"newoo.com": 1,
	
	"neworiental-k12.org": 1,
	
	"neworiental.org": 1,
	
	"neworientalgroup.org": 1,
	
	"news18a.com": 1,
	
	"newsccn.com": 1,
	
	"newscnr.com": 1,
	
	"newshainan.com": 1,
	
	"newshuanan.com": 1,
	
	"newsmth.net": 1,
	
	"newssc.net": 1,
	
	"newssc.org": 1,
	
	"newsxc.com": 1,
	
	"newsxy.com": 1,
	
	"newsyc.com": 1,
	
	"newyx.net": 1,
	
	"newzgc.com": 1,
	
	"nfcmag.com": 1,
	
	"nfrencai.com": 1,
	
	"ng114.net": 1,
	
	"nga.cn": 1,
	
	"ngacn.cc": 1,
	
	"ngjy.com": 1,
	
	"ngrx.net": 1,
	
	"nh365.com": 1,
	
	"nhaidu.com": 1,
	
	"nhcsw.com": 1,
	
	"nhedu.net": 1,
	
	"nhjyw.com": 1,
	
	"nhmgr.com": 1,
	
	"nhshequ.com": 1,
	
	"nhxxg.com": 1,
	
	"nhzhaopin.com": 1,
	
	"nhzj.com": 1,
	
	"nianw.com": 1,
	
	"nicaifu.com": 1,
	
	"night9.com": 1,
	
	"nihaotw.com": 1,
	
	"nihaowang.com": 1,
	
	"nike17.com": 1,
	
	"nimtt.com": 1,
	
	"ningbochina.com": 1,
	
	"ningboexport.com": 1,
	
	"ninghai.com": 1,
	
	"ninghai.net": 1,
	
	"ninghai.org": 1,
	
	"ninghaiauto.com": 1,
	
	"ninxun.com": 1,
	
	"nipic.com": 1,
	
	"niua.com": 1,
	
	"niuchengwang.com": 1,
	
	"niutuku.com": 1,
	
	"niuwan.com": 1,
	
	"niuwz.com": 1,
	
	"niwodai.com": 1,
	
	"niwota.com": 1,
	
	"nixisall.com": 1,
	
	"nj110.com": 1,
	
	"njbxjy.net": 1,
	
	"njgh.org": 1,
	
	"njhaiwai.com": 1,
	
	"njltmp.com": 1,
	
	"njmuseum.com": 1,
	
	"njprice.com": 1,
	
	"njrsrc.com": 1,
	
	"njsjys.com": 1,
	
	"njxjyw.com": 1,
	
	"njxzzx.org": 1,
	
	"njycyj.com": 1,
	
	"nkhxl.com": 1,
	
	"nlxn.com": 1,
	
	"nmgf.net": 1,
	
	"nmgfic.com": 1,
	
	"nmglabs.com": 1,
	
	"nmgrc.com": 1,
	
	"nmgzkj.com": 1,
	
	"nmrcw.com": 1,
	
	"nmsti.com": 1,
	
	"nmtravel.net": 1,
	
	"nnhdqm.com": 1,
	
	"nnjob.com": 1,
	
	"nnn666.com": 1,
	
	"nnnews.net": 1,
	
	"nnwb.com": 1,
	
	"nong828.com": 1,
	
	"nongchengws.com": 1,
	
	"nongji1688.com": 1,
	
	"nongji360.com": 1,
	
	"nongjx.com": 1,
	
	"nongli.com": 1,
	
	"nongmintv.com": 1,
	
	"nongrisheng.com": 1,
	
	"nongyao001.com": 1,
	
	"nongyezhan.net": 1,
	
	"nooeoo.com": 1,
	
	"noojoo.com": 1,
	
	"northtimes.com": 1,
	
	"nosea.net": 1,
	
	"nowec.com": 1,
	
	"nowscore.com": 1,
	
	"np5.com": 1,
	
	"np597.com": 1,
	
	"npcka.com": 1,
	
	"npckk.com": 1,
	
	"nphoto.net": 1,
	
	"npicp.com": 1,
	
	"npjy.com": 1,
	
	"npsxjy.com": 1,
	
	"nrcce.com": 1,
	
	"nrclady.com": 1,
	
	"nrparking.com": 1,
	
	"ns365.net": 1,
	
	"nsjy.com": 1,
	
	"nsmovie.com": 1,
	
	"nsoad.com": 1,
	
	"nsoso.com": 1,
	
	"nsw88.com": 1,
	
	"nsy6.com": 1,
	
	"ntalker.com": 1,
	
	"ntccjy.com": 1,
	
	"ntehs.com": 1,
	
	"ntgjj.com": 1,
	
	"ntjob88.com": 1,
	
	"ntjoy.com": 1,
	
	"ntjy.net": 1,
	
	"ntlsxj.com": 1,
	
	"ntup.com": 1,
	
	"ntwenming.com": 1,
	
	"ntxx.net": 1,
	
	"nubb.com": 1,
	
	"nuli.org": 1,
	
	"nuomi.com": 1,
	
	"nurqut.com": 1,
	
	"nurqut.net": 1,
	
	"nvidia.cn": 1,
	
	"nvsheng.com": 1,
	
	"nxbys.com": 1,
	
	"nxedu.com": 1,
	
	"nxfang.com": 1,
	
	"nxnews.net": 1,
	
	"nxng.net": 1,
	
	"ny1988.com": 1,
	
	"ny3721.com": 1,
	
	"ny688.com": 1,
	
	"nyzpw.com": 1,
	
	"nz165.com": 1,
	
	"nz86.com": 1,
	
	"nzczq.com": 1,
	
	"nzjsw.com": 1,
	
	"nzw-china.com": 1,
	
	"o571.com": 1,
	
	"oadz.com": 1,
	
	"obolee.com": 1,
	
	"obsapp.com": 1,
	
	"ocar.tv": 1,
	
	"oceanol.com": 1,
	
	"oecr.com": 1,
	
	"oeeee.com": 1,
	
	"oekaki.so": 1,
	
	"oemol.com": 1,
	
	"oemresource.com": 1,
	
	"offcn.com": 1,
	
	"officese.com": 1,
	
	"offifurniture.com": 1,
	
	"ofo.so": 1,
	
	"ofuns.com": 1,
	
	"ofweek.com": 1,
	
	"ofzx.com": 1,
	
	"ohedu.net": 1,
	
	"oho168.com": 1,
	
	"ohocn.com": 1,
	
	"ohqly.com": 1,
	
	"ohsx.com": 1,
	
	"oicq88.com": 1,
	
	"oilchem.net": 1,
	
	"ok0559.com": 1,
	
	"ok619.com": 1,
	
	"okbuy.com": 1,
	
	"okhqb.com": 1,
	
	"oklx.com": 1,
	
	"okmk.com": 1,
	
	"okooo.com": 1,
	
	"okyan.com": 1,
	
	"ol-img.com": 1,
	
	"olcdn.com": 1,
	
	"older99.com": 1,
	
	"ometal.com": 1,
	
	"omico.me": 1,
	
	"onccc.com": 1,
	
	"one-all.com": 1,
	
	"one101.com": 1,
	
	"oneapm.com": 1,
	
	"onegreen.net": 1,
	
	"onekeyrom.com": 1,
	
	"oneplus.cn": 1,
	
	"oneplusbbs.com": 1,
	
	"onetad.com": 1,
	
	"onfun.net": 1,
	
	"onlinedown.net": 1,
	
	"onlylady.com": 1,
	
	"oodii.com": 1,
	
	"oooggg.com": 1,
	
	"ooopic.com": 1,
	
	"open-open.com": 1,
	
	"operachina.com": 1,
	
	"ops.moe": 1,
	
	"optaim.com": 1,
	
	"or58.com": 1,
	
	"oranpage.com": 1,
	
	"oray.com": 1,
	
	"ordosggzyjy.com": 1,
	
	"orgcc.com": 1,
	
	"orsoon.com": 1,
	
	"oschina.io": 1,
	
	"oschina.net": 1,
	
	"ostudytour.com": 1,
	
	"otcms.com": 1,
	
	"otwan.com": 1,
	
	"oujiangrc.com": 1,
	
	"ourbloom.com": 1,
	
	"ourdvsss.com": 1,
	
	"ourgame.com": 1,
	
	"ourseo.net": 1,
	
	"ourxun.com": 1,
	
	"oussko.com": 1,
	
	"outlets365.com": 1,
	
	"ovodm.com": 1,
	
	"ozhibao.com": 1,
	
	"p-e-china.com": 1,
	
	"p2p110.com": 1,
	
	"p2p265.com": 1,
	
	"p2pchina.com": 1,
	
	"p2pfenhu.com": 1,
	
	"p2pxing.com": 1,
	
	"p5w.net": 1,
	
	"pafj.net": 1,
	
	"pageadmin.net": 1,
	
	"pagechoice.net": 1,
	
	"pahaoche.com": 1,
	
	"paidai.com": 1,
	
	"paipai.com": 1,
	
	"paipaiimg.com": 1,
	
	"paishoes.com": 1,
	
	"paixie.net": 1,
	
	"paljw.com": 1,
	
	"panda.tv": 1,
	
	"panduoduo.net": 1,
	
	"panduola.com": 1,
	
	"pangu.us": 1,
	
	"panguso.com": 1,
	
	"panjk.com": 1,
	
	"paochefang.com": 1,
	
	"paody.com": 1,
	
	"paopaoche.net": 1,
	
	"paopaoku.com": 1,
	
	"paoxue.com": 1,
	
	"paratong.com": 1,
	
	"patachina.org": 1,
	
	"paypal.com": 1,
	
	"paypalobjects.com": 1,
	
	"pazx888.com": 1,
	
	"pc186.com": 1,
	
	"pc3w.com": 1,
	
	"pc51.com": 1,
	
	"pc6.com": 1,
	
	"pc841.com": 1,
	
	"pcbeta.com": 1,
	
	"pchome.net": 1,
	
	"pcpc521.com": 1,
	
	"pcpop.com": 1,
	
	"pcwl.com": 1,
	
	"pcxxw.com": 1,
	
	"pdcicons.ml": 1,
	
	"pdhr.com": 1,
	
	"pdim.gs": 1,
	
	"pdsxww.com": 1,
	
	"pe168.com": 1,
	
	"pediy.com": 1,
	
	"peixun360.com": 1,
	
	"peixun5.com": 1,
	
	"peiyou.com": 1,
	
	"pengchengrc.com": 1,
	
	"pengfu.com": 1,
	
	"pengke.com": 1,
	
	"penglaiu.com": 1,
	
	"pengpeng.com": 1,
	
	"pengrc.com": 1,
	
	"pengyou.com": 1,
	
	"pengzerencai.com": 1,
	
	"pengzhou.tv": 1,
	
	"people258.com": 1,
	
	"peoplerail.com": 1,
	
	"pethr.com": 1,
	
	"petzp.com": 1,
	
	"pf168.com": 1,
	
	"pf178.com": 1,
	
	"pfwang.com": 1,
	
	"pgpop.com": 1,
	
	"pgzs.com": 1,
	
	"ph51.com": 1,
	
	"ph66.com": 1,
	
	"pharmjx.com": 1,
	
	"phedu.net": 1,
	
	"phoenixlzx.com": 1,
	
	"phoenixtv.com": 1,
	
	"phome.net": 1,
	
	"phonegap100.com": 1,
	
	"php100.com": 1,
	
	"phpchina.com": 1,
	
	"phpcomposer.com": 1,
	
	"phpwind.com": 1,
	
	"phpwind.net": 1,
	
	"piao.com": 1,
	
	"piaodown.com": 1,
	
	"piaoliang.com": 1,
	
	"picol.net": 1,
	
	"pimei.com": 1,
	
	"pincai.com": 1,
	
	"pinfengws.com": 1,
	
	"pingan.com": 1,
	
	"pinganfang.com": 1,
	
	"pinganhd.com": 1,
	
	"pinggu.org": 1,
	
	"pingguolv.com": 1,
	
	"pingnan.net": 1,
	
	"pingplusplus.com": 1,
	
	"pingshu8.com": 1,
	
	"pingtan597.com": 1,
	
	"pingtandao.com": 1,
	
	"pingwest.com": 1,
	
	"pingxiaow.com": 1,
	
	"pingxx.com": 1,
	
	"pingyin.cc": 1,
	
	"pinjie.cc": 1,
	
	"pinkecity.com": 1,
	
	"pinla.com": 1,
	
	"pinpai37.com": 1,
	
	"pinshan.com": 1,
	
	"pinyouc.com": 1,
	
	"pinzhituan.com": 1,
	
	"pipaw.com": 1,
	
	"pixlr.com": 1,
	
	"pizhou365.com": 1,
	
	"pjob.net": 1,
	
	"pjtime.com": 1,
	
	"pk38.com": 1,
	
	"pkzx.com": 1,
	
	"playubuntu.cn": 1,
	
	"pledu.net": 1,
	
	"plu.cn": 1,
	
	"plxww.com": 1,
	
	"pm91.com": 1,
	
	"pnol.net": 1,
	
	"pnwww.com": 1,
	
	"pnzpw.com": 1,
	
	"pod100.com": 1,
	
	"podinns.com": 1,
	
	"polyv.net": 1,
	
	"poobuy.com": 1,
	
	"pool.ntp.org": 1,
	
	"pop-fashion.com": 1,
	
	"pop136.com": 1,
	
	"pop800.com": 1,
	
	"popoho.com": 1,
	
	"popwan.com": 1,
	
	"powercdn.com": 1,
	
	"powereasy.net": 1,
	
	"pp.cc": 1,
	
	"pp6.cc": 1,
	
	"ppaaol.com": 1,
	
	"ppdai.com": 1,
	
	"ppkao.com": 1,
	
	"pplive.com": 1,
	
	"pppaaa.com": 1,
	
	"pps.tv": 1,
	
	"ppstream.com": 1,
	
	"ppsxx.com": 1,
	
	"pptv.com": 1,
	
	"ppwan.com": 1,
	
	"ppxmw.com": 1,
	
	"ppzhan.com": 1,
	
	"ppzhangui.com": 1,
	
	"ppzuche.com": 1,
	
	"prcedu.com": 1,
	
	"prestan.net": 1,
	
	"prnasia.com": 1,
	
	"psahz.com": 1,
	
	"psbc.com": 1,
	
	"pscjy.com": 1,
	
	"psjia.com": 1,
	
	"psnine.com": 1,
	
	"pstatp.com": 1,
	
	"psychcn.com": 1,
	
	"pszx.com": 1,
	
	"pt597.com": 1,
	
	"pt791.com": 1,
	
	"ptacn.com": 1,
	
	"ptbus.com": 1,
	
	"ptdao.com": 1,
	
	"pthl.net": 1,
	
	"ptjy.com": 1,
	
	"ptlogin2.qq.com": 1,
	
	"ptotour.com": 1,
	
	"ptpcp.com": 1,
	
	"puahome.com": 1,
	
	"pubmatic.com": 1,
	
	"pubone.cc": 1,
	
	"pubyun.com": 1,
	
	"puduw.org": 1,
	
	"puepu.com": 1,
	
	"puercn.com": 1,
	
	"puertea8.com": 1,
	
	"puerteaking.com": 1,
	
	"pumpbest.com": 1,
	
	"punchbox.org": 1,
	
	"pupuwang.com": 1,
	
	"purchasingbbs.com": 1,
	
	"pusa123.com": 1,
	
	"pusa365.com": 1,
	
	"putaomiaomu.com": 1,
	
	"putclub.com": 1,
	
	"puworld.com": 1,
	
	"pvc123.com": 1,
	
	"px020.com": 1,
	
	"px0769.com": 1,
	
	"px101.com": 1,
	
	"px58.com": 1,
	
	"px8.com": 1,
	
	"pxrczpw.com": 1,
	
	"py168.com": 1,
	
	"pybxfc.com": 1,
	
	"pybxrc.com": 1,
	
	"pyedu.cc": 1,
	
	"pyinfo.com": 1,
	
	"pyjia.com": 1,
	
	"pynet.net": 1,
	
	"pyr6.com": 1,
	
	"pyrc.net": 1,
	
	"pyspajs.com": 1,
	
	"pythonclub.org": 1,
	
	"pzoom.com": 1,
	
	"pzsh.com": 1,
	
	"pztuan.com": 1,
	
	"pzzc.net": 1,
	
	"pzzx.com": 1,
	
	"q1.com": 1,
	
	"q150.com": 1,
	
	"qa114.com": 1,
	
	"qbaobei.com": 1,
	
	"qbj.tv": 1,
	
	"qbox.me": 1,
	
	"qc188.com": 1,
	
	"qc6.com": 1,
	
	"qcloud.com": 1,
	
	"qcoco.com": 1,
	
	"qconbeijing.com": 1,
	
	"qcr.cc": 1,
	
	"qcrencai.com": 1,
	
	"qctester.com": 1,
	
	"qctsw.com": 1,
	
	"qcw114.com": 1,
	
	"qcwe.com": 1,
	
	"qcwgg.com": 1,
	
	"qcwz8.com": 1,
	
	"qdan.me": 1,
	
	"qdbeian.com": 1,
	
	"qdedu.net": 1,
	
	"qdfymr.com": 1,
	
	"qdhr.net": 1,
	
	"qdmama.net": 1,
	
	"qdmm.com": 1,
	
	"qdnrc.com": 1,
	
	"qdnrm.com": 1,
	
	"qdoulu.com": 1,
	
	"qdshuangjie.com": 1,
	
	"qdwenxue.com": 1,
	
	"qdzkb.com": 1,
	
	"qeecn.com": 1,
	
	"qeejoo.com": 1,
	
	"qeeyou.com": 1,
	
	"qegee.com": 1,
	
	"qeqeqe.com": 1,
	
	"qfang.com": 1,
	
	"qfzp.com": 1,
	
	"qgjxb.com": 1,
	
	"qgnews.net": 1,
	
	"qgny.net": 1,
	
	"qgyyzs.net": 1,
	
	"qhccw.com": 1,
	
	"qhcdn.com": 1,
	
	"qhcl.org": 1,
	
	"qhdcc.com": 1,
	
	"qhdnews.com": 1,
	
	"qhdxw.com": 1,
	
	"qhfx.org": 1,
	
	"qhgate.com": 1,
	
	"qhimg.com": 1,
	
	"qhinfo.com": 1,
	
	"qhjgj.com": 1,
	
	"qhldzb.com": 1,
	
	"qhlly.com": 1,
	
	"qhmed.com": 1,
	
	"qhmsg.com": 1,
	
	"qhnews.com": 1,
	
	"qhongfeng.com": 1,
	
	"qhres.com": 1,
	
	"qhsfgl.com": 1,
	
	"qhsrcw.com": 1,
	
	"qhswdx.com": 1,
	
	"qhsxnqcz.com": 1,
	
	"qhupdate.com": 1,
	
	"qhyedu.com": 1,
	
	"qhzk.com": 1,
	
	"qi-che.com": 1,
	
	"qiancheng100.com": 1,
	
	"qianggen.com": 1,
	
	"qianhuaweb.com": 1,
	
	"qianjia.com": 1,
	
	"qianjiangjob.com": 1,
	
	"qianlijob.com": 1,
	
	"qianlima.com": 1,
	
	"qianlong.com": 1,
	
	"qianlongnews.com": 1,
	
	"qianluntianxia.com": 1,
	
	"qiannianzhicheng.com": 1,
	
	"qianqian.com": 1,
	
	"qianqishou.com": 1,
	
	"qianqiuren.com": 1,
	
	"qianxs.com": 1,
	
	"qianyan.biz": 1,
	
	"qianyan001.com": 1,
	
	"qianyecao.com": 1,
	
	"qianzhan.com": 1,
	
	"qianzhengdaiban.com": 1,
	
	"qiaobutang.com": 1,
	
	"qiaopinche.com": 1,
	
	"qiaxing.com": 1,
	
	"qibosoft.com": 1,
	
	"qicaispace.com": 1,
	
	"qiche-china.com": 1,
	
	"qichetong.com": 1,
	
	"qicou.com": 1,
	
	"qidian.com": 1,
	
	"qieta.com": 1,
	
	"qihoo.com": 1,
	
	"qihucdn.com": 1,
	
	"qihuiwang.com": 1,
	
	"qikan.com": 1,
	
	"qikao.net": 1,
	
	"qilibali.com": 1,
	
	"qimbulak.com": 1,
	
	"qinbei.com": 1,
	
	"qincai.com": 1,
	
	"qincai.net": 1,
	
	"qincaitou.com": 1,
	
	"qingcloud.com": 1,
	
	"qingdaomedia.com": 1,
	
	"qingdaonews.com": 1,
	
	"qingdaozaixian.com": 1,
	
	"qinglanart.com": 1,
	
	"qinglian.org": 1,
	
	"qingmang.me": 1,
	
	"qingrenw.com": 1,
	
	"qingstor.com": 1,
	
	"qiniu.com": 1,
	
	"qiniucdn.com": 1,
	
	"qiniudn.com": 1,
	
	"qiniutek.com": 1,
	
	"qinqiner.com": 1,
	
	"qiongzhourc.com": 1,
	
	"qipaoxian.com": 1,
	
	"qipei001.com": 1,
	
	"qipei8.com": 1,
	
	"qipeiren.com": 1,
	
	"qipeizhan.com": 1,
	
	"qire123.com": 1,
	
	"qishanwang.com": 1,
	
	"qiugouxinxi.net": 1,
	
	"qiuhongfeng.com": 1,
	
	"qiushibaike.com": 1,
	
	"qiushibang.com": 1,
	
	"qiuxian.com": 1,
	
	"qiyefabu.com": 1,
	
	"qiyegu.com": 1,
	
	"qiyeku.com": 1,
	
	"qiyexxw.com": 1,
	
	"qiyi.com": 1,
	
	"qiyipic.com": 1,
	
	"qiyou.com": 1,
	
	"qiyouwang.com": 1,
	
	"qiyu360.com": 1,
	
	"qiyue.com": 1,
	
	"qiyukf.com": 1,
	
	"qizuang.com": 1,
	
	"qjrc.com": 1,
	
	"qjy168.com": 1,
	
	"qkfang.com": 1,
	
	"qlgaokao.com": 1,
	
	"qlmlxg.com": 1,
	
	"qlnew.com": 1,
	
	"qlogo.cn": 1,
	
	"qlrc.com": 1,
	
	"qlswu.com": 1,
	
	"qlteacher.com": 1,
	
	"qlzpw.com": 1,
	
	"qm120.com": 1,
	
	"qm988.com": 1,
	
	"qmango.com": 1,
	
	"qmyue.com": 1,
	
	"qnct.net": 1,
	
	"qndb.net": 1,
	
	"qnsb.com": 1,
	
	"qnssl.com": 1,
	
	"qooic.com": 1,
	
	"qoomoo.com": 1,
	
	"qopoo.com": 1,
	
	"qouoo.com": 1,
	
	"qp110.com": 1,
	
	"qp365.net": 1,
	
	"qphome.com": 1,
	
	"qpic.cn": 1,
	
	"qq.com": 1,
	
	"qq163.com": 1,
	
	"qq190.com": 1,
	
	"qq937.com": 1,
	
	"qqbaobao.com": 1,
	
	"qqbiaoqing.com": 1,
	
	"qqcyl.com": 1,
	
	"qqdcw.com": 1,
	
	"qqershou.com": 1,
	
	"qqfangke.com": 1,
	
	"qqgexingqianming.com": 1,
	
	"qqhryz.com": 1,
	
	"qqkqw.com": 1,
	
	"qqma.com": 1,
	
	"qqmail.com": 1,
	
	"qqpifu.com": 1,
	
	"qqqggg.com": 1,
	
	"qqqooo.com": 1,
	
	"qqtn.com": 1,
	
	"qqtouxiang.com": 1,
	
	"qqtu8.com": 1,
	
	"qqwangming.org": 1,
	
	"qqwm2014.com": 1,
	
	"qqwwr.com": 1,
	
	"qqxuan.net": 1,
	
	"qqyy.com": 1,
	
	"qqzl.cc": 1,
	
	"qqzssl.com": 1,
	
	"qqzyw.com": 1,
	
	"qqzzz.net": 1,
	
	"qstatic.com": 1,
	
	"qsztc.com": 1,
	
	"qtmojo.com": 1,
	
	"qtour.com": 1,
	
	"qu-zhou.com": 1,
	
	"qu114.com": 1,
	
	"qu247.com": 1,
	
	"qu97.com": 1,
	
	"quanguoyoubian.com": 1,
	
	"quanji.com": 1,
	
	"quanjing.com": 1,
	
	"quanjingke.com": 1,
	
	"quanjinglian.com": 1,
	
	"quanmama.com": 1,
	
	"quanranchina.com": 1,
	
	"quantone.com": 1,
	
	"quantserve.com": 1,
	
	"quanwangtz.com": 1,
	
	"quanzhi.com": 1,
	
	"qudao.com": 1,
	
	"qudao168.com": 1,
	
	"qudong.com": 1,
	
	"qufeizhou.com": 1,
	
	"qufenlei.com": 1,
	
	"quhua.com": 1,
	
	"qulv.com": 1,
	
	"quna.com": 1,
	
	"qunar.com": 1,
	
	"qunarzz.com": 1,
	
	"qupingche.com": 1,
	
	"qusu.org": 1,
	
	"qutouzi.com": 1,
	
	"quweiwu.com": 1,
	
	"quxiu.com": 1,
	
	"quzhouwang.com": 1,
	
	"qvbuy.com": 1,
	
	"qvod.com": 1,
	
	"qw168.com": 1,
	
	"qwjian.com": 1,
	
	"qx121.com": 1,
	
	"qx162.com": 1,
	
	"qx818.com": 1,
	
	"qxnzx.com": 1,
	
	"qxw.cc": 1,
	
	"qxw18.com": 1,
	
	"qxyou.com": 1,
	
	"qy6.com": 1,
	
	"qycn.com": 1,
	
	"qyedu.net": 1,
	
	"qyer.com": 1,
	
	"qyjpzx.com": 1,
	
	"qyjz.net": 1,
	
	"qymgc.com": 1,
	
	"qyzyw.com": 1,
	
	"qz123.com": 1,
	
	"qz597.com": 1,
	
	"qz828.com": 1,
	
	"qzbbs.com": 1,
	
	"qzcbs.com": 1,
	
	"qzedu.net": 1,
	
	"qzhxw.com": 1,
	
	"qzkj.net": 1,
	
	"qznews360.com": 1,
	
	"qzone.com": 1,
	
	"qzone.la": 1,
	
	"qzrcw.com": 1,
	
	"qzrczpw.com": 1,
	
	"qzshangwu.com": 1,
	
	"qzwb.com": 1,
	
	"qzzs.net": 1,
	
	"radiotj.com": 1,
	
	"railcn.net": 1,
	
	"rainbowsoft.org": 1,
	
	"rajyj.com": 1,
	
	"rakuten.co.jp": 1,
	
	"rangeretech.com": 1,
	
	"raoke.net": 1,
	
	"raorao.com": 1,
	
	"rayp.com": 1,
	
	"rc.cc": 1,
	
	"rc114.com": 1,
	
	"rc365.com": 1,
	
	"rc3721.com": 1,
	
	"rc392.com": 1,
	
	"rc536.com": 1,
	
	"rc86.net": 1,
	
	"rc929.com": 1,
	
	"rclawyer.com": 1,
	
	"rcwlm.com": 1,
	
	"rcxx.com": 1,
	
	"rczp.org": 1,
	
	"rdedu.net": 1,
	
	"readnovel.com": 1,
	
	"real.com": 1,
	
	"recycle366.com": 1,
	
	"redcross-sha.org": 1,
	
	"redidai.com": 1,
	
	"redocn.com": 1,
	
	"regishome.com": 1,
	
	"rencai.net": 1,
	
	"rencai5.com": 1,
	
	"rencaijob.com": 1,
	
	"rencailu.com": 1,
	
	"renren-inc.com": 1,
	
	"renren.com": 1,
	
	"renrendai.com": 1,
	
	"renrentou.com": 1,
	
	"renrenzhe.com": 1,
	
	"renrzx.com": 1,
	
	"renwen.com": 1,
	
	"renzheng.com": 1,
	
	"replays.net": 1,
	
	"retailstore.ai": 1,
	
	"rfchina.com": 1,
	
	"rfidchina.org": 1,
	
	"rht5.org": 1,
	
	"rhxj.com": 1,
	
	"right.com.cn": 1,
	
	"riridy.net": 1,
	
	"risfond.com": 1,
	
	"rishiqing.com": 1,
	
	"rkecloud.com": 1,
	
	"rkidc.net": 1,
	
	"rlcdn.com": 1,
	
	"rm0510.com": 1,
	
	"rmburl.com": 1,
	
	"roadoor.com": 1,
	
	"robam.com": 1,
	
	"roboo.com": 1,
	
	"robot-china.com": 1,
	
	"rohlan.biz": 1,
	
	"rohlan.com": 1,
	
	"rom.cn": 1,
	
	"rom.mk": 1,
	
	"rong360.com": 1,
	
	"rongchang.net": 1,
	
	"rongcloud.cn": 1,
	
	"rongjie360.com": 1,
	
	"rongshidai.com": 1,
	
	"rongshuxia.com": 1,
	
	"rootinhenan.com": 1,
	
	"roowei.com": 1,
	
	"rpjiaoyi.com": 1,
	
	"rr.tv": 1,
	
	"rrfmn.com": 1,
	
	"rrimg.com": 1,
	
	"rrmj.tv": 1,
	
	"rrs.com": 1,
	
	"rsc.org": 1,
	
	"rsqzs.com": 1,
	
	"rtbasia.com": 1,
	
	"rtbidder.net": 1,
	
	"rtsac.org": 1,
	
	"rtxapp.com": 1,
	
	"ruan8.com": 1,
	
	"ruanmei.com": 1,
	
	"ruanyifeng.com": 1,
	
	"rubberhr.com": 1,
	
	"rubcn.com": 1,
	
	"ruby-china.org": 1,
	
	"rugao35.com": 1,
	
	"ruian.com": 1,
	
	"ruiwen.com": 1,
	
	"ruixing.cc": 1,
	
	"ruixinlong.com": 1,
	
	"runhuayou.biz": 1,
	
	"runoob.com": 1,
	
	"runsky.com": 1,
	
	"rzrsrc.com": 1,
	
	"s-msn.com": 1,
	
	"s0593.com": 1,
	
	"s163.com": 1,
	
	"s1979.com": 1,
	
	"sa26.com": 1,
	
	"sae-china.org": 1,
	
	"safe10000.com": 1,
	
	"safecome.com": 1,
	
	"saicgroup.com": 1,
	
	"saifutong.com": 1,
	
	"saige.com": 1,
	
	"saimogroup.com": 1,
	
	"saiqu.com": 1,
	
	"samsung.com": 1,
	
	"sandai.net": 1,
	
	"sanginn.com": 1,
	
	"sanguosha.com": 1,
	
	"sanhaostreet.com": 1,
	
	"sankewang.com": 1,
	
	"sanqan.com": 1,
	
	"sanqin.com": 1,
	
	"sanqindaily.com": 1,
	
	"santudi.com": 1,
	
	"sanwen.net": 1,
	
	"sanyatour.com": 1,
	
	"sanygroup.com": 1,
	
	"sanyhi.com": 1,
	
	"sanyujixie.com": 1,
	
	"saraba1st.com": 1,
	
	"sarm.net": 1,
	
	"sasa123.com": 1,
	
	"sb.sb": 1,
	
	"sc-overseasinfo.net": 1,
	
	"sc157.com": 1,
	
	"sc2p.com": 1,
	
	"sc7.com": 1,
	
	"sc987.com": 1,
	
	"scaleb2b.com": 1,
	
	"scanscout.com": 1,
	
	"scanv.com": 1,
	
	"scbid.com": 1,
	
	"scbsm.com": 1,
	
	"sccnn.com": 1,
	
	"scdms.com": 1,
	
	"scedu.net": 1,
	
	"scetc.net": 1,
	
	"scfzw.net": 1,
	
	"scgckj.com": 1,
	
	"scgdj.com": 1,
	
	"scgh.org": 1,
	
	"scgrain.com": 1,
	
	"school51.com": 1,
	
	"schoolmy.com": 1,
	
	"sci99.com": 1,
	
	"sciencedirect.com": 1,
	
	"sciencemag.org": 1,
	
	"sciencenet.cn": 1,
	
	"scjks.net": 1,
	
	"sclf.org": 1,
	
	"sclib.org": 1,
	
	"scnjnews.com": 1,
	
	"scopen.net": 1,
	
	"scopus.com": 1,
	
	"scorecardresearch.com": 1,
	
	"scpolicec.com": 1,
	
	"scpspa.com": 1,
	
	"scpv.net": 1,
	
	"scrc168.com": 1,
	
	"screenb2b.com": 1,
	
	"scrtvu.net": 1,
	
	"sctv.com": 1,
	
	"scxcxj.com": 1,
	
	"scxfxj.com": 1,
	
	"scxlc.com": 1,
	
	"scxttj.com": 1,
	
	"scxyes.com": 1,
	
	"sczfcg.com": 1,
	
	"sczytv.com": 1,
	
	"sd001.com": 1,
	
	"sdcheshi.com": 1,
	
	"sdchina.com": 1,
	
	"sdcoop.com": 1,
	
	"sddjw.com": 1,
	
	"sddp.net": 1,
	
	"sdedu.net": 1,
	
	"sdenews.com": 1,
	
	"sdfdc.com": 1,
	
	"sdfqmm.com": 1,
	
	"sdg-china.com": 1,
	
	"sdgw.com": 1,
	
	"sdhltsp.com": 1,
	
	"sdhssy.com": 1,
	
	"sdinfo.net": 1,
	
	"sdjnnews.com": 1,
	
	"sdjob.com": 1,
	
	"sdjtcx.com": 1,
	
	"sdjxyj.net": 1,
	
	"sdlib.com": 1,
	
	"sdnycxzy.com": 1,
	
	"sdo.com": 1,
	
	"sdongnews.com": 1,
	
	"sdrc315.com": 1,
	
	"sdticai.com": 1,
	
	"sdtyjixie.net": 1,
	
	"sdwenhua.com": 1,
	
	"sdxhce.com": 1,
	
	"sdxiaohongxing.com": 1,
	
	"sdyjdz.net": 1,
	
	"seafang.com": 1,
	
	"seburi.com": 1,
	
	"see-say.com": 1,
	
	"seecq.com": 1,
	
	"seedit.com": 1,
	
	"seekic.com": 1,
	
	"seele.tech": 1,
	
	"seeyoo.cc": 1,
	
	"seezy.com": 1,
	
	"segahome.com": 1,
	
	"segmentfault.com": 1,
	
	"sendcloud.net": 1,
	
	"sendong.com": 1,
	
	"senmit.com": 1,
	
	"sensafish.com": 1,
	
	"sensorsdata.cn": 1,
	
	"sensorshome.com": 1,
	
	"seosrx.net": 1,
	
	"seowhy.com": 1,
	
	"sepu.net": 1,
	
	"serving-sys.com": 1,
	
	"sewworld.com": 1,
	
	"sf-express.com": 1,
	
	"sfacg.com": 1,
	
	"sflep.com": 1,
	
	"sg-rc.com": 1,
	
	"sg169.com": 1,
	
	"sg560.com": 1,
	
	"sg8.cc": 1,
	
	"sg91.net": 1,
	
	"sgamer.com": 1,
	
	"sge.sh": 1,
	
	"sgnet.cc": 1,
	
	"sgrcw.com": 1,
	
	"sgzjkj.com": 1,
	
	"sh-telue.com": 1,
	
	"sh021.cc": 1,
	
	"sh1188.com": 1,
	
	"sh1800.net": 1,
	
	"sh51766.com": 1,
	
	"sh7.com": 1,
	
	"sh91.com": 1,
	
	"sha-steel.com": 1,
	
	"shache.com": 1,
	
	"shafa.com": 1,
	
	"shanbay.com": 1,
	
	"shanchengrc.com": 1,
	
	"shandalu.com": 1,
	
	"shandongbeihai.com": 1,
	
	"shandongrc.com": 1,
	
	"shang360.com": 1,
	
	"shangbw.com": 1,
	
	"shangc.net": 1,
	
	"shangdianp.com": 1,
	
	"shangdu.com": 1,
	
	"shanghaigm.com": 1,
	
	"shanghaimuseum.net": 1,
	
	"shanghaining.com": 1,
	
	"shanghairc.com": 1,
	
	"shanghaitour.net": 1,
	
	"shanglin.net": 1,
	
	"shangmuguoji.com": 1,
	
	"shangpin.com": 1,
	
	"shangpusou.com": 1,
	
	"shangxiang.com": 1,
	
	"shangxueba.com": 1,
	
	"shangyici.com": 1,
	
	"shanhe.cc": 1,
	
	"shanxirc.com": 1,
	
	"shaoyangnews.net": 1,
	
	"shaoyoo.com": 1,
	
	"shaqing.com": 1,
	
	"shbtob.com": 1,
	
	"shcaoan.com": 1,
	
	"shccig.com": 1,
	
	"shchehang.com": 1,
	
	"shcnws.com": 1,
	
	"shdazao.com": 1,
	
	"shduer.com": 1,
	
	"she120.com": 1,
	
	"shechipin365.com": 1,
	
	"shedu.net": 1,
	
	"shedunews.com": 1,
	
	"shejiben.com": 1,
	
	"shejiqun.com": 1,
	
	"shejis.com": 1,
	
	"shenchuang.com": 1,
	
	"shendu.com": 1,
	
	"shenghuadg.com": 1,
	
	"shengpay.com": 1,
	
	"shengpet.com": 1,
	
	"shengqian.so": 1,
	
	"shengyidi.com": 1,
	
	"shengyijie.net": 1,
	
	"shengyuanguolv.com": 1,
	
	"shentoushi.top": 1,
	
	"shenzhenair.com": 1,
	
	"shenzhenhr.com": 1,
	
	"sherc.net": 1,
	
	"shexiannet.com": 1,
	
	"sheying8.com": 1,
	
	"shgao.com": 1,
	
	"shgjj.com": 1,
	
	"shhbm.com": 1,
	
	"shhkws.com": 1,
	
	"shholip.com": 1,
	
	"shibaili.com": 1,
	
	"shidi.org": 1,
	
	"shidz.com": 1,
	
	"shifenghk.com": 1,
	
	"shihuahr.com": 1,
	
	"shijiemil.com": 1,
	
	"shijue.me": 1,
	
	"shikezhi.com": 1,
	
	"shilehui.com": 1,
	
	"shilijiuxiang.com": 1,
	
	"shiliunet.com": 1,
	
	"shimo.im": 1,
	
	"shionry.com": 1,
	
	"shipin588.com": 1,
	
	"shipinzhuchi.com": 1,
	
	"shippingchina.com": 1,
	
	"shiqian.tv": 1,
	
	"shiwan.com": 1,
	
	"shixian.com": 1,
	
	"shiyan.cc": 1,
	
	"shiyanlou.com": 1,
	
	"shiyongjun.biz": 1,
	
	"shiyouhr.com": 1,
	
	"shjmnc.com": 1,
	
	"shjtaq.com": 1,
	
	"shkss.com": 1,
	
	"shlicang.com": 1,
	
	"shlkjdyxgs.com": 1,
	
	"shlll.net": 1,
	
	"shmcws.com": 1,
	
	"shmds-edu.com": 1,
	
	"shmet.com": 1,
	
	"shmmw.com": 1,
	
	"shmould.org": 1,
	
	"shoeshr.com": 1,
	
	"shonsh.com": 1,
	
	"shopin.net": 1,
	
	"shouduhr.com": 1,
	
	"shoudurc.com": 1,
	
	"shoudurx.com": 1,
	
	"shouji.com": 1,
	
	"shouliwang.com": 1,
	
	"shoutao.biz": 1,
	
	"shouyao8.com": 1,
	
	"shouyou.com": 1,
	
	"shouyou520.com": 1,
	
	"shouyoubus.com": 1,
	
	"shouyoucdn.com": 1,
	
	"shouyoutv.com": 1,
	
	"shouyouzhijia.net": 1,
	
	"show160.com": 1,
	
	"showchina.org": 1,
	
	"showhua.com": 1,
	
	"showji.com": 1,
	
	"shrongtai.com": 1,
	
	"shsti.com": 1,
	
	"shsunedu.com": 1,
	
	"shtour.org": 1,
	
	"shuajizhijia.net": 1,
	
	"shuame.com": 1,
	
	"shuanghui.net": 1,
	
	"shucai001.com": 1,
	
	"shufa.com": 1,
	
	"shufa.org": 1,
	
	"shuguocn.com": 1,
	
	"shuhai.com": 1,
	
	"shuichan.cc": 1,
	
	"shuichan51.com": 1,
	
	"shuigongye.com": 1,
	
	"shuiguo.com": 1,
	
	"shuiniaoticket.com": 1,
	
	"shuiw114.com": 1,
	
	"shunwang.com": 1,
	
	"shuoba.org": 1,
	
	"shuobao.com": 1,
	
	"shuren100.com": 1,
	
	"shushi100.com": 1,
	
	"shuzixiaoyuan.com": 1,
	
	"shuzixiaoyuan.org": 1,
	
	"shwsdp.com": 1,
	
	"shxb.net": 1,
	
	"shxbe.com": 1,
	
	"shxdx.com": 1,
	
	"shynws.net": 1,
	
	"shyuzhi.net": 1,
	
	"shyywz.com": 1,
	
	"shzfzz.net": 1,
	
	"shzgh.org": 1,
	
	"si.kz": 1,
	
	"si114.com": 1,
	
	"sichuanrc.com": 1,
	
	"sidelianghang.com": 1,
	
	"sihongbbs.com": 1,
	
	"siilu.com": 1,
	
	"sijihf.com": 1,
	
	"siliaojixie.com": 1,
	
	"silverlightchina.net": 1,
	
	"simwe.com": 1,
	
	"sina.cn": 1,
	
	"sina.com": 1,
	
	"sina.com.cn": 1,
	
	"sina.net": 1,
	
	"sinaapp.com": 1,
	
	"sinaedge.com": 1,
	
	"sinahk.net": 1,
	
	"sinaimg.cn": 1,
	
	"sinaimg.com": 1,
	
	"sinajs.cn": 1,
	
	"sinajs.com": 1,
	
	"since1989.org": 1,
	
	"singbon.com": 1,
	
	"single6.net": 1,
	
	"sinmv.com": 1,
	
	"sino-gas.com": 1,
	
	"sino-manager.com": 1,
	
	"sinocars.com": 1,
	
	"sinochem.com": 1,
	
	"sinochemoil.com": 1,
	
	"sinoef.com": 1,
	
	"sinohydro.com": 1,
	
	"sinolub.com": 1,
	
	"sinopec.com": 1,
	
	"sinopecgroup.com": 1,
	
	"sinopharm.com": 1,
	
	"sinopipenet.com": 1,
	
	"sinosig.com": 1,
	
	"sinoss.net": 1,
	
	"sinosteel.com": 1,
	
	"sinotf.com": 1,
	
	"sinotrans-csc.com": 1,
	
	"sinotrans.com": 1,
	
	"sirenji.com": 1,
	
	"sisdown.com": 1,
	
	"sissiok.com": 1,
	
	"sitall.net": 1,
	
	"siyuefeng.com": 1,
	
	"sj998.com": 1,
	
	"sjapk.com": 1,
	
	"sjdfgl.com": 1,
	
	"sjfzxm.com": 1,
	
	"sjhl.cc": 1,
	
	"sjjob88.com": 1,
	
	"sjjy0738.com": 1,
	
	"sjtinfo.com": 1,
	
	"sjwg.com": 1,
	
	"sjwj.com": 1,
	
	"sjwyx.com": 1,
	
	"sjxyx.com": 1,
	
	"sjyzc.net": 1,
	
	"sjz.cc": 1,
	
	"sjzcity.com": 1,
	
	"sjzland.com": 1,
	
	"sjzonline.com": 1,
	
	"sjzyxh.com": 1,
	
	"skinpp.com": 1,
	
	"sksnc.com": 1,
	
	"skxox.com": 1,
	
	"skycn.com": 1,
	
	"skyworth.com": 1,
	
	"slaili.com": 1,
	
	"sljob88.com": 1,
	
	"sljyj.com": 1,
	
	"slrbs.com": 1,
	
	"slstm.com": 1,
	
	"sm.ms": 1,
	
	"sm160.com": 1,
	
	"sm597.com": 1,
	
	"smart2pay.com": 1,
	
	"smartgslb.com": 1,
	
	"smartisan.com": 1,
	
	"smartjx.com": 1,
	
	"smecq.com": 1,
	
	"smedu.org": 1,
	
	"smejs.com": 1,
	
	"smestar.com": 1,
	
	"smforestry.com": 1,
	
	"smhzs.com": 1,
	
	"smjy.net": 1,
	
	"smrcw.com": 1,
	
	"smswike.com": 1,
	
	"smtcdns.com": 1,
	
	"smvtc.com": 1,
	
	"smweekly.com": 1,
	
	"smwrc.com": 1,
	
	"smzdm.com": 1,
	
	"smzy.com": 1,
	
	"snai.edu": 1,
	
	"snail.com": 1,
	
	"snda.com": 1,
	
	"sndhr.com": 1,
	
	"sneac.com": 1,
	
	"snedu.com": 1,
	
	"snfox.com": 1,
	
	"snjt.com": 1,
	
	"snrtv.com": 1,
	
	"snsyedu.com": 1,
	
	"snupg.com": 1,
	
	"snyu.com": 1,
	
	"snzhao.com": 1,
	
	"so.com": 1,
	
	"soautos.com": 1,
	
	"sobot.com": 1,
	
	"socang.com": 1,
	
	"soche8.com": 1,
	
	"sodao.com": 1,
	
	"sodu.org": 1,
	
	"sofang.com": 1,
	
	"soft515.com": 1,
	
	"soft6.com": 1,
	
	"soft711.com": 1,
	
	"softbar.com": 1,
	
	"sogou.com": 1,
	
	"sogoucdn.com": 1,
	
	"sogua.com": 1,
	
	"sohu.com": 1,
	
	"sohu.net": 1,
	
	"sohucs.com": 1,
	
	"sohusce.com": 1,
	
	"sojiang.com": 1,
	
	"sojike.com": 1,
	
	"sojump.com": 1,
	
	"soku.com": 1,
	
	"solarbe.com": 1,
	
	"solidot.org": 1,
	
	"somenmian.com": 1,
	
	"songshuhui.net": 1,
	
	"sonhoo.com": 1,
	
	"soocang.com": 1,
	
	"sooker.com": 1,
	
	"sooopin.com": 1,
	
	"sooshong.com": 1,
	
	"sootoo.com": 1,
	
	"sooxue.com": 1,
	
	"soozhu.com": 1,
	
	"soperson.com": 1,
	
	"sortdoor.com": 1,
	
	"soso.com": 1,
	
	"sosoo.net": 1,
	
	"sososteel.com": 1,
	
	"sosw.net": 1,
	
	"soubaoad.com": 1,
	
	"soucai.com": 1,
	
	"souchebang.com": 1,
	
	"soufun.com": 1,
	
	"soufunimg.com": 1,
	
	"souge.cc": 1,
	
	"soupei360.com": 1,
	
	"soupu.com": 1,
	
	"souqian.com": 1,
	
	"sourceforge.net": 1,
	
	"southcn.com": 1,
	
	"southmoney.com": 1,
	
	"soutudi.com": 1,
	
	"soutudi.so": 1,
	
	"souxuexiao.com": 1,
	
	"souyi.cc": 1,
	
	"sowang.com": 1,
	
	"soxsok.com": 1,
	
	"soyuli.com": 1,
	
	"sozhen.com": 1,
	
	"sp0312.com": 1,
	
	"spacechina.com": 1,
	
	"spcce.com": 1,
	
	"spdl.com": 1,
	
	"speedtest.net": 1,
	
	"speiyou.com": 1,
	
	"spjixie.com": 1,
	
	"spjobhr.com": 1,
	
	"spjxcn.com": 1,
	
	"sportscn.com": 1,
	
	"springtour.com": 1,
	
	"spsb114.com": 1,
	
	"spzs.com": 1,
	
	"sq1996.com": 1,
	
	"sqjg.net": 1,
	
	"sqzg.com": 1,
	
	"sqzx.org": 1,
	
	"srcdd.com": 1,
	
	"srtong.com": 1,
	
	"srxww.com": 1,
	
	"srzc.com": 1,
	
	"ss256.com": 1,
	
	"sscmwl.com": 1,
	
	"ssfun.com": 1,
	
	"sshr.net": 1,
	
	"ssjy.net": 1,
	
	"ssjzw.com": 1,
	
	"sslibrary.com": 1,
	
	"sspai.com": 1,
	
	"ssqzj.com": 1,
	
	"ssrcsc.com": 1,
	
	"ssreader.com": 1,
	
	"sssggg.com": 1,
	
	"sssjhw.com": 1,
	
	"sssuuu.com": 1,
	
	"ssswh.com": 1,
	
	"sswoo.com": 1,
	
	"st001.com": 1,
	
	"st5.com": 1,
	
	"standardcn.com": 1,
	
	"starbaby.cc": 1,
	
	"starbaby.com": 1,
	
	"stargame.com": 1,
	
	"starlott.com": 1,
	
	"staticfile.org": 1,
	
	"staticsdo.com": 1,
	
	"stcn.com": 1,
	
	"stdaily.com": 1,
	
	"steamcn.com": 1,
	
	"stedu.net": 1,
	
	"steelphone.com": 1,
	
	"stnts.com": 1,
	
	"stockstar.com": 1,
	
	"stone.tm": 1,
	
	"stone365.com": 1,
	
	"stonebuy.com": 1,
	
	"stonemsn.com": 1,
	
	"stonesm.com": 1,
	
	"stonexp.com": 1,
	
	"strong-imm.com": 1,
	
	"strong-study.com": 1,
	
	"sttlbb.com": 1,
	
	"studentboss.com": 1,
	
	"studydao.com": 1,
	
	"studyems.com": 1,
	
	"studyez.com": 1,
	
	"studyget.com": 1,
	
	"studygolang.com": 1,
	
	"studyie.com": 1,
	
	"studyma.com": 1,
	
	"studynl.com": 1,
	
	"studysg.com": 1,
	
	"suaee.com": 1,
	
	"suanpi.com": 1,
	
	"subaonet.com": 1,
	
	"sucaitianxia.com": 1,
	
	"sudasuta.com": 1,
	
	"suedu.net": 1,
	
	"suiw.org": 1,
	
	"suizhoujie.com": 1,
	
	"sulyxin.com": 1,
	
	"sun0758.com": 1,
	
	"sun0769.com": 1,
	
	"sunily.com": 1,
	
	"suning.com": 1,
	
	"sunkf.net": 1,
	
	"sunlands.com": 1,
	
	"sunmen.com": 1,
	
	"sunnychina.com": 1,
	
	"sunplusedu.com": 1,
	
	"sunrise-china.com": 1,
	
	"sunsirs.com": 1,
	
	"sunstu.com": 1,
	
	"sunyeabiz.com": 1,
	
	"suohoo.com": 1,
	
	"supei.com": 1,
	
	"superlib.net": 1,
	
	"supfree.net": 1,
	
	"susong51.com": 1,
	
	"sutoo.com": 1,
	
	"suwurc.com": 1,
	
	"suxiege.com": 1,
	
	"suyuedu.com": 1,
	
	"suzhou.cc": 1,
	
	"suzhourc.com": 1,
	
	"suzo.cc": 1,
	
	"svisa.com": 1,
	
	"swapteam.cn": 1,
	
	"swchina.org": 1,
	
	"swjoy.com": 1,
	
	"swkong.com": 1,
	
	"swwenshi.com": 1,
	
	"sx597.com": 1,
	
	"sxac.com": 1,
	
	"sxbjedu.com": 1,
	
	"sxcm.net": 1,
	
	"sxcoal.com": 1,
	
	"sxdygbjy.com": 1,
	
	"sxfsw.com": 1,
	
	"sxfyxh.com": 1,
	
	"sxif.net": 1,
	
	"sxinfo.net": 1,
	
	"sxjzwb.com": 1,
	
	"sxkp.com": 1,
	
	"sxly.org": 1,
	
	"sxmtxs.com": 1,
	
	"sxncb.com": 1,
	
	"sxny.net": 1,
	
	"sxpmg.com": 1,
	
	"sxpta.com": 1,
	
	"sxrb.com": 1,
	
	"sxri.net": 1,
	
	"sxrtv.com": 1,
	
	"sxrtvu.edu": 1,
	
	"sxsedu.net": 1,
	
	"sxshealth.com": 1,
	
	"sxsme.com": 1,
	
	"sxsznews.com": 1,
	
	"sxtdrn.com": 1,
	
	"sxtour.com": 1,
	
	"sxtvs.com": 1,
	
	"sxvieworld.com": 1,
	
	"sxworker.com": 1,
	
	"sxxfqjyj.com": 1,
	
	"sxxl.com": 1,
	
	"sxxw.net": 1,
	
	"sxycpc.com": 1,
	
	"sxycrb.com": 1,
	
	"sxyhq.com": 1,
	
	"sxykmgy.com": 1,
	
	"sy3688.com": 1,
	
	"syb365.com": 1,
	
	"sybang.com": 1,
	
	"syflowers.com": 1,
	
	"syhouse.net": 1,
	
	"syingrc.com": 1,
	
	"syiptv.com": 1,
	
	"syj.com": 1,
	
	"syjiancai.com": 1,
	
	"symama.com": 1,
	
	"syqnr.com": 1,
	
	"syrcsc.com": 1,
	
	"syrcw.net": 1,
	
	"syrczpw.com": 1,
	
	"sytlw.com": 1,
	
	"syxwnet.com": 1,
	
	"syyx.com": 1,
	
	"syzxsx.net": 1,
	
	"sz121.com": 1,
	
	"szaibite.com": 1,
	
	"szbaws.com": 1,
	
	"szcchy56.com": 1,
	
	"szdagao.com": 1,
	
	"szdfsk.com": 1,
	
	"szdwyy.com": 1,
	
	"szeat.net": 1,
	
	"szedu.com": 1,
	
	"szedu.net": 1,
	
	"szehs.com": 1,
	
	"szfa.com": 1,
	
	"szfcol.com": 1,
	
	"szffmr.com": 1,
	
	"szfthp.com": 1,
	
	"szfw.org": 1,
	
	"szhfdq.com": 1,
	
	"szhk.com": 1,
	
	"szhome.com": 1,
	
	"szhua.com": 1,
	
	"szhufu.com": 1,
	
	"szjc8.com": 1,
	
	"szlyw12306.com": 1,
	
	"szmall.com": 1,
	
	"szmama.com": 1,
	
	"szmj.com": 1,
	
	"szmolds.com": 1,
	
	"sznews.com": 1,
	
	"szol.net": 1,
	
	"szonline.net": 1,
	
	"szooo.com": 1,
	
	"szpxb.com": 1,
	
	"szpxe.com": 1,
	
	"szqcw.com": 1,
	
	"szsanshang.com": 1,
	
	"szsmw.com": 1,
	
	"szsnews.com": 1,
	
	"szsti.net": 1,
	
	"sztjyy.com": 1,
	
	"szwudao.com": 1,
	
	"szyc.com": 1,
	
	"szykj.net": 1,
	
	"szzfgjj.com": 1,
	
	"t.tt": 1,
	
	"t0001.com": 1,
	
	"t0376.com": 1,
	
	"t139.com": 1,
	
	"t262.com": 1,
	
	"t55.com": 1,
	
	"t56.net": 1,
	
	"t960.com": 1,
	
	"tabanjia.net": 1,
	
	"tahjlg.com": 1,
	
	"tahongyuan.com": 1,
	
	"taian.com": 1,
	
	"taidu8.com": 1,
	
	"taihainet.com": 1,
	
	"taihexian.com": 1,
	
	"taikang.com": 1,
	
	"tainfo.net": 1,
	
	"taiqiedu.com": 1,
	
	"taishansong.com": 1,
	
	"taiwandao.org": 1,
	
	"taiwandao.tw": 1,
	
	"taizhou.com": 1,
	
	"tajd.net": 1,
	
	"takungpao.com": 1,
	
	"takungpao.com.hk": 1,
	
	"talyys.com": 1,
	
	"tangdou.com": 1,
	
	"tangjiu.com": 1,
	
	"tangongye.com": 1,
	
	"tantuw.com": 1,
	
	"tanx.com": 1,
	
	"tao123.com": 1,
	
	"taobao.com": 1,
	
	"taobaocdn.com": 1,
	
	"taoche.com": 1,
	
	"taoche100.com": 1,
	
	"taoci.com": 1,
	
	"taoci163.com": 1,
	
	"taocijob.com": 1,
	
	"taodake.com": 1,
	
	"taofang.com": 1,
	
	"taofen8.com": 1,
	
	"taohuren.com": 1,
	
	"taojindi.com": 1,
	
	"taojinji.com": 1,
	
	"taoke.com": 1,
	
	"taoktv.com": 1,
	
	"taolv365.com": 1,
	
	"taopic.com": 1,
	
	"taoren100.com": 1,
	
	"taoshouyou.com": 1,
	
	"taotaocar.com": 1,
	
	"taowo2sc.com": 1,
	
	"taoxiao.com": 1,
	
	"taoxie.com": 1,
	
	"taoxue.com": 1,
	
	"taoxuexiao.com": 1,
	
	"tapebuy.com": 1,
	
	"taqc.net": 1,
	
	"tarkett1872.com": 1,
	
	"tasjpf.com": 1,
	
	"taskcn.com": 1,
	
	"tatamr.com": 1,
	
	"tatazx.com": 1,
	
	"tatbsb.com": 1,
	
	"taxfls.com": 1,
	
	"tayffdb.com": 1,
	
	"tbankw.com": 1,
	
	"tbcache.com": 1,
	
	"tbcdn.cn": 1,
	
	"tbscache.com": 1,
	
	"tcdai.com": 1,
	
	"tcgimg.com": 1,
	
	"tcl.com": 1,
	
	"tcnews.cc": 1,
	
	"tcpjw.com": 1,
	
	"tcrcsc.com": 1,
	
	"tcrczpw.com": 1,
	
	"tcxw.cc": 1,
	
	"tczx.net": 1,
	
	"tdfcw.com": 1,
	
	"tdimg.com": 1,
	
	"tdycr.com": 1,
	
	"tdycw.com": 1,
	
	"tdzyw.com": 1,
	
	"te6.com": 1,
	
	"tea160.com": 1,
	
	"tea846.com": 1,
	
	"teachercn.com": 1,
	
	"teambition.com": 1,
	
	"teambition.net": 1,
	
	"teambuy.cc": 1,
	
	"teauo.com": 1,
	
	"tech-food.com": 1,
	
	"tech110.net": 1,
	
	"techan.com": 1,
	
	"techanzhan.com": 1,
	
	"teeqee.com": 1,
	
	"telecomhr.com": 1,
	
	"tencent.com": 1,
	
	"tencentmind.com": 1,
	
	"tengfang.net": 1,
	
	"tenpay.com": 1,
	
	"tentrue.com": 1,
	
	"tenxcloud.com": 1,
	
	"tesehunan.com": 1,
	
	"testrust.com": 1,
	
	"tex68.com": 1,
	
	"texrc.net": 1,
	
	"texu1.com": 1,
	
	"tezgc.com": 1,
	
	"tezhongzhuangbei.com": 1,
	
	"tfol.com": 1,
	
	"tfysw.com": 1,
	
	"tgbus.com": 1,
	
	"tgnet.com": 1,
	
	"thawte.com": 1,
	
	"the9.com": 1,
	
	"thebeijingnews.com": 1,
	
	"thepaper.cn": 1,
	
	"theplanet.com": 1,
	
	"thethirdmedia.com": 1,
	
	"thinkphp.cn": 1,
	
	"thmz.com": 1,
	
	"tianan-cyber.com": 1,
	
	"tiancity.com": 1,
	
	"tiandaoedu.com": 1,
	
	"tianfus.com": 1,
	
	"tianji.com": 1,
	
	"tianjihr.com": 1,
	
	"tianjimedia.com": 1,
	
	"tianjinrc.com": 1,
	
	"tianjinwe.com": 1,
	
	"tianqi.com": 1,
	
	"tianshannet.com": 1,
	
	"tianshanrc.com": 1,
	
	"tiantian.com": 1,
	
	"tianxia70.com": 1,
	
	"tianya.cn": 1,
	
	"tianya168.net": 1,
	
	"tianyablog.com": 1,
	
	"tianyaui.com": 1,
	
	"tianyuimg.com": 1,
	
	"tiao8.info": 1,
	
	"tiaohao.com": 1,
	
	"tibet3.com": 1,
	
	"tibetcn.com": 1,
	
	"tibetcul.com": 1,
	
	"tibetculture.net": 1,
	
	"tibetinfor.com": 1,
	
	"tiekuangshi.com": 1,
	
	"tielingcn.com": 1,
	
	"tieliren.net": 1,
	
	"tielu.org": 1,
	
	"tietuku.com": 1,
	
	"tiexue.net": 1,
	
	"tieyou.com": 1,
	
	"tigercity.net": 1,
	
	"tigerlust.com": 1,
	
	"tigtag.com": 1,
	
	"timedg.com": 1,
	
	"tingbook.com": 1,
	
	"tingclass.net": 1,
	
	"tingroom.com": 1,
	
	"tingyun.com": 1,
	
	"titan24.com": 1,
	
	"tjbhnews.com": 1,
	
	"tjfic.com": 1,
	
	"tjkx.com": 1,
	
	"tjmama.com": 1,
	
	"tjmsgk.com": 1,
	
	"tjwang.net": 1,
	
	"tjxqjy.com": 1,
	
	"tjysyjs.com": 1,
	
	"tkw.cc": 1,
	
	"tl100.com": 1,
	
	"tlfw.net": 1,
	
	"tmall.com": 1,
	
	"tmcdn.net": 1,
	
	"tmhtour.com": 1,
	
	"tmjob88.com": 1,
	
	"tmsf.com": 1,
	
	"tmtpost.com": 1,
	
	"to8to.com": 1,
	
	"tobaccochina.com": 1,
	
	"tobosu.com": 1,
	
	"tobosu.net": 1,
	
	"tochgo.com": 1,
	
	"todayonhistory.com": 1,
	
	"togogo.net": 1,
	
	"togoo.com": 1,
	
	"toioo.com": 1,
	
	"tom.com": 1,
	
	"tom365.com": 1,
	
	"tom61.com": 1,
	
	"tomdurrie.com": 1,
	
	"tomonline-inc.com": 1,
	
	"tompda.com": 1,
	
	"tongbai8.com": 1,
	
	"tongbu.com": 1,
	
	"tongde.com": 1,
	
	"tongleilive.com": 1,
	
	"tongliaowang.com": 1,
	
	"tonglingjob.com": 1,
	
	"tonglukuaijian.com": 1,
	
	"tongrenshi.com": 1,
	
	"tongxiehui.net": 1,
	
	"tongxue8.com": 1,
	
	"tongye.biz": 1,
	
	"tongyu800.com": 1,
	
	"tongzhuo100.com": 1,
	
	"tonong.com": 1,
	
	"toobiao.com": 1,
	
	"toobm.com": 1,
	
	"toocle.com": 1,
	
	"toofloor.com": 1,
	
	"toojj.com": 1,
	
	"tool.lu": 1,
	
	"toolsky.com": 1,
	
	"tooopen.com": 1,
	
	"tootour.com": 1,
	
	"topfo.com": 1,
	
	"topnews9.com": 1,
	
	"topsage.com": 1,
	
	"topu.com": 1,
	
	"topzj.com": 1,
	
	"tordax.com": 1,
	
	"totob.com": 1,
	
	"totocn.com": 1,
	
	"totolink.cn": 1,
	
	"touclick.com": 1,
	
	"tourjob.net": 1,
	
	"tourunion.com": 1,
	
	"tourzj.com": 1,
	
	"toushibao.com": 1,
	
	"toutiao.com": 1,
	
	"toutiao.io": 1,
	
	"touzhijia.com": 1,
	
	"tower.im": 1,
	
	"toybaba.com": 1,
	
	"toysbaba.com": 1,
	
	"toysgu.com": 1,
	
	"tozao.com": 1,
	
	"tplogin.cn": 1,
	
	"tpooo.com": 1,
	
	"tprtc.com": 1,
	
	"tpzj.com": 1,
	
	"tqedu.com": 1,
	
	"tqedu.net": 1,
	
	"tqkaoyan.com": 1,
	
	"tqmba.com": 1,
	
	"tqmpacc.com": 1,
	
	"tqschool.net": 1,
	
	"tqznedu.com": 1,
	
	"trade2cn.com": 1,
	
	"tranbbs.com": 1,
	
	"trancn.com": 1,
	
	"transfer.sh": 1,
	
	"transrush.com": 1,
	
	"travelsky.com": 1,
	
	"tremormedia.com": 1,
	
	"trip8080.com": 1,
	
	"tripbaba.com": 1,
	
	"tripc.net": 1,
	
	"tripsz.net": 1,
	
	"trjcn.com": 1,
	
	"trmhw.com": 1,
	
	"trueland.net": 1,
	
	"truevue.org": 1,
	
	"trustexporter.com": 1,
	
	"trustutn.org": 1,
	
	"tryine.com": 1,
	
	"trylist.com": 1,
	
	"tsinghua-sz.net": 1,
	
	"tsingming.com": 1,
	
	"tsqyxxw.com": 1,
	
	"tsrcw.com": 1,
	
	"tswybjgs.com": 1,
	
	"tt-ly.com": 1,
	
	"tt0760.com": 1,
	
	"tt268.com": 1,
	
	"tt65.net": 1,
	
	"tteb.com": 1,
	
	"ttedu.org": 1,
	
	"tthonghuo.com": 1,
	
	"ttkdex.com": 1,
	
	"ttmam.com": 1,
	
	"ttmeishi.com": 1,
	
	"ttmn.com": 1,
	
	"ttpet.com": 1,
	
	"ttplayer.com": 1,
	
	"ttpod.com": 1,
	
	"ttt.tt": 1,
	
	"ttteee.com": 1,
	
	"ttyl5.com": 1,
	
	"ttys5.com": 1,
	
	"ttzcw.com": 1,
	
	"tu50.com": 1,
	
	"tuan800.com": 1,
	
	"tuan800.net": 1,
	
	"tuanche.com": 1,
	
	"tuanimg.com": 1,
	
	"tuanjiebao.com": 1,
	
	"tuanshan.net": 1,
	
	"tuanweihui.com": 1,
	
	"tuboshu.com": 1,
	
	"tuchw.com": 1,
	
	"tudinet.com": 1,
	
	"tudou.com": 1,
	
	"tudouui.com": 1,
	
	"tugao.com": 1,
	
	"tui18.com": 1,
	
	"tuiant.com": 1,
	
	"tuicool.com": 1,
	
	"tuifu.net": 1,
	
	"tuitui99.com": 1,
	
	"tujia.com": 1,
	
	"tuku.cc": 1,
	
	"tuku.com": 1,
	
	"tulaomao.net": 1,
	
	"tulaoshi.com": 1,
	
	"tuliu.com": 1,
	
	"tulvzu.com": 1,
	
	"tumanduo.com": 1,
	
	"tuna.moe": 1,
	
	"tuniu.com": 1,
	
	"tuniucdn.com": 1,
	
	"tunliu588.com": 1,
	
	"tuofubao.com": 1,
	
	"tuohuangzu.com": 1,
	
	"tuoliji.net": 1,
	
	"tuoxian.net": 1,
	
	"tupianzj.com": 1,
	
	"tutechanw.com": 1,
	
	"tutu66.com": 1,
	
	"tuwan.com": 1,
	
	"tv189.com": 1,
	
	"tvb.me": 1,
	
	"tvhf.com": 1,
	
	"tvhuan.com": 1,
	
	"tvscn.com": 1,
	
	"tvsou.com": 1,
	
	"twcczhu.com": 1,
	
	"twwtn.com": 1,
	
	"tx96345.com": 1,
	
	"txdai.com": 1,
	
	"txjly.com": 1,
	
	"txooo.com": 1,
	
	"txssw.com": 1,
	
	"txtbbs.com": 1,
	
	"txthinking.com": 1,
	
	"txwb.com": 1,
	
	"txwm.com": 1,
	
	"ty360.com": 1,
	
	"tybaba.com": 1,
	
	"tyhr.com": 1,
	
	"tylvyouw.com": 1,
	
	"tyn.cc": 1,
	
	"tz0852.com": 1,
	
	"tz121.com": 1,
	
	"tz1288.com": 1,
	
	"tz2car.com": 1,
	
	"tz911.com": 1,
	
	"tz94.com": 1,
	
	"tzcz.com": 1,
	
	"tzedu.org": 1,
	
	"tzfdc.com": 1,
	
	"tzhledu.net": 1,
	
	"tzhr.com": 1,
	
	"tzinfo.net": 1,
	
	"tzjob.com": 1,
	
	"tzkd.com": 1,
	
	"tzrc.com": 1,
	
	"tzrl.com": 1,
	
	"tzzfcg.com": 1,
	
	"tzzp.com": 1,
	
	"u-start.net": 1,
	
	"u009.com": 1,
	
	"u0762.com": 1,
	
	"u148.net": 1,
	
	"u17.com": 1,
	
	"u520.net": 1,
	
	"u69cn.com": 1,
	
	"u88.com": 1,
	
	"u8k8.com": 1,
	
	"u9time.com": 1,
	
	"u9u9.com": 1,
	
	"u9yoyo.com": 1,
	
	"ubuntu.com": 1,
	
	"ubuntu.org.cn": 1,
	
	"uc108.com": 1,
	
	"uc129.com": 1,
	
	"ucjoy.com": 1,
	
	"uctrac.com": 1,
	
	"uehtml.com": 1,
	
	"uemap.com": 1,
	
	"ufangw.com": 1,
	
	"uggd.com": 1,
	
	"uhaidao.com": 1,
	
	"uhenan.com": 1,
	
	"uimaker.com": 1,
	
	"uisdc.com": 1,
	
	"ujian.cc": 1,
	
	"ujob138.com": 1,
	
	"ujob360.com": 1,
	
	"ukecy.com": 1,
	
	"uker.net": 1,
	
	"ule.com": 1,
	
	"ulinix.com": 1,
	
	"ulinix.la": 1,
	
	"ulink.cc": 1,
	
	"ulunix.com": 1,
	
	"umeng.com": 1,
	
	"umiwi.com": 1,
	
	"un188.com": 1,
	
	"uni-marketers.com": 1,
	
	"unibao.com": 1,
	
	"uninf.com": 1,
	
	"unionli.com": 1,
	
	"unionpay.com": 1,
	
	"unionpaysecure.com": 1,
	
	"uniontoufang.com": 1,
	
	"university-hr.com": 1,
	
	"unjs.com": 1,
	
	"unpcn.com": 1,
	
	"uoeoo.com": 1,
	
	"uoko.com": 1,
	
	"uooqoo.com": 1,
	
	"uouojk.com": 1,
	
	"up2c.com": 1,
	
	"up360.com": 1,
	
	"upai.com": 1,
	
	"upaidui.com": 1,
	
	"upaiyun.com": 1,
	
	"ups.com": 1,
	
	"upweb.net": 1,
	
	"upyun.com": 1,
	
	"usaedu.net": 1,
	
	"usbseries.com": 1,
	
	"useso.com": 1,
	
	"usportnews.com": 1,
	
	"ustc.edu.cn": 1,
	
	"ustclug.org": 1,
	
	"usteel.com": 1,
	
	"uszcn.com": 1,
	
	"utourworld.com": 1,
	
	"utt.cc": 1,
	
	"uu.cc": 1,
	
	"uu2car.com": 1,
	
	"uu38.com": 1,
	
	"uu7c.com": 1,
	
	"uueasy.com": 1,
	
	"uusee.com": 1,
	
	"uutuu.com": 1,
	
	"uuu.moe": 1,
	
	"uuu9.com": 1,
	
	"uuufun.com": 1,
	
	"uuxoo.com": 1,
	
	"uuyoyo.com": 1,
	
	"uuzhufu.com": 1,
	
	"uuzu.com": 1,
	
	"uwan.com": 1,
	
	"uxengine.net": 1,
	
	"uyan.cc": 1,
	
	"uycar.com": 1,
	
	"uycnr.com": 1,
	
	"uydj.com": 1,
	
	"uzai.com": 1,
	
	"uzaicdn.com": 1,
	
	"uzzf.com": 1,
	
	"v007.net": 1,
	
	"v2ex.co": 1,
	
	"v2ex.com": 1,
	
	"v312.com": 1,
	
	"v3gp.com": 1,
	
	"vaikan.com": 1,
	
	"value500.com": 1,
	
	"vamaker.com": 1,
	
	"vancl.com": 1,
	
	"vanclimg.com": 1,
	
	"vanke.com": 1,
	
	"vchangyi.com": 1,
	
	"vcimg.com": 1,
	
	"vcooline.com": 1,
	
	"vdolady.com": 1,
	
	"veerchina.com": 1,
	
	"veg-china.com": 1,
	
	"verycd.com": 1,
	
	"verydz.com": 1,
	
	"vfe.cc": 1,
	
	"vhall.com": 1,
	
	"vhostgo.com": 1,
	
	"vhuaqiao.com": 1,
	
	"vibmro.com": 1,
	
	"vicovico.com": 1,
	
	"vicp.net": 1,
	
	"vikecn.com": 1,
	
	"viosey.com": 1,
	
	"vip.com": 1,
	
	"vip800.com": 1,
	
	"vipcn.com": 1,
	
	"vipshop.com": 1,
	
	"viptijian.com": 1,
	
	"vipyl.com": 1,
	
	"visapro.org": 1,
	
	"visionunion.com": 1,
	
	"visitgd.com": 1,
	
	"visitsz.com": 1,
	
	"vista123.com": 1,
	
	"vivijk.com": 1,
	
	"vizu.com": 1,
	
	"vjia.com": 1,
	
	"vlongbiz.com": 1,
	
	"vmall.com": 1,
	
	"vmovier.com": 1,
	
	"vobao.com": 1,
	
	"vodjk.com": 1,
	
	"vooec.com": 1,
	
	"vooroo.com": 1,
	
	"vpgame.com": 1,
	
	"vpgcdn.com": 1,
	
	"vpsmm.com": 1,
	
	"vrbeing.com": 1,
	
	"vsharing.com": 1,
	
	"vss.im": 1,
	
	"vsuch.com": 1,
	
	"vuejs.org.cn": 1,
	
	"vvjob.com": 1,
	
	"vvvdj.com": 1,
	
	"vx.com": 1,
	
	"vxinyou.com": 1,
	
	"w3.org": 1,
	
	"w3school.com.cn": 1,
	
	"w7000.com": 1,
	
	"w707.com": 1,
	
	"wa8688.com": 1,
	
	"waaku.com": 1,
	
	"wabuw.com": 1,
	
	"wadongxi.com": 1,
	
	"waerfa.com": 1,
	
	"wahawang.com": 1,
	
	"waheaven.com": 1,
	
	"waihuo.com": 1,
	
	"waiwaitu.com": 1,
	
	"waiyu8.com": 1,
	
	"wallstcn.com": 1,
	
	"wallstreetcn.com": 1,
	
	"wan.com": 1,
	
	"wancai.com": 1,
	
	"wandodo.com": 1,
	
	"wandoujia.com": 1,
	
	"wandu.cc": 1,
	
	"wangdai3.com": 1,
	
	"wangdaibaike.com": 1,
	
	"wangdaibang.com": 1,
	
	"wangdaibangshou.com": 1,
	
	"wangdaicaifu.com": 1,
	
	"wangdaidp.com": 1,
	
	"wangdaiguancha.com": 1,
	
	"wangdaiqianyan.com": 1,
	
	"wangdaisky.com": 1,
	
	"wangdaitiandi.com": 1,
	
	"wangdaiwuyou.com": 1,
	
	"wangdaizhijia.com": 1,
	
	"wangdaizhinan.com": 1,
	
	"wanggou.com": 1,
	
	"wanggou86.com": 1,
	
	"wangjiags.com": 1,
	
	"wangjiajg.com": 1,
	
	"wangjinlou.com": 1,
	
	"wangjiu.com": 1,
	
	"wangpiao.com": 1,
	
	"wangqi.com": 1,
	
	"wangtu.com": 1,
	
	"wanguan.com": 1,
	
	"wangxiao.so": 1,
	
	"wangye.com": 1,
	
	"wangyin.com": 1,
	
	"wangyouhu.com": 1,
	
	"wanjia.org": 1,
	
	"wanjidao.com": 1,
	
	"wanjingchina.com": 1,
	
	"wanku.com": 1,
	
	"wanlitong.com": 1,
	
	"wanmei.com": 1,
	
	"wanmeimr.com": 1,
	
	"wanrendai.net": 1,
	
	"wansecheng.com": 1,
	
	"wanxf.com": 1,
	
	"wanxia.com": 1,
	
	"wanxuan.net": 1,
	
	"wanyan.com": 1,
	
	"wanyouxi7.com": 1,
	
	"wanyx.com": 1,
	
	"wanzhoujob.com": 1,
	
	"wapurl.com": 1,
	
	"warchina.com": 1,
	
	"warcraftchina.com": 1,
	
	"wasu.tv": 1,
	
	"watchstor.com": 1,
	
	"waterchina.com": 1,
	
	"wbshsc.com": 1,
	
	"wbtt315.com": 1,
	
	"wcedu.org": 1,
	
	"wcnimg.com": 1,
	
	"wcsrcw.com": 1,
	
	"wcwang.com": 1,
	
	"wddj.net": 1,
	
	"wdj168.com": 1,
	
	"wdji.com": 1,
	
	"wdjimg.com": 1,
	
	"wdjyzx.com": 1,
	
	"wdsjz.com": 1,
	
	"wdzx.com": 1,
	
	"we.com": 1,
	
	"wealink.com": 1,
	
	"weamax.com": 1,
	
	"weather.com": 1,
	
	"weathercn.com": 1,
	
	"web3389.com": 1,
	
	"web4008.com": 1,
	
	"webjx.com": 1,
	
	"webofknowledge.com": 1,
	
	"webportal.cc": 1,
	
	"webpowerchina.com": 1,
	
	"webterren.com": 1,
	
	"webuuo.com": 1,
	
	"webxgame.com": 1,
	
	"webxueyuan.com": 1,
	
	"wechat.com": 1,
	
	"wechatnet.com": 1,
	
	"wed139.com": 1,
	
	"wedba.com": 1,
	
	"wedsoso.com": 1,
	
	"wehefei.com": 1,
	
	"weibo.com": 1,
	
	"weicaifu.com": 1,
	
	"weidunewtab.com": 1,
	
	"weihai.tv": 1,
	
	"weilanhaian.com": 1,
	
	"weilanliuxue.com": 1,
	
	"weimob.com": 1,
	
	"weiningnews.com": 1,
	
	"weinisi.com": 1,
	
	"weiosx.com": 1,
	
	"weiphone.com": 1,
	
	"weishan.cc": 1,
	
	"weixiaodian.com": 1,
	
	"weixinhost.com": 1,
	
	"weiyun.com": 1,
	
	"weizhang.net": 1,
	
	"weizhangjilu.com": 1,
	
	"weizhangwang.com": 1,
	
	"weizhuangxiu.com": 1,
	
	"weke.com": 1,
	
	"weleve.com": 1,
	
	"wems.net": 1,
	
	"wemvp.com": 1,
	
	"wen8.net": 1,
	
	"wendu.com": 1,
	
	"wenjingjiaoyu.com": 1,
	
	"wenjuan.com": 1,
	
	"wenjuan.in": 1,
	
	"wenlingrc.com": 1,
	
	"wenshizhai.com": 1,
	
	"wenwuchina.com": 1,
	
	"wenxue24.com": 1,
	
	"wenyoutai.com": 1,
	
	"wenzhouglasses.com": 1,
	
	"wenzifanyi.com": 1,
	
	"wesmp.com": 1,
	
	"west263.com": 1,
	
	"wf777.com": 1,
	
	"wfbbs.com": 1,
	
	"wff168.com": 1,
	
	"wfjyxxg.com": 1,
	
	"wfrsks.com": 1,
	
	"wgszq.net": 1,
	
	"wh3351.com": 1,
	
	"whatchina.com": 1,
	
	"whblct.com": 1,
	
	"whcic.com": 1,
	
	"whctv.com": 1,
	
	"whedu.net": 1,
	
	"whedu21.com": 1,
	
	"whgh.org": 1,
	
	"whhouse.com": 1,
	
	"whicu.com": 1,
	
	"whir.net": 1,
	
	"whjm.com": 1,
	
	"whjuren.com": 1,
	
	"whjy.net": 1,
	
	"whjzw.net": 1,
	
	"whlongda.com": 1,
	
	"whlsgzn.com": 1,
	
	"whqyw.com": 1,
	
	"whrhkj.com": 1,
	
	"whshangceng.com": 1,
	
	"wht.im": 1,
	
	"whwd.com": 1,
	
	"whwz.com": 1,
	
	"whxedu.net": 1,
	
	"whxz.org": 1,
	
	"wifun.com": 1,
	
	"wihu.com": 1,
	
	"williamlong.info": 1,
	
	"win007.com": 1,
	
	"win7china.com": 1,
	
	"win8china.com": 1,
	
	"wincn.com": 1,
	
	"windchn.com": 1,
	
	"windows7en.com": 1,
	
	"wine9.com": 1,
	
	"winenice.com": 1,
	
	"wines-info.com": 1,
	
	"wingwit.com": 1,
	
	"winhometex.com": 1,
	
	"winshang.com": 1,
	
	"winupon.com": 1,
	
	"winxuan.com": 1,
	
	"wisenjoy.com": 1,
	
	"wishdown.com": 1,
	
	"wiz.cn": 1,
	
	"wj001.com": 1,
	
	"wjdaily.com": 1,
	
	"wjedu.net": 1,
	
	"wjnin.com": 1,
	
	"wjshw.com": 1,
	
	"wjx.top": 1,
	
	"wkepu.com": 1,
	
	"wkimg.com": 1,
	
	"wlgyy.com": 1,
	
	"wlkst.com": 1,
	
	"wlmq.com": 1,
	
	"wlmqwb.com": 1,
	
	"wlool.com": 1,
	
	"wlstock.com": 1,
	
	"wlwcn.com": 1,
	
	"wm927.com": 1,
	
	"wmordos.com": 1,
	
	"wmpic.me": 1,
	
	"wmzhe.com": 1,
	
	"wnbiaodan.com": 1,
	
	"wnrczpw.com": 1,
	
	"wnwb.com": 1,
	
	"wnxwzx.com": 1,
	
	"wo116114.com": 1,
	
	"woai3d.net": 1,
	
	"wodemo.com": 1,
	
	"wodingche.com": 1,
	
	"wofang.com": 1,
	
	"wofangwang.com": 1,
	
	"woiyu.com": 1,
	
	"woja.net": 1,
	
	"wojubl.com": 1,
	
	"wokanfang.com": 1,
	
	"wokeji.com": 1,
	
	"wokoko.com": 1,
	
	"wolai.com": 1,
	
	"womai.com": 1,
	
	"woman91.com": 1,
	
	"womenofchina.com": 1,
	
	"woniu.com": 1,
	
	"wood-china.com": 1,
	
	"wood168.com": 1,
	
	"wooshoes.com": 1,
	
	"wooyun.org": 1,
	
	"wopus.org": 1,
	
	"workec.com": 1,
	
	"worktile.com": 1,
	
	"world-culture.org": 1,
	
	"world-metal.com": 1,
	
	"world-stone.com": 1,
	
	"worldhm.com": 1,
	
	"worldmr.net": 1,
	
	"worldscrap.com": 1,
	
	"worlduc.com": 1,
	
	"wosign-dvca.ocsp-certum.com": 1,
	
	"wosign-evca.ocsp-certum.com": 1,
	
	"wosign-ovca.ocsp-certum.com": 1,
	
	"wosign.com": 1,
	
	"wowchina.com": 1,
	
	"woyaogexing.com": 1,
	
	"woyewan.com": 1,
	
	"woying.com": 1,
	
	"woyoo.com": 1,
	
	"woyouguanjia.com": 1,
	
	"wpxap.com": 1,
	
	"wrating.com": 1,
	
	"wrsa.net": 1,
	
	"wrzc.net": 1,
	
	"wsbedu.com": 1,
	
	"wsbynews.com": 1,
	
	"wscdns.com": 1,
	
	"wsche.com": 1,
	
	"wshang.com": 1,
	
	"wshangyun.com": 1,
	
	"wsloan.com": 1,
	
	"wsmhw.com": 1,
	
	"wsqsgo.com": 1,
	
	"wsxq.com": 1,
	
	"wtdianlan.com": 1,
	
	"wto168.net": 1,
	
	"wto9000.com": 1,
	
	"wtt365.com": 1,
	
	"wuca.net": 1,
	
	"wudang360.com": 1,
	
	"wudao.com": 1,
	
	"wudaotv.com": 1,
	
	"wufun.net": 1,
	
	"wuhuansoft.com": 1,
	
	"wujianghr.com": 1,
	
	"wujue.com": 1,
	
	"wulumuqijiaochetuoyun.com": 1,
	
	"wumii.com": 1,
	
	"wuqing.cc": 1,
	
	"wusa5.com": 1,
	
	"wutongxiang.cc": 1,
	
	"wutongzi.com": 1,
	
	"wuxingarden.com": 1,
	
	"wuxirc.com": 1,
	
	"wuxjob.com": 1,
	
	"wuyishan.com": 1,
	
	"wuyuan168.com": 1,
	
	"wwenglish.com": 1,
	
	"wwfchina.org": 1,
	
	"wx6.org": 1,
	
	"wxhouse.com": 1,
	
	"wxjob.com": 1,
	
	"wxmama.com": 1,
	
	"wxrb.com": 1,
	
	"wxthw.com": 1,
	
	"wxtxgj.net": 1,
	
	"wy000.com": 1,
	
	"wygf.net": 1,
	
	"wyjiuyuanheiji.com": 1,
	
	"wz121.com": 1,
	
	"wz12333.com": 1,
	
	"wz16.net": 1,
	
	"wz2sc.com": 1,
	
	"wz517.com": 1,
	
	"wzcbd.com": 1,
	
	"wzcn.cc": 1,
	
	"wzdsb.net": 1,
	
	"wzer.net": 1,
	
	"wzfg.com": 1,
	
	"wzgh.org": 1,
	
	"wzhd.com": 1,
	
	"wzjky.net": 1,
	
	"wzjob.com": 1,
	
	"wzjygh.net": 1,
	
	"wzms.com": 1,
	
	"wzpeace.com": 1,
	
	"wzpo.net": 1,
	
	"wzrc.net": 1,
	
	"wzsee.com": 1,
	
	"wzszp.com": 1,
	
	"wztvu.com": 1,
	
	"wzwh.com": 1,
	
	"wzyds.com": 1,
	
	"wzzbtb.com": 1,
	
	"x3cn.com": 1,
	
	"x4321.com": 1,
	
	"xa999.com": 1,
	
	"xabbs.com": 1,
	
	"xadlan.com": 1,
	
	"xafc.com": 1,
	
	"xahhw.com": 1,
	
	"xajob.com": 1,
	
	"xamama.net": 1,
	
	"xanet110.com": 1,
	
	"xaonline.com": 1,
	
	"xapcn.com": 1,
	
	"xaprice.com": 1,
	
	"xarc.net": 1,
	
	"xarc8.com": 1,
	
	"xatvs.com": 1,
	
	"xawan.com": 1,
	
	"xawb.com": 1,
	
	"xbaixing.com": 1,
	
	"xbedu.net": 1,
	
	"xbiao.com": 1,
	
	"xbmhw.com": 1,
	
	"xbxxb.com": 1,
	
	"xbychemoxing.com": 1,
	
	"xbymoxing.com": 1,
	
	"xc0769.com": 1,
	
	"xcar.com.cn": 1,
	
	"xcarimg.com": 1,
	
	"xcedu.net": 1,
	
	"xclient.info": 1,
	
	"xcmg.com": 1,
	
	"xcpxw.com": 1,
	
	"xcrc999.com": 1,
	
	"xcy8.com": 1,
	
	"xd.com": 1,
	
	"xdcdn.net": 1,
	
	"xdkb.net": 1,
	
	"xdnice.com": 1,
	
	"xdocman.com": 1,
	
	"xdowns.com": 1,
	
	"xdwan.com": 1,
	
	"xf88.com": 1,
	
	"xf9168.com": 1,
	
	"xfbst.com": 1,
	
	"xffcol.com": 1,
	
	"xfjw.net": 1,
	
	"xfqcol.com": 1,
	
	"xfwed.com": 1,
	
	"xfzc.com": 1,
	
	"xgz.cc": 1,
	
	"xgz.com": 1,
	
	"xgzrc.com": 1,
	
	"xh-expo.com": 1,
	
	"xhby.net": 1,
	
	"xhcedu.com": 1,
	
	"xhdedu.com": 1,
	
	"xhedu.net": 1,
	
	"xhuaian.com": 1,
	
	"xiachufang.com": 1,
	
	"xiadu.com": 1,
	
	"xialingying.cc": 1,
	
	"xialinying.com": 1,
	
	"xialv.com": 1,
	
	"xiamenair.com": 1,
	
	"xiami.com": 1,
	
	"xiami.net": 1,
	
	"xian-tourism.com": 1,
	
	"xianbey.com": 1,
	
	"xianbx.com": 1,
	
	"xiancn.com": 1,
	
	"xiangauto.com": 1,
	
	"xiangcunyou.com": 1,
	
	"xianghunet.com": 1,
	
	"xiangjiangyw.com": 1,
	
	"xiangmu.com": 1,
	
	"xiangrikui.com": 1,
	
	"xiangshenghang.com": 1,
	
	"xiangshu.com": 1,
	
	"xianguo.com": 1,
	
	"xiangyang.net": 1,
	
	"xianjj.com": 1,
	
	"xiankan.com": 1,
	
	"xianweizhang.com": 1,
	
	"xianyuwang.com": 1,
	
	"xiao84.com": 1,
	
	"xiaohei.com": 1,
	
	"xiaojiangguo123.com": 1,
	
	"xiaoliangkou.com": 1,
	
	"xiaoluerhuo.com": 1,
	
	"xiaoma.com": 1,
	
	"xiaomayi.co": 1,
	
	"xiaomayi.net": 1,
	
	"xiaomi.com": 1,
	
	"xiaomi001.com": 1,
	
	"xiaomishu.com": 1,
	
	"xiaomizha.com": 1,
	
	"xiaonaodai.com": 1,
	
	"xiaonei.com": 1,
	
	"xiaopi.com": 1,
	
	"xiaoshouyi.com": 1,
	
	"xiaoshuo766.com": 1,
	
	"xiaoxiangrc.com": 1,
	
	"xiaoxiaotong.org": 1,
	
	"xiaoyeren.com": 1,
	
	"xiaoyuanfeng.com": 1,
	
	"xiaozhi123.com": 1,
	
	"xiaozhu.com": 1,
	
	"xiaozhustatic1.com": 1,
	
	"xiapu.co": 1,
	
	"xiashanet.com": 1,
	
	"xiazaiba.com": 1,
	
	"xiazaizhijia.com": 1,
	
	"xicai.com": 1,
	
	"xiche168.com": 1,
	
	"xichengrc.com": 1,
	
	"xichu.net": 1,
	
	"xici.net": 1,
	
	"xidian.cc": 1,
	
	"xieso.net": 1,
	
	"xiezilou.com": 1,
	
	"xifeng2008.com": 1,
	
	"xigu.com": 1,
	
	"xihairc.com": 1,
	
	"xilu.com": 1,
	
	"xima.tv": 1,
	
	"ximalaya.com": 1,
	
	"xincheping.com": 1,
	
	"xincx.com": 1,
	
	"xindaibao.com": 1,
	
	"xinddy.com": 1,
	
	"xinfenlei.com": 1,
	
	"xingcishan.com": 1,
	
	"xinggan.com": 1,
	
	"xingjiezs.com": 1,
	
	"xingmucaoye.com": 1,
	
	"xingshu.com": 1,
	
	"xingtai.net": 1,
	
	"xingtaituan.com": 1,
	
	"xingzuo123.com": 1,
	
	"xingzuowu.com": 1,
	
	"xinhainews.com": 1,
	
	"xinhe99.com": 1,
	
	"xinhua.org": 1,
	
	"xinhua08.com": 1,
	
	"xinhuacang.com": 1,
	
	"xinhuanet.com": 1,
	
	"xinhuatone.com": 1,
	
	"xinjiewang.com": 1,
	
	"xinjunshi.com": 1,
	
	"xinkz.com": 1,
	
	"xinli001.com": 1,
	
	"xinli110.com": 1,
	
	"xinlimaoyi.com": 1,
	
	"xinluobo.com": 1,
	
	"xinm123.com": 1,
	
	"xinmanyuan.com": 1,
	
	"xinmicn.com": 1,
	
	"xinnet.com": 1,
	
	"xinniangjie.com": 1,
	
	"xinnong.com": 1,
	
	"xinpg.com": 1,
	
	"xinpian.com": 1,
	
	"xinshaow.com": 1,
	
	"xintaizhou.com": 1,
	
	"xintuan.com": 1,
	
	"xinwangjing.com": 1,
	
	"xinxianrener.com": 1,
	
	"xinxijie.net": 1,
	
	"xinxiqu.com": 1,
	
	"xinxiwo.com": 1,
	
	"xinxiyi.com": 1,
	
	"xinxunwang.com": 1,
	
	"xinyanju.com": 1,
	
	"xinyi.com": 1,
	
	"xinyurc.com": 1,
	
	"xinzheng.cc": 1,
	
	"xinzhou.org": 1,
	
	"xip.io": 1,
	
	"xipu520.com": 1,
	
	"xitek.com": 1,
	
	"xitu.io": 1,
	
	"xituan.com": 1,
	
	"xiu.com": 1,
	
	"xiubei.com": 1,
	
	"xiuke.com": 1,
	
	"xiusheji.net": 1,
	
	"xiwenquan.com": 1,
	
	"xixiarc.com": 1,
	
	"xixik.com": 1,
	
	"xiyuit.com": 1,
	
	"xizhou.com": 1,
	
	"xizi.com": 1,
	
	"xiziwang.net": 1,
	
	"xj0993.com": 1,
	
	"xj169.com": 1,
	
	"xj5u.com": 1,
	
	"xj71.com": 1,
	
	"xj917.com": 1,
	
	"xjauto.net": 1,
	
	"xjcfan.com": 1,
	
	"xjcourt.org": 1,
	
	"xjdaily.com": 1,
	
	"xjedu.org": 1,
	
	"xjflcp.com": 1,
	
	"xjhr.com": 1,
	
	"xjjjb.com": 1,
	
	"xjrb.com": 1,
	
	"xjtaobao.com": 1,
	
	"xjtour.com": 1,
	
	"xjtsnews.com": 1,
	
	"xjw6188.com": 1,
	
	"xkhouse.com": 1,
	
	"xkwx.com": 1,
	
	"xkxm.com": 1,
	
	"xldns.net": 1,
	
	"xlpan.com": 1,
	
	"xlsti.com": 1,
	
	"xlys1904.com": 1,
	
	"xlzx.com": 1,
	
	"xm3502.com": 1,
	
	"xmcdn.com": 1,
	
	"xmcimg.com": 1,
	
	"xmfc.com": 1,
	
	"xmfish.com": 1,
	
	"xmhljsz.com": 1,
	
	"xmhouse.com": 1,
	
	"xmmh.net": 1,
	
	"xmwj.com": 1,
	
	"xn121.com": 1,
	
	"xna8.com": 1,
	
	"xnfw.org": 1,
	
	"xnjjob.com": 1,
	
	"xnmtd.com": 1,
	
	"xnonl.com": 1,
	
	"xnpic.com": 1,
	
	"xns315.com": 1,
	
	"xnwsq.com": 1,
	
	"xoeoo.com": 1,
	
	"xoyo.com": 1,
	
	"xp14.com": 1,
	
	"xp510.com": 1,
	
	"xp597.com": 1,
	
	"xpgod.com": 1,
	
	"xpjy.net": 1,
	
	"xpsy.net": 1,
	
	"xpxww.com": 1,
	
	"xqingnet.com": 1,
	
	"xrtvu.com": 1,
	
	"xs163.net": 1,
	
	"xs8.cn": 1,
	
	"xs9999.com": 1,
	
	"xsbxw.com": 1,
	
	"xsbz.com": 1,
	
	"xshr.com": 1,
	
	"xsjk.net": 1,
	
	"xsjob.com": 1,
	
	"xskhome.com": 1,
	
	"xsmp.net": 1,
	
	"xsool.com": 1,
	
	"xsren.hk": 1,
	
	"xsrtvu.com": 1,
	
	"xszp.cc": 1,
	
	"xszrcw.com": 1,
	
	"xtcanlian.com": 1,
	
	"xtgreat.com": 1,
	
	"xtjc.com": 1,
	
	"xtjob.net": 1,
	
	"xtly.net": 1,
	
	"xtuan.com": 1,
	
	"xuancheng.org": 1,
	
	"xuanfengge.com": 1,
	
	"xuanruanjian.com": 1,
	
	"xuanwww.com": 1,
	
	"xuanxuan.com": 1,
	
	"xuchangbbs.com": 1,
	
	"xudongjixie.com": 1,
	
	"xue.net": 1,
	
	"xue2you.com": 1,
	
	"xue5156.com": 1,
	
	"xueau.com": 1,
	
	"xueche.net": 1,
	
	"xueda.com": 1,
	
	"xueersi.com": 1,
	
	"xueeu.com": 1,
	
	"xuefo.net": 1,
	
	"xuefu5.com": 1,
	
	"xueid.com": 1,
	
	"xuejiazhao.com": 1,
	
	"xuejp.com": 1,
	
	"xuekeedu.com": 1,
	
	"xuekewang.com": 1,
	
	"xueshanrc.com": 1,
	
	"xuesoo.com": 1,
	
	"xuetangx.com": 1,
	
	"xuetian.org": 1,
	
	"xuexi111.com": 1,
	
	"xuexiaodaquan.com": 1,
	
	"xuexifangfa.com": 1,
	
	"xuexigang.com": 1,
	
	"xuexila.com": 1,
	
	"xuexiniu.com": 1,
	
	"xuexun.com": 1,
	
	"xueyiyun.com": 1,
	
	"xujc.com": 1,
	
	"xumulc.com": 1,
	
	"xumurc.com": 1,
	
	"xumuren.com": 1,
	
	"xunch.net": 1,
	
	"xungou.com": 1,
	
	"xunlei.com": 1,
	
	"xunleimil.com": 1,
	
	"xunyangwang.com": 1,
	
	"xunyiwenyao.com": 1,
	
	"xunyou.com": 1,
	
	"xuqinghua.net": 1,
	
	"xutour.com": 1,
	
	"xuzhoujob.com": 1,
	
	"xw365.com": 1,
	
	"xwcm.net": 1,
	
	"xwen.com": 1,
	
	"xwie.com": 1,
	
	"xwjy.org": 1,
	
	"xx007.com": 1,
	
	"xx1t.com": 1,
	
	"xx351.com": 1,
	
	"xxdm.com": 1,
	
	"xxhls.com": 1,
	
	"xxluo.com": 1,
	
	"xxplzx.com": 1,
	
	"xxsy.net": 1,
	
	"xxyw.com": 1,
	
	"xy.com": 1,
	
	"xy9981.com": 1,
	
	"xya8.com": 1,
	
	"xycdn.com": 1,
	
	"xydhl.com": 1,
	
	"xyfc.com": 1,
	
	"xyg100.com": 1,
	
	"xygmed.com": 1,
	
	"xyppzx.com": 1,
	
	"xyrc.net": 1,
	
	"xyrczpw.com": 1,
	
	"xyrtv.com": 1,
	
	"xywy.com": 1,
	
	"xyxy.net": 1,
	
	"xyzs.com": 1,
	
	"xz120.net": 1,
	
	"xzass.org": 1,
	
	"xzavt.com": 1,
	
	"xzbfgg.com": 1,
	
	"xzbhzl.com": 1,
	
	"xzboyue.com": 1,
	
	"xzfhgg.com": 1,
	
	"xzjgw.com": 1,
	
	"xzjxsg.com": 1,
	
	"xzjyh.com": 1,
	
	"xzqh.org": 1,
	
	"xzrbw.com": 1,
	
	"xzren.com": 1,
	
	"xzsnw.com": 1,
	
	"xzsyw.com": 1,
	
	"xzuan.com": 1,
	
	"xzxw.com": 1,
	
	"xzxx.com": 1,
	
	"xzyuhui.com": 1,
	
	"xzyxdz.com": 1,
	
	"xzzp.net": 1,
	
	"y13255262618.com": 1,
	
	"y2002.com": 1,
	
	"y5201314.com": 1,
	
	"y80s.net": 1,
	
	"ya247.com": 1,
	
	"ya597.com": 1,
	
	"yacol.com": 1,
	
	"yahan-wenhua.com": 1,
	
	"yahui.cc": 1,
	
	"yahxi.com": 1,
	
	"yakolux.com": 1,
	
	"yalj.net": 1,
	
	"yamibo.com": 1,
	
	"yananuniversity.com": 1,
	
	"yandongjixie.com": 1,
	
	"yangcheng8.com": 1,
	
	"yangcong.com": 1,
	
	"yanghongzhou.com": 1,
	
	"yangjiajiao.com": 1,
	
	"yangshitianqi.com": 1,
	
	"yangtse.com": 1,
	
	"yangzhi.com": 1,
	
	"yanlimeirong.com": 1,
	
	"yantaihr.com": 1,
	
	"yantuchina.com": 1,
	
	"yanxiu.com": 1,
	
	"yanzhaorc.com": 1,
	
	"yaochufa.com": 1,
	
	"yaodou.com": 1,
	
	"yaoee.com": 1,
	
	"yaofangwang.com": 1,
	
	"yaohuo.me": 1,
	
	"yaojobs.com": 1,
	
	"yaolan.com": 1,
	
	"yaoliwang.com": 1,
	
	"yaolu.org": 1,
	
	"yaolvyou.com": 1,
	
	"yaowan.com": 1,
	
	"yaozh.com": 1,
	
	"yaozs.com": 1,
	
	"yasn.com": 1,
	
	"yayawan.com": 1,
	
	"yb983.com": 1,
	
	"ybbbs.com": 1,
	
	"ybbgn.com": 1,
	
	"ybjk.com": 1,
	
	"ybrc.net": 1,
	
	"ybvv.com": 1,
	
	"ybxww.com": 1,
	
	"ybyulong.com": 1,
	
	"yc.cc": 1,
	
	"yc38.com": 1,
	
	"yc5.net": 1,
	
	"yc678.com": 1,
	
	"yc920.com": 1,
	
	"ycbole.com": 1,
	
	"yccar.com": 1,
	
	"yccdn.com": 1,
	
	"ycdata.net": 1,
	
	"ycdyz.com": 1,
	
	"ycgjj.com": 1,
	
	"ychdzx.co": 1,
	
	"ychr.com": 1,
	
	"ycicw.com": 1,
	
	"ycpai.com": 1,
	
	"ycrczpw.com": 1,
	
	"ycrusher.com": 1,
	
	"ycshequ.com": 1,
	
	"ycwb.com": 1,
	
	"ycxc.com": 1,
	
	"ycywsh.com": 1,
	
	"yczihua.com": 1,
	
	"yczjda.org": 1,
	
	"ydstatic.com": 1,
	
	"ye40.com": 1,
	
	"yeah.net": 1,
	
	"yecdn.com": 1,
	
	"yeekang.com": 1,
	
	"yeepay.com": 1,
	
	"yeeyan.org": 1,
	
	"yeqiaohui.com": 1,
	
	"yes515.com": 1,
	
	"yesfr.com": 1,
	
	"yeshj.com": 1,
	
	"yesky.com": 1,
	
	"yesmyimg.com": 1,
	
	"yesmywine.com": 1,
	
	"yeyou.com": 1,
	
	"yeyoucdn.com": 1,
	
	"yeyoudaquan.com": 1,
	
	"yeyoujia.com": 1,
	
	"yeyouw.com": 1,
	
	"ygfishing.net": 1,
	
	"ygjj.com": 1,
	
	"ygym.org": 1,
	
	"yhachina.com": 1,
	
	"yhbimg.com": 1,
	
	"yhd.com": 1,
	
	"yhgcc.com": 1,
	
	"yhgh.org": 1,
	
	"yhjj.com": 1,
	
	"yhjy.net": 1,
	
	"yhkgjt.com": 1,
	
	"yhnw.com": 1,
	
	"yhwt.com": 1,
	
	"yi7.com": 1,
	
	"yi958.com": 1,
	
	"yicai.com": 1,
	
	"yiche.com": 1,
	
	"yichemall.com": 1,
	
	"yicheshi.com": 1,
	
	"yidaba.com": 1,
	
	"yidianzixun.com": 1,
	
	"yidiao.net": 1,
	
	"yieldmanager.com": 1,
	
	"yifucj.com": 1,
	
	"yihaodian.com": 1,
	
	"yihaodianimg.com": 1,
	
	"yiigle.com": 1,
	
	"yijiaqin.com": 1,
	
	"yilewan.com": 1,
	
	"yili.com": 1,
	
	"yingbishufa.com": 1,
	
	"yingchuang.com": 1,
	
	"yingjiesheng.com": 1,
	
	"yingkelawyer.com": 1,
	
	"yingle.com": 1,
	
	"yinglianre.com": 1,
	
	"yingmoo.com": 1,
	
	"yingsheng.com": 1,
	
	"yingtanwang.com": 1,
	
	"yingxiao360.com": 1,
	
	"yingyu.com": 1,
	
	"yinhangzhaopin.com": 1,
	
	"yinlianbang.com": 1,
	
	"yinsha.com": 1,
	
	"yinshihui.com": 1,
	
	"yinshua.cm": 1,
	
	"yintai.com": 1,
	
	"yinxiang.com": 1,
	
	"yinxiuwang.com": 1,
	
	"yinyuetai.com": 1,
	
	"yiqifa.com": 1,
	
	"yiqin.com": 1,
	
	"yiqirong.com": 1,
	
	"yiqisoo.com": 1,
	
	"yiqisooimg.com": 1,
	
	"yiqixie.com": 1,
	
	"yirendai.com": 1,
	
	"yishizige.com": 1,
	
	"yishu.com": 1,
	
	"yisoche.com": 1,
	
	"yisou.com": 1,
	
	"yisou5.com": 1,
	
	"yiweigou.com": 1,
	
	"yiwu2.com": 1,
	
	"yiwubuy.com": 1,
	
	"yiwufair.com": 1,
	
	"yiwugou.com": 1,
	
	"yixieshi.com": 1,
	
	"yixin.im": 1,
	
	"yixue001.com": 1,
	
	"yixue99.com": 1,
	
	"yixuezp.com": 1,
	
	"yixun.com": 1,
	
	"yiyedu.com": 1,
	
	"yiyigreen.com": 1,
	
	"yizhaoche.com": 1,
	
	"yizhaopin.com": 1,
	
	"yizhituo.com": 1,
	
	"yizimg.com": 1,
	
	"yjbys.com": 1,
	
	"yjhy.net": 1,
	
	"yjkyj.com": 1,
	
	"yk0579.com": 1,
	
	"ykedu.net": 1,
	
	"ykimg.com": 1,
	
	"ykrx.com": 1,
	
	"ykt.io": 1,
	
	"yktchina.com": 1,
	
	"yktworld.com": 1,
	
	"ykwin.com": 1,
	
	"yl1001.com": 1,
	
	"yl114.cc": 1,
	
	"yljy.com": 1,
	
	"ylmf.net": 1,
	
	"ylr114.com": 1,
	
	"ylrb.com": 1,
	
	"ylsw.com": 1,
	
	"ylsw.net": 1,
	
	"yltvb.com": 1,
	
	"ylw168.com": 1,
	
	"ylzmhzs.com": 1,
	
	"ymfile.com": 1,
	
	"ymt360.com": 1,
	
	"ymxfishing.com": 1,
	
	"yn114.com": 1,
	
	"yn16.com": 1,
	
	"yn56.com": 1,
	
	"yn987.com": 1,
	
	"yncoop.com": 1,
	
	"yndaily.com": 1,
	
	"yndtjj.com": 1,
	
	"ynedu.net": 1,
	
	"ynet.com": 1,
	
	"ynfjw.com": 1,
	
	"yngkseed.com": 1,
	
	"yngp.com": 1,
	
	"ynhouse.com": 1,
	
	"ynhr.com": 1,
	
	"yninfo.com": 1,
	
	"ynit580.com": 1,
	
	"ynjgy.com": 1,
	
	"ynjtt.com": 1,
	
	"ynpew.com": 1,
	
	"ynpost.com": 1,
	
	"ynpxrz.com": 1,
	
	"ynshangji.com": 1,
	
	"ynsugar.com": 1,
	
	"yntch.com": 1,
	
	"ynwangli.com": 1,
	
	"ynwjs.com": 1,
	
	"ynxdfpr.com": 1,
	
	"ynzp.com": 1,
	
	"ynzs.cn": 1,
	
	"yoao.com": 1,
	
	"yodak.net": 1,
	
	"yodamob.com": 1,
	
	"yodao.com": 1,
	
	"yodbank.com": 1,
	
	"yododo.com": 1,
	
	"yofus.com": 1,
	
	"yoher.com": 1,
	
	"yohobuy.com": 1,
	
	"yohoshow.com": 1,
	
	"yoka.com": 1,
	
	"yokacdn.com": 1,
	
	"yolbax.com": 1,
	
	"yolk7.com": 1,
	
	"yomail.com": 1,
	
	"yongchengren.com": 1,
	
	"yonghongtech.com": 1,
	
	"yongjiangrc.com": 1,
	
	"yongsao.com": 1,
	
	"yongshengmold.com": 1,
	
	"yongweizhiye.com": 1,
	
	"yongyao.net": 1,
	
	"yongzhou.com": 1,
	
	"yoohouse.com": 1,
	
	"yooli.com": 1,
	
	"yooyo.com": 1,
	
	"youba.com": 1,
	
	"youban.com": 1,
	
	"youbian.com": 1,
	
	"youbianku.com": 1,
	
	"youbibi.com": 1,
	
	"youboy.com": 1,
	
	"youc.com": 1,
	
	"youdao.com": 1,
	
	"youdu.im": 1,
	
	"youfangw.com": 1,
	
	"yougou.com": 1,
	
	"youhua.com": 1,
	
	"youhunan.com": 1,
	
	"youjiao.com": 1,
	
	"youjindi.com": 1,
	
	"youkecn.com": 1,
	
	"youkee.com": 1,
	
	"youkelai.com": 1,
	
	"youku.com": 1,
	
	"youlonger.com": 1,
	
	"youmeiji.com": 1,
	
	"younet.com": 1,
	
	"yousee.com": 1,
	
	"youshang.com": 1,
	
	"youth.cn": 1,
	
	"youtx.com": 1,
	
	"youwinedu.com": 1,
	
	"youwo.com": 1,
	
	"youxi.com": 1,
	
	"youxi5.net": 1,
	
	"youxia.org": 1,
	
	"youxiake.com": 1,
	
	"youxiduo.com": 1,
	
	"youxiniao.com": 1,
	
	"youxiping.com": 1,
	
	"youxiqun.com": 1,
	
	"youxiuhui.com": 1,
	
	"youxiwangguo.com": 1,
	
	"youyuan.com": 1,
	
	"youyy.com": 1,
	
	"youzu.com": 1,
	
	"yoyobaby.com": 1,
	
	"yoyojie.com": 1,
	
	"yoyone.net": 1,
	
	"yoyou.com": 1,
	
	"ypall.com": 1,
	
	"yqbdt.com": 1,
	
	"yqcn.com": 1,
	
	"yqdown.com": 1,
	
	"yqrc.com": 1,
	
	"yrd100.com": 1,
	
	"yrdedu.com": 1,
	
	"ys168.com": 1,
	
	"yshsports.com": 1,
	
	"yssjw.com": 1,
	
	"ysxyyt.com": 1,
	
	"ytbbs.com": 1,
	
	"ytbxw.com": 1,
	
	"ythouse.com": 1,
	
	"ythuayi.com": 1,
	
	"ytjob.com": 1,
	
	"ytrain.com": 1,
	
	"ytrc.cc": 1,
	
	"ytrczpw.com": 1,
	
	"ytwrc.com": 1,
	
	"ytx.cc": 1,
	
	"ytxsoft.com": 1,
	
	"ytxww.com": 1,
	
	"yuanlai.com": 1,
	
	"yuanlin.com": 1,
	
	"yuanlin001.com": 1,
	
	"yuanlin365.com": 1,
	
	"yuanrunkeji.com": 1,
	
	"yuanyetrip.com": 1,
	
	"yuanyi.biz": 1,
	
	"yubooa.com": 1,
	
	"yuduxx.com": 1,
	
	"yue365.com": 1,
	
	"yuecheng.com": 1,
	
	"yuejianglou.com": 1,
	
	"yuemei.com": 1,
	
	"yuhou.com": 1,
	
	"yuhuan.com": 1,
	
	"yuhuijob.com": 1,
	
	"yujia.com": 1,
	
	"yuksel.me": 1,
	
	"yuloo.com": 1,
	
	"yunbaoriji.com": 1,
	
	"yuncheng.com": 1,
	
	"yundaex.com": 1,
	
	"yundianrc.com": 1,
	
	"yunguicn.com": 1,
	
	"yunhepan.com": 1,
	
	"yunhosting.com": 1,
	
	"yunos.com": 1,
	
	"yunpian.com": 1,
	
	"yunshipei.com": 1,
	
	"yunshow.com": 1,
	
	"yuntaodu.com": 1,
	
	"yunuu.com": 1,
	
	"yunyangrc.com": 1,
	
	"yupoo.com": 1,
	
	"yuqihuang.com": 1,
	
	"yuqinge.com": 1,
	
	"yurenwan.com": 1,
	
	"yurun.com": 1,
	
	"yusuan.com": 1,
	
	"yutian.cc": 1,
	
	"yutong.com": 1,
	
	"yuxinews.com": 1,
	
	"yuzhicl.com": 1,
	
	"yw597.com": 1,
	
	"ywbb.com": 1,
	
	"yx-s.com": 1,
	
	"yx618.com": 1,
	
	"yx618.net": 1,
	
	"yxbao.com": 1,
	
	"yxcyh.com": 1,
	
	"yxdown.com": 1,
	
	"yxduo.com": 1,
	
	"yxi.cc": 1,
	
	"yxjy.net": 1,
	
	"yxlady.com": 1,
	
	"yxm.com": 1,
	
	"yxol.net": 1,
	
	"yxybb.com": 1,
	
	"yxyey.com": 1,
	
	"yxzoo.com": 1,
	
	"yy.com": 1,
	
	"yy138.com": 1,
	
	"yy7091.com": 1,
	
	"yy960.com": 1,
	
	"yyarea.com": 1,
	
	"yycqc.com": 1,
	
	"yyets.com": 1,
	
	"yyfad.com": 1,
	
	"yyfdcw.com": 1,
	
	"yyfeicui.com": 1,
	
	"yyjia.com": 1,
	
	"yylm.org": 1,
	
	"yypxcn.com": 1,
	
	"yyqcw.com": 1,
	
	"yyrtv.com": 1,
	
	"yysgsp.com": 1,
	
	"yyt360.com": 1,
	
	"yytcdn.com": 1,
	
	"yyyqqq.com": 1,
	
	"yyyyba.com": 1,
	
	"yyzs.net": 1,
	
	"yzdiaoyu.com": 1,
	
	"yzdjbh.com": 1,
	
	"yzedu.net": 1,
	
	"yzfcw.com": 1,
	
	"yzforex.com": 1,
	
	"yzqcw.com": 1,
	
	"yzrc.com": 1,
	
	"yzw.cc": 1,
	
	"yzwb.com": 1,
	
	"yzwb.net": 1,
	
	"yzxw.com": 1,
	
	"yzydt.com": 1,
	
	"z-china.com": 1,
	
	"z4bbs.com": 1,
	
	"z699.com": 1,
	
	"za169.com": 1,
	
	"zailine.net": 1,
	
	"zajy.net": 1,
	
	"zampda.net": 1,
	
	"zangao.com": 1,
	
	"zangyaofang.com": 1,
	
	"zanzw.com": 1,
	
	"zaoche168.com": 1,
	
	"zaojiao.com": 1,
	
	"zaoyang.org": 1,
	
	"zastatic.com": 1,
	
	"zbcars.com": 1,
	
	"zbedu.net": 1,
	
	"zbhouse.com": 1,
	
	"zbinfo.net": 1,
	
	"zbird.com": 1,
	
	"zbjimg.com": 1,
	
	"zblogcn.com": 1,
	
	"zbnews.net": 1,
	
	"zc85.com": 1,
	
	"zcheer.com": 1,
	
	"zcjob88.com": 1,
	
	"zcmechanic.com": 1,
	
	"zcom.com": 1,
	
	"zcool.com.cn": 1,
	
	"zcrcw.com": 1,
	
	"zcwz.com": 1,
	
	"zdface.com": 1,
	
	"zdfans.com": 1,
	
	"zdiao.com": 1,
	
	"zdic.net": 1,
	
	"zdmimg.com": 1,
	
	"zdreport.com": 1,
	
	"zentao.net": 1,
	
	"zf875.com": 1,
	
	"zf9918.com": 1,
	
	"zg0543.com": 1,
	
	"zg163.net": 1,
	
	"zg5.cc": 1,
	
	"zgba.org": 1,
	
	"zgbfw.com": 1,
	
	"zgbm.com": 1,
	
	"zgchangfang.com": 1,
	
	"zgchawang.com": 1,
	
	"zgcmlm.com": 1,
	
	"zgcqxs.net": 1,
	
	"zgcwrc.com": 1,
	
	"zgdhy.com": 1,
	
	"zgdjyj.com": 1,
	
	"zgdrive.com": 1,
	
	"zgftjg.com": 1,
	
	"zgfznews.com": 1,
	
	"zgfzrc.com": 1,
	
	"zggjj.com": 1,
	
	"zggwyw.com": 1,
	
	"zghgrc.com": 1,
	
	"zghmjjw.com": 1,
	
	"zghmsc.com": 1,
	
	"zghqcy.com": 1,
	
	"zgjczzw.com": 1,
	
	"zgjf168.com": 1,
	
	"zgjhjy.com": 1,
	
	"zgjjc.com": 1,
	
	"zgjjclw.com": 1,
	
	"zgjkcyw.com": 1,
	
	"zgjm.org": 1,
	
	"zgjrrc.com": 1,
	
	"zgjsks.com": 1,
	
	"zgjsw.com": 1,
	
	"zgjtb.com": 1,
	
	"zgjxrc.com": 1,
	
	"zgjy.org": 1,
	
	"zgjzlw.com": 1,
	
	"zgjzy.org": 1,
	
	"zgkjzx.com": 1,
	
	"zgkqw.com": 1,
	
	"zglbw.net": 1,
	
	"zglqw.com": 1,
	
	"zglxw.com": 1,
	
	"zglyfzw.com": 1,
	
	"zgmjrc.com": 1,
	
	"zgmod.com": 1,
	
	"zgnhzx.com": 1,
	
	"zgnt.net": 1,
	
	"zgong.com": 1,
	
	"zgpinche.com": 1,
	
	"zgpingshu.com": 1,
	
	"zgppny.com": 1,
	
	"zgqcrc.com": 1,
	
	"zgqczj.com": 1,
	
	"zgqpc.com": 1,
	
	"zgqw.com": 1,
	
	"zgqxn.com": 1,
	
	"zgrcjyw.com": 1,
	
	"zgrcw.com": 1,
	
	"zgsbzlcy.com": 1,
	
	"zgsc123.com": 1,
	
	"zgshengsi.com": 1,
	
	"zgshfljjh.org": 1,
	
	"zgsprc.com": 1,
	
	"zgsxzs.com": 1,
	
	"zgsyb.com": 1,
	
	"zgsydw.com": 1,
	
	"zgtnzx.com": 1,
	
	"zgwdq.com": 1,
	
	"zgwlrc.com": 1,
	
	"zgwmrc.com": 1,
	
	"zgwys.net": 1,
	
	"zgxzw.com": 1,
	
	"zgycrc.com": 1,
	
	"zgycwx.com": 1,
	
	"zgyey.com": 1,
	
	"zgyyrc.com": 1,
	
	"zgza.com": 1,
	
	"zgzcw.com": 1,
	
	"zgznh.com": 1,
	
	"zgzx114.com": 1,
	
	"zgzxzsw.com": 1,
	
	"zh-hr.com": 1,
	
	"zh-hz.com": 1,
	
	"zh-sc.com": 1,
	
	"zh28.com": 1,
	
	"zh51home.com": 1,
	
	"zh853.com": 1,
	
	"zhan.com": 1,
	
	"zhanggame.com": 1,
	
	"zhangjk.com": 1,
	
	"zhangli.net": 1,
	
	"zhangpu597.com": 1,
	
	"zhangyao.name": 1,
	
	"zhanqi.tv": 1,
	
	"zhanzhang.net": 1,
	
	"zhaocaihr.com": 1,
	
	"zhaochafa.com": 1,
	
	"zhaodao123.com": 1,
	
	"zhaojin97.cn": 1,
	
	"zhaokao.net": 1,
	
	"zhaokaoku.com": 1,
	
	"zhaokuaidi.org": 1,
	
	"zhaoming.biz": 1,
	
	"zhaopin.com": 1,
	
	"zhaopinhui.org": 1,
	
	"zhaopinxitong.com": 1,
	
	"zhaoshang-sh.com": 1,
	
	"zhaoshang.net": 1,
	
	"zhaoshang01.com": 1,
	
	"zhaoshang100.com": 1,
	
	"zhaoshang800.com": 1,
	
	"zhaoshangbao.com": 1,
	
	"zhaosheng.com": 1,
	
	"zhaotie.com": 1,
	
	"zhaoyang.org": 1,
	
	"zhazhi.com": 1,
	
	"zhbiao.com": 1,
	
	"zhbit.com": 1,
	
	"zhcoo.com": 1,
	
	"zhcpic.com": 1,
	
	"zhcw.com": 1,
	
	"zhe800.com": 1,
	
	"zhecheng.net": 1,
	
	"zhefun.com": 1,
	
	"zhejiangrc.com": 1,
	
	"zhenai.com": 1,
	
	"zhenai77.com": 1,
	
	"zhenews.com": 1,
	
	"zhenfangyuan.com": 1,
	
	"zhengtongedu.com": 1,
	
	"zhengwutong.com": 1,
	
	"zhengzhoubus.com": 1,
	
	"zhengzhoudongyang.com": 1,
	
	"zhengzhoulvxing.com": 1,
	
	"zhenpin.com": 1,
	
	"zhenping.tv": 1,
	
	"zheyibu.com": 1,
	
	"zhgnews.com": 1,
	
	"zhhdq.com": 1,
	
	"zhhtd.com": 1,
	
	"zhi.hu": 1,
	
	"zhibo8.cc": 1,
	
	"zhibo8.com": 1,
	
	"zhiboche.com": 1,
	
	"zhicheng.com": 1,
	
	"zhidian.com": 1,
	
	"zhiding8.com": 1,
	
	"zhidiy.com": 1,
	
	"zhifang.com": 1,
	
	"zhifujing.org": 1,
	
	"zhigame.com": 1,
	
	"zhige.net": 1,
	
	"zhigou.com": 1,
	
	"zhihu.com": 1,
	
	"zhiji.com": 1,
	
	"zhijia.com": 1,
	
	"zhijinsteel.com": 1,
	
	"zhijinwang.com": 1,
	
	"zhileng.com": 1,
	
	"zhimantian.com": 1,
	
	"zhimg.com": 1,
	
	"zhitechan.com": 1,
	
	"zhituad.com": 1,
	
	"zhiweiwenshi.com": 1,
	
	"zhixiaoren.com": 1,
	
	"zhixiaorenurl.com": 1,
	
	"zhixuan.com": 1,
	
	"zhiye.com": 1,
	
	"zhiyoula.com": 1,
	
	"zhiyuanyun.com": 1,
	
	"zhizhen.com": 1,
	
	"zhiziyun.com": 1,
	
	"zhjy.net": 1,
	
	"zhld.com": 1,
	
	"zhmmw.net": 1,
	
	"zhnews.net": 1,
	
	"zhong-yao.net": 1,
	
	"zhongbuauto.com": 1,
	
	"zhongjiao.net": 1,
	
	"zhongkao.com": 1,
	
	"zhonglongmotor.com": 1,
	
	"zhongshangwang.com": 1,
	
	"zhongso.com": 1,
	
	"zhongsou.com": 1,
	
	"zhongsou.net": 1,
	
	"zhongxingift.com": 1,
	
	"zhongyidong.com": 1,
	
	"zhongzhourc.com": 1,
	
	"zhongzhuan.org": 1,
	
	"zhrmms.com": 1,
	
	"zhsho.com": 1,
	
	"zhsnxy.com": 1,
	
	"zhsti.net": 1,
	
	"zhtool.com": 1,
	
	"zhtv.com": 1,
	
	"zhuangjiba.com": 1,
	
	"zhuangku.com": 1,
	
	"zhuangpin.com": 1,
	
	"zhuannet.com": 1,
	
	"zhuantiku.com": 1,
	
	"zhuapo.com": 1,
	
	"zhuaxia.com": 1,
	
	"zhubaijia.com": 1,
	
	"zhubajie.com": 1,
	
	"zhugeio.com": 1,
	
	"zhuicun.com": 1,
	
	"zhujia360.com": 1,
	
	"zhujiangrc.com": 1,
	
	"zhujiangroad.com": 1,
	
	"zhujike.com": 1,
	
	"zhuke.com": 1,
	
	"zhulang.com": 1,
	
	"zhulituan.com": 1,
	
	"zhulong.com": 1,
	
	"zhuokearts.com": 1,
	
	"zhuoku.com": 1,
	
	"zhuqike.com": 1,
	
	"zhuwang.cc": 1,
	
	"zhuzao.com": 1,
	
	"zhuzaohr.com": 1,
	
	"zhuzhouwang.com": 1,
	
	"zhwdw.com": 1,
	
	"zhxjyw.com": 1,
	
	"zhxww.net": 1,
	
	"zhyedu.com": 1,
	
	"zhyw.net": 1,
	
	"zhzyw.org": 1,
	
	"zibosky.com": 1,
	
	"zijiayoucn.com": 1,
	
	"zikao1688.com": 1,
	
	"zikao365.com": 1,
	
	"zimilan.com": 1,
	
	"zimingpian.com": 1,
	
	"zimuzu.tv": 1,
	
	"ziroom.com": 1,
	
	"zisha.com": 1,
	
	"zisuyouw.com": 1,
	
	"zitichina.com": 1,
	
	"ziuziu.net": 1,
	
	"zixia.com": 1,
	
	"zj.com": 1,
	
	"zj121.com": 1,
	
	"zj123.com": 1,
	
	"zj315.org": 1,
	
	"zj60.com": 1,
	
	"zj9.com": 1,
	
	"zjbar.com": 1,
	
	"zjcheshi.com": 1,
	
	"zjcoal.com": 1,
	
	"zjcoop.com": 1,
	
	"zjcyts.com": 1,
	
	"zjcyts.net": 1,
	
	"zjedu.org": 1,
	
	"zjfishing.net": 1,
	
	"zjftu.org": 1,
	
	"zjgqt.org": 1,
	
	"zjhnedu.com": 1,
	
	"zjhq.com": 1,
	
	"zjjd.org": 1,
	
	"zjjsepc.com": 1,
	
	"zjjta.com": 1,
	
	"zjjys.org": 1,
	
	"zjjyzx.com": 1,
	
	"zjk169.net": 1,
	
	"zjkinfo.net": 1,
	
	"zjknews.com": 1,
	
	"zjkonline.com": 1,
	
	"zjks.com": 1,
	
	"zjlottery.com": 1,
	
	"zjlscourt.com": 1,
	
	"zjlsedu.org": 1,
	
	"zjmj.org": 1,
	
	"zjnw.net": 1,
	
	"zjolcdn.com": 1,
	
	"zjpark.com": 1,
	
	"zjphis.com": 1,
	
	"zjpse.com": 1,
	
	"zjrc.com": 1,
	
	"zjrw.com": 1,
	
	"zjrxz.com": 1,
	
	"zjscedu.org": 1,
	
	"zjstv.com": 1,
	
	"zjtcm.net": 1,
	
	"zjtcn.com": 1,
	
	"zjtxedu.org": 1,
	
	"zjwater.com": 1,
	
	"zjwchc.com": 1,
	
	"zjwmw.com": 1,
	
	"zjwu.net": 1,
	
	"zjxf119.com": 1,
	
	"zjxxt.com": 1,
	
	"zjyhtour.com": 1,
	
	"zjypw.com": 1,
	
	"zjzcj.com": 1,
	
	"zjzj.net": 1,
	
	"zjzj.org": 1,
	
	"zjzs.net": 1,
	
	"zk5u.com": 1,
	
	"zk71.com": 1,
	
	"zk789.net": 1,
	
	"zkpeace.org": 1,
	
	"zkxww.com": 1,
	
	"zlhome.com": 1,
	
	"zljob.net": 1,
	
	"zlt365.com": 1,
	
	"zmd5.com": 1,
	
	"zmingcx.com": 1,
	
	"zmnedu.com": 1,
	
	"zmsc.cc": 1,
	
	"znds.com": 1,
	
	"znhr.com": 1,
	
	"znimg.com": 1,
	
	"znxkw.com": 1,
	
	"znyj365.com": 1,
	
	"zocai.com": 1,
	
	"zohi.tv": 1,
	
	"zoioo.com": 1,
	
	"zol.com": 1,
	
	"zol.com.cn": 1,
	
	"zongheng.com": 1,
	
	"zongsifang.com": 1,
	
	"zoomlion.com": 1,
	
	"zoopda.com": 1,
	
	"zoosnet.net": 1,
	
	"zoossoft.com": 1,
	
	"zoossoft.net": 1,
	
	"zp365.com": 1,
	
	"zp515.com": 1,
	
	"zp666.com": 1,
	
	"zpb365.com": 1,
	
	"zplm.com": 1,
	
	"zprc.net": 1,
	
	"zpzj.com": 1,
	
	"zq6.com": 1,
	
	"zq8.net": 1,
	
	"zqgame.com": 1,
	
	"zqzq.com": 1,
	
	"zr597.com": 1,
	
	"zr98.com": 1,
	
	"zs30.com": 1,
	
	"zs310.com": 1,
	
	"zsbicycle.com": 1,
	
	"zsedu.net": 1,
	
	"zsezt.com": 1,
	
	"zshl.com": 1,
	
	"zshouyou.com": 1,
	
	"zshyqx.com": 1,
	
	"zslz.com": 1,
	
	"zsnet.com": 1,
	
	"zsnets.com": 1,
	
	"zssl.net": 1,
	
	"zssou.com": 1,
	
	"zst365.com": 1,
	
	"zstx88.com": 1,
	
	"zt5.com": 1,
	
	"ztedu.com": 1,
	
	"ztgame.com": 1,
	
	"ztnews.net": 1,
	
	"ztsfc.com": 1,
	
	"ztsfc.net": 1,
	
	"zuche.com": 1,
	
	"zuchecdn.com": 1,
	
	"zuchezu.com": 1,
	
	"zudong.com": 1,
	
	"zufang.com": 1,
	
	"zugame.com": 1,
	
	"zugou.com": 1,
	
	"zuiyou.com": 1,
	
	"zuiyouxi.com": 1,
	
	"zujuan.com": 1,
	
	"zuk.cn": 1,
	
	"zulinbao.com": 1,
	
	"zunhua.org": 1,
	
	"zunyiol.com": 1,
	
	"zuoche.com": 1,
	
	"zuojiaju.com": 1,
	
	"zuojiang.com": 1,
	
	"zuowen.com": 1,
	
	"zupuk.com": 1,
	
	"zupulu.com": 1,
	
	"zuzhirenshi.com": 1,
	
	"zuzuche.com": 1,
	
	"zwbk.org": 1,
	
	"zwcad.com": 1,
	
	"zwhz.com": 1,
	
	"zwtxnews.com": 1,
	
	"zx110.org": 1,
	
	"zx114w.com": 1,
	
	"zx185.com": 1,
	
	"zx79.com": 1,
	
	"zx915.com": 1,
	
	"zx98.com": 1,
	
	"zxdyw.com": 1,
	
	"zxfishing.com": 1,
	
	"zxhsd.com": 1,
	
	"zxip.com": 1,
	
	"zxiubbs.com": 1,
	
	"zxrcw.com": 1,
	
	"zxwbb.com": 1,
	
	"zxxk.com": 1,
	
	"zxyhw.com": 1,
	
	"zxzhijia.com": 1,
	
	"zy.com": 1,
	
	"zy12580.com": 1,
	
	"zy169.net": 1,
	
	"zycdxw.com": 1,
	
	"zycmmt.com": 1,
	
	"zycq.org": 1,
	
	"zyctd.com": 1,
	
	"zynews.com": 1,
	
	"zynw.com": 1,
	
	"zyqc.cc": 1,
	
	"zyrb.com": 1,
	
	"zyrc.net": 1,
	
	"zyt-life.com": 1,
	
	"zyue.com": 1,
	
	"zyuexc.com": 1,
	
	"zyxuan.org": 1,
	
	"zyzhan.com": 1,
	
	"zz361.com": 1,
	
	"zz51.com": 1,
	
	"zz597.com": 1,
	
	"zz91.com": 1,
	
	"zzbaike.com": 1,
	
	"zzbbs.com": 1,
	
	"zzbm.org": 1,
	
	"zzdd.net": 1,
	
	"zzdjw.com": 1,
	
	"zzfc.com": 1,
	
	"zzgjj.com": 1,
	
	"zzhcz.com": 1,
	
	"zzhmw.net": 1,
	
	"zzidc.com": 1,
	
	"zzist.net": 1,
	
	"zzjob88.com": 1,
	
	"zzjs.net": 1,
	
	"zzlwjy.com": 1,
	
	"zzol360.com": 1,
	
	"zzpgm.com": 1,
	
	"zzph.net": 1,
	
	"zzqifan.com": 1,
	
	"zzrc.net": 1,
	
	"zzsfjc.com": 1,
	
	"zzsr.com": 1,
	
	"zzstep.com": 1,
	
	"zztyedu.com": 1,
	
	"zzwljc.com": 1,
	
	"zzwms.com": 1,
	
	"zzyjs.com": 1,
	
	"zzyycc.com": 1,
	
	"zzz4.com": 1,
	
};



var cidrs = [
    
    [16777472,16777727],
	
    [16777728,16778239],
	
    [16779264,16781311],
	
    [16785408,16793599],
	
    [16842752,16843007],
	
    [16843264,16843775],
	
    [16843776,16844799],
	
    [16844800,16846847],
	
    [16846848,16850943],
	
    [16850944,16859135],
	
    [16908288,16908799],
	
    [16908800,16909055],
	
    [16909568,16909823],
	
    [16909824,16910335],
	
    [16910336,16912383],
	
    [16912384,16916479],
	
    [16916480,16924671],
	
    [16924672,16941055],
	
    [16973824,17039359],
	
    [17039616,17039871],
	
    [17039872,17040383],
	
    [17040384,17041407],
	
    [17041408,17043455],
	
    [17043456,17047551],
	
    [17047552,17055743],
	
    [17055744,17072127],
	
    [17301504,17317887],
	
    [17317888,17326079],
	
    [17326080,17327103],
	
    [17327104,17327615],
	
    [17330176,17334271],
	
    [17334272,17338367],
	
    [17338368,17339391],
	
    [17339392,17339903],
	
    [17340928,17341439],
	
    [17341440,17342463],
	
    [17342464,17350655],
	
    [17350656,17358847],
	
    [17358848,17362943],
	
    [17363968,17364991],
	
    [17364992,17367039],
	
    [17432576,17434623],
	
    [17434624,17435135],
	
    [17435392,17435647],
	
    [17435648,17436671],
	
    [17436672,17440767],
	
    [17440768,17448959],
	
    [17448960,17465343],
	
    [17563648,17825791],
	
    [18350080,18874367],
	
    [19726336,19791871],
	
    [19922944,20185087],
	
    [20447232,20971519],
	
    [21233664,21495807],
	
    [22020096,23068671],
	
    [24379392,24641535],
	
    [28573696,28835839],
	
    [28835840,28966911],
	
    [29097984,29360127],
	
    [29360128,29884415],
	
    [30015488,30146559],
	
    [30146560,30408703],
	
    [234881024,234883071],
	
    [234884096,234885119],
	
    [234946560,234947583],
	
    [234952704,234953727],
	
    [234974208,234975231],
	
    [235929600,236978175],
	
    [241598464,241599487],
	
    [241611776,241612799],
	
    [241631232,241696767],
	
    [241696768,242221055],
	
    [242221056,243269631],
	
    [243400704,243531775],
	
    [243662848,243793919],
	
    [244318208,245366783],
	
    [247478272,247480319],
	
    [247483392,247484415],
	
    [247726080,247857151],
	
    [248250368,248381439],
	
    [248512512,249561087],
	
    [344367104,344371199],
	
    [344694784,344698879],
	
    [453017600,453019647],
	
    [453025792,453027839],
	
    [453032960,453033983],
	
    [453509120,454033407],
	
    [454033408,455081983],
	
    [455272448,455274495],
	
    [455344128,455606271],
	
    [455606272,456130559],
	
    [456271872,456273919],
	
    [456294400,456327167],
	
    [456542208,456544255],
	
    [456562688,456564735],
	
    [456572928,456589311],
	
    [459460608,459464703],
	
    [459464704,459472895],
	
    [459505664,459538431],
	
    [459735040,459800575],
	
    [459964416,459980799],
	
    [459983872,459984895],
	
    [460136448,460144639],
	
    [460160000,460161023],
	
    [460324864,460341247],
	
    [460345344,460349439],
	
    [460353536,460355583],
	
    [460423168,460439551],
	
    [460521472,460554239],
	
    [460598272,460599295],
	
    [460933120,460935167],
	
    [460945408,460947455],
	
    [461373440,461504511],
	
    [461626368,461627391],
	
    [462422016,462487551],
	
    [462684160,462946303],
	
    [462946304,463470591],
	
    [465043456,465567743],
	
    [465567744,467664895],
	
    [467664896,467927039],
	
    [603979776,603980799],
	
    [603983872,603987967],
	
    [603987968,603996159],
	
    [603996160,604012543],
	
    [604012544,604045311],
	
    [604045312,604110847],
	
    [604241920,604504063],
	
    [605028352,606076927],
	
    [606076928,606339071],
	
    [606339072,606404607],
	
    [606404608,606412799],
	
    [606413824,606414335],
	
    [606414592,606414847],
	
    [606414848,606416895],
	
    [606416896,606420991],
	
    [606601216,607125503],
	
    [607125504,607256575],
	
    [607322112,607354879],
	
    [607354880,607371263],
	
    [607371264,607379455],
	
    [607379456,607383551],
	
    [607383552,607385599],
	
    [607385600,607386623],
	
    [607386624,607387135],
	
    [607649792,608174079],
	
    [610271232,612368383],
	
    [612368384,616562687],
	
    [616562688,618659839],
	
    [620232704,620494847],
	
    [620625920,620691455],
	
    [620721152,620722175],
	
    [620724224,620725247],
	
    [620733440,620734463],
	
    [620735488,620736511],
	
    [620736512,620737535],
	
    [654311424,654311679],
	
    [654311936,654312447],
	
    [654312448,654313471],
	
    [654313472,654315519],
	
    [654315520,654319615],
	
    [654319616,654327807],
	
    [654327808,654344191],
	
    [654344192,654376959],
	
    [658505728,660602879],
	
    [660602880,661127167],
	
    [661127168,661389311],
	
    [661389312,661454847],
	
    [662700032,666894335],
	
    [671133696,671137791],
	
    [671151872,671152127],
	
    [671152128,671153151],
	
    [671153152,671153663],
	
    [671153920,671154175],
	
    [675807232,675938303],
	
    [679313408,679346175],
	
    [679362560,679378943],
	
    [684067328,684067583],
	
    [684068864,684070911],
	
    [684070912,684071423],
	
    [687595776,687596031],
	
    [687596288,687596543],
	
    [704643072,704644095],
	
    [704645120,704647167],
	
    [704647168,704649215],
	
    [704649216,704650239],
	
    [704651264,704659455],
	
    [704675840,704708607],
	
    [704708608,704716799],
	
    [704716800,704720895],
	
    [704720896,704722943],
	
    [704722944,704723967],
	
    [704905216,705167359],
	
    [707788800,708313087],
	
    [708313088,708575231],
	
    [708706304,708739071],
	
    [708739072,708747263],
	
    [708747264,708751359],
	
    [708752384,708753407],
	
    [708753408,708755455],
	
    [708771840,708837375],
	
    [709885952,710017023],
	
    [710098944,710103039],
	
    [710103040,710104063],
	
    [710105088,710107135],
	
    [710107136,710115327],
	
    [710115328,710115839],
	
    [710116864,710117119],
	
    [710118400,710118655],
	
    [710118912,710119423],
	
    [710119424,710123519],
	
    [710123520,710131711],
	
    [710131712,710148095],
	
    [710148096,710410239],
	
    [710410240,710934527],
	
    [710950912,710959103],
	
    [710959104,710961151],
	
    [710962176,710963199],
	
    [710963200,710967295],
	
    [710967296,711000063],
	
    [711000064,711065599],
	
    [711131136,711147519],
	
    [711147520,711155711],
	
    [711155712,711159807],
	
    [711159808,711160831],
	
    [711161856,711163903],
	
    [711196672,711458815],
	
    [712507392,712638463],
	
    [712638464,712703999],
	
    [712704000,712712191],
	
    [712713216,712714239],
	
    [712714240,712716287],
	
    [712716288,712720383],
	
    [712720384,712736767],
	
    [712736768,712769535],
	
    [713031680,714080255],
	
    [714866688,714874879],
	
    [714875904,714876927],
	
    [714876928,714878975],
	
    [714878976,714883071],
	
    [714883072,714899455],
	
    [714899456,714932223],
	
    [714932224,714997759],
	
    [714997760,715128831],
	
    [715128832,716177407],
	
    [716177408,716701695],
	
    [716701696,716832767],
	
    [716832768,716898303],
	
    [716898304,716914687],
	
    [716914688,716922879],
	
    [716922880,716926975],
	
    [716926976,716929023],
	
    [716929024,716930047],
	
    [716931072,716963839],
	
    [717225984,717750271],
	
    [717815808,717848575],
	
    [717881344,718012415],
	
    [718012416,718274559],
	
    [718274560,719323135],
	
    [719323136,720371711],
	
    [720371712,720437247],
	
    [720502784,720633855],
	
    [720633856,720764927],
	
    [720764928,720830463],
	
    [720830464,720831487],
	
    [720831488,720831743],
	
    [720831744,720831871],
	
    [720831872,720831935],
	
    [720831948,720831951],
	
    [720831952,720831967],
	
    [720831968,720831999],
	
    [720832000,720832511],
	
    [720832512,720834559],
	
    [720834560,720838655],
	
    [720838656,720846847],
	
    [720846848,720863231],
	
    [720863232,720895999],
	
    [720896000,721420287],
	
    [736103424,736104447],
	
    [736106496,736107519],
	
    [736111616,736112639],
	
    [736113664,736114687],
	
    [736114688,736115711],
	
    [736116736,736118783],
	
    [736118784,736119807],
	
    [736120832,736121855],
	
    [736125952,736126975],
	
    [736137216,736138239],
	
    [736141312,736142335],
	
    [736145408,736146431],
	
    [736147456,736148479],
	
    [736151552,736153599],
	
    [736153600,736155647],
	
    [736155648,736156671],
	
    [736161792,736162815],
	
    [736185344,736186367],
	
    [736187392,736188415],
	
    [736196608,736197631],
	
    [736211968,736212991],
	
    [736212992,736214015],
	
    [736219136,736220159],
	
    [736221184,736223231],
	
    [736223232,736227327],
	
    [736227328,736229375],
	
    [736230400,736231423],
	
    [736239616,736247807],
	
    [736247808,736255999],
	
    [736256000,736260095],
	
    [736260096,736262143],
	
    [736262144,736263167],
	
    [736264192,736272383],
	
    [736272384,736274431],
	
    [736291840,736292863],
	
    [736292864,736296959],
	
    [736296960,736299007],
	
    [736299008,736300031],
	
    [736305152,736313343],
	
    [736313344,736321535],
	
    [736323584,736324607],
	
    [736331776,736333823],
	
    [736333824,736334847],
	
    [736335872,736337919],
	
    [736337920,736342015],
	
    [736342016,736344063],
	
    [736345088,736346111],
	
    [736346112,736354303],
	
    [736356352,736357375],
	
    [736360448,736362495],
	
    [736362496,736378879],
	
    [736378880,736380927],
	
    [736381952,736382975],
	
    [736388096,736389119],
	
    [736392192,736393215],
	
    [736396288,736397311],
	
    [736397312,736398335],
	
    [736400384,736401407],
	
    [736401408,736402431],
	
    [736410624,736411647],
	
    [736438272,736439295],
	
    [736442368,736443391],
	
    [736452608,736453631],
	
    [736462848,736464895],
	
    [736471040,736473087],
	
    [736473088,736477183],
	
    [736477184,736479231],
	
    [736483328,736485375],
	
    [736487424,736489471],
	
    [736498688,736499711],
	
    [736501760,736502783],
	
    [736510976,736511999],
	
    [736512000,736513023],
	
    [736515072,736516095],
	
    [736525312,736526335],
	
    [736549888,736550911],
	
    [736550912,736559103],
	
    [736562176,736563199],
	
    [736567296,736571391],
	
    [736579584,736583679],
	
    [736583680,736587775],
	
    [736593920,736595967],
	
    [736595968,736600063],
	
    [736600064,736604159],
	
    [736604160,736606207],
	
    [736886784,737017855],
	
    [737017856,737083391],
	
    [737083392,737091583],
	
    [737091584,737095679],
	
    [737095680,737096703],
	
    [737113088,737114111],
	
    [737114112,737115135],
	
    [737127424,737128447],
	
    [737148928,737149951],
	
    [737163264,737165311],
	
    [737166336,737167359],
	
    [737167360,737169407],
	
    [737170432,737171455],
	
    [737180672,737181695],
	
    [737181696,737183743],
	
    [737183744,737184767],
	
    [737188864,737189887],
	
    [737189888,737198079],
	
    [737198080,737206271],
	
    [737210368,737214463],
	
    [737214464,737218559],
	
    [737218560,737220607],
	
    [737226752,737227775],
	
    [737233920,737234943],
	
    [737234944,737239039],
	
    [737243136,737244159],
	
    [737257472,737259519],
	
    [737259520,737261567],
	
    [737261568,737262591],
	
    [737267712,737271807],
	
    [737271808,737275903],
	
    [737275904,737276927],
	
    [737277952,737278975],
	
    [737282048,737284095],
	
    [737284096,737288191],
	
    [737292288,737296383],
	
    [737296384,737297407],
	
    [737298432,737300479],
	
    [737300480,737304575],
	
    [737304576,737305599],
	
    [737316864,737320959],
	
    [737320960,737323007],
	
    [737326080,737327103],
	
    [737328128,737329151],
	
    [737329152,737331199],
	
    [737332224,737333247],
	
    [737335296,737337343],
	
    [737344512,737345535],
	
    [737346560,737347583],
	
    [737347584,737349631],
	
    [737349632,737350655],
	
    [737368064,737369087],
	
    [737378304,737379327],
	
    [737380352,737381375],
	
    [737382400,737384447],
	
    [737385472,737386495],
	
    [737391616,737392639],
	
    [737403904,737404927],
	
    [737404928,737405951],
	
    [737408000,737409023],
	
    [737542144,737558527],
	
    [737558528,737566719],
	
    [737566720,737567743],
	
    [737600512,737601535],
	
    [737608704,737609727],
	
    [737609728,737610751],
	
    [737618944,737619967],
	
    [737619968,737620991],
	
    [737625088,737626111],
	
    [737627136,737628159],
	
    [737629184,737630207],
	
    [737630208,737632255],
	
    [737632256,737634303],
	
    [737635328,737636351],
	
    [737636352,737637375],
	
    [737645568,737646591],
	
    [737646592,737647615],
	
    [737652736,737656831],
	
    [737657856,737658879],
	
    [737658880,737660927],
	
    [737660928,737665023],
	
    [737665024,737673215],
	
    [737673216,737675263],
	
    [737678336,737679359],
	
    [737680384,737681407],
	
    [737685504,737686527],
	
    [737692672,737693695],
	
    [737693696,737697791],
	
    [737697792,737705983],
	
    [737705984,737710079],
	
    [737710080,737712127],
	
    [737718272,737722367],
	
    [737722368,737726463],
	
    [737726464,737727487],
	
    [737731584,737732607],
	
    [737732608,737733631],
	
    [737735680,737736703],
	
    [737739776,737740799],
	
    [737769472,737770495],
	
    [737772544,737773567],
	
    [737773568,737774591],
	
    [737775616,737779711],
	
    [737779712,737781759],
	
    [737781760,737782783],
	
    [737787904,737788927],
	
    [737799168,737800191],
	
    [737805312,737806335],
	
    [737807360,737808383],
	
    [737808384,737810431],
	
    [737811456,737812479],
	
    [737812480,737813503],
	
    [737828864,737832959],
	
    [737832960,737835007],
	
    [737837056,737838079],
	
    [737841152,737843199],
	
    [737845248,737846271],
	
    [737847296,737848319],
	
    [737849344,737850367],
	
    [737855488,737856511],
	
    [737858560,737859583],
	
    [737859584,737861631],
	
    [737864704,737865727],
	
    [737866752,737867775],
	
    [737870848,737871871],
	
    [737872896,737873919],
	
    [737879040,737880063],
	
    [737895424,737896447],
	
    [737918976,737919999],
	
    [737929216,737930239],
	
    [737932288,737933311],
	
    [737947648,737948671],
	
    [737949696,737950719],
	
    [737992704,737993727],
	
    [738066432,738068479],
	
    [738068480,738069503],
	
    [738072576,738073599],
	
    [738075648,738076671],
	
    [738077696,738078719],
	
    [738079744,738080767],
	
    [738082816,738083839],
	
    [738084864,738085887],
	
    [738087936,738088959],
	
    [738088960,738091007],
	
    [738092032,738093055],
	
    [738093056,738094079],
	
    [738095104,738097151],
	
    [738099200,738100223],
	
    [738101248,738103295],
	
    [738103296,738107391],
	
    [738109440,738111487],
	
    [738112512,738113535],
	
    [738113536,738115583],
	
    [738115584,738116607],
	
    [738117632,738118655],
	
    [738119680,738120703],
	
    [738122752,738123775],
	
    [738123776,738127871],
	
    [738127872,738128895],
	
    [738129920,738131967],
	
    [738131968,738134015],
	
    [738134016,738135039],
	
    [738136064,738137087],
	
    [738144256,738145279],
	
    [738148352,738152447],
	
    [738153472,738154495],
	
    [738156544,738157567],
	
    [738168832,738169855],
	
    [738177024,738178047],
	
    [738179072,738180095],
	
    [738181120,738182143],
	
    [738183168,738185215],
	
    [738185216,738187263],
	
    [738189312,738191359],
	
    [738191360,738192383],
	
    [738194432,738195455],
	
    [757645312,757661695],
	
    [759238656,759242751],
	
    [762348544,762349567],
	
    [762362880,762363903],
	
    [762368000,762369023],
	
    [762370048,762372095],
	
    [762373120,762374143],
	
    [762374144,762376191],
	
    [762383360,762384383],
	
    [762384384,762388479],
	
    [762390528,762391551],
	
    [762393600,762394623],
	
    [762398720,762399743],
	
    [762417152,762419199],
	
    [762423296,762424319],
	
    [762427392,762428415],
	
    [762431488,762433535],
	
    [762433536,762437631],
	
    [762438656,762439679],
	
    [762441728,762442751],
	
    [762444800,762445823],
	
    [762445824,762446847],
	
    [762454016,762455039],
	
    [762456064,762457087],
	
    [762459136,762460159],
	
    [762470400,762471423],
	
    [762477568,762478591],
	
    [762480640,762481663],
	
    [762496000,762497023],
	
    [762497024,762498047],
	
    [762504192,762505215],
	
    [762506240,762507263],
	
    [762510336,762511359],
	
    [762522624,762523647],
	
    [762536960,762537983],
	
    [762542080,762543103],
	
    [762545152,762546175],
	
    [762548224,762549247],
	
    [762551296,762552319],
	
    [762553344,762554367],
	
    [762562560,762563583],
	
    [762565632,762566655],
	
    [762566656,762567679],
	
    [762573824,762574847],
	
    [762574848,762575871],
	
    [762580992,762583039],
	
    [762583040,762584063],
	
    [762585088,762587135],
	
    [762590208,762591231],
	
    [762601472,762603519],
	
    [762612736,762613759],
	
    [762615808,762616831],
	
    [762630144,762631167],
	
    [762644480,762645503],
	
    [762647552,762648575],
	
    [762659840,762660863],
	
    [762674176,762675199],
	
    [762706944,762707967],
	
    [762788864,762789887],
	
    [762789888,762791935],
	
    [762791936,762792959],
	
    [762800128,762801151],
	
    [762832896,762833919],
	
    [762864640,762865663],
	
    [762874880,762875903],
	
    [762881024,762882047],
	
    [762900480,762901503],
	
    [762917888,762918911],
	
    [762920960,762923007],
	
    [762923008,762924031],
	
    [762928128,762929151],
	
    [762929152,762930175],
	
    [762948608,762949631],
	
    [762949632,762950655],
	
    [762966016,762970111],
	
    [762970112,762978303],
	
    [762978304,762980351],
	
    [762980352,762981375],
	
    [762985472,762986495],
	
    [762986496,762994687],
	
    [762994688,762998783],
	
    [762998784,763000831],
	
    [763011072,763019263],
	
    [763019264,763023359],
	
    [763023360,763025407],
	
    [763025408,763026431],
	
    [763042816,763043839],
	
    [763043840,763045887],
	
    [763046912,763047935],
	
    [763047936,763052031],
	
    [763052032,763056127],
	
    [763056128,763058175],
	
    [763066368,763067391],
	
    [763068416,763070463],
	
    [763070464,763071487],
	
    [763073536,763074559],
	
    [763074560,763076607],
	
    [763077632,763078655],
	
    [763078656,763080703],
	
    [763080704,763082751],
	
    [763082752,763083775],
	
    [763087872,763088895],
	
    [763089920,763090943],
	
    [763092992,763101183],
	
    [763101184,763102207],
	
    [763106304,763107327],
	
    [763108352,763109375],
	
    [763109376,763111423],
	
    [763112448,763113471],
	
    [763118592,763119615],
	
    [763120640,763121663],
	
    [763121664,763122687],
	
    [763126784,763127807],
	
    [763132928,763133951],
	
    [763145216,763146239],
	
    [763146240,763147263],
	
    [763154432,763155455],
	
    [763164672,763165695],
	
    [763172864,763173887],
	
    [763177984,763179007],
	
    [763180032,763181055],
	
    [763181056,763182079],
	
    [763186176,763187199],
	
    [763187200,763191295],
	
    [763191296,763193343],
	
    [763201536,763202559],
	
    [763244544,763246591],
	
    [763259904,763260927],
	
    [763260928,763262975],
	
    [763262976,763263999],
	
    [763288576,763289599],
	
    [763299840,763301887],
	
    [763330560,763331583],
	
    [763334656,763336703],
	
    [763337728,763338751],
	
    [771229696,771230719],
	
    [771248128,771249151],
	
    [771250176,771251199],
	
    [771252224,771256319],
	
    [771260416,771262463],
	
    [771279872,771280895],
	
    [771280896,771284991],
	
    [771284992,771293183],
	
    [771293184,771295231],
	
    [771296256,771297279],
	
    [771297280,771301375],
	
    [771301376,771303423],
	
    [771321856,771322879],
	
    [771341312,771342335],
	
    [771342336,771346431],
	
    [771346432,771348479],
	
    [771361792,771362815],
	
    [771362816,771363839],
	
    [771365888,771366911],
	
    [771366912,771368959],
	
    [771368960,771369983],
	
    [771378176,771379199],
	
    [771379200,771383295],
	
    [771383296,771384319],
	
    [771385344,771387391],
	
    [771387392,771391487],
	
    [771391488,771395583],
	
    [771395584,771397631],
	
    [771397632,771398655],
	
    [771400704,771401727],
	
    [771404800,771405823],
	
    [771405824,771407871],
	
    [771407872,771408895],
	
    [771424256,771425279],
	
    [771426304,771427327],
	
    [771428352,771430399],
	
    [771437568,771438591],
	
    [771445760,771446783],
	
    [771446784,771448831],
	
    [771448832,771450879],
	
    [771454976,771457023],
	
    [771459072,771461119],
	
    [771461120,771465215],
	
    [771465216,771473407],
	
    [771473408,771481599],
	
    [771481600,771482623],
	
    [771489792,771497983],
	
    [771497984,771502079],
	
    [771502080,771503103],
	
    [771511296,771512319],
	
    [771512320,771514367],
	
    [771514368,771522559],
	
    [771522560,771530751],
	
    [771530752,771534847],
	
    [771534848,771535871],
	
    [771538944,771547135],
	
    [771547136,771549183],
	
    [771549184,771550207],
	
    [771555328,771571711],
	
    [771571712,771575807],
	
    [771575808,771577855],
	
    [771578880,771579903],
	
    [771579904,771583999],
	
    [771584000,771586047],
	
    [771586048,771587071],
	
    [771588608,771589119],
	
    [771589120,771590143],
	
    [771590144,771592191],
	
    [771592192,771596287],
	
    [771596288,771604479],
	
    [771604480,771620863],
	
    [771620864,771624959],
	
    [771624960,771627007],
	
    [771628032,771629055],
	
    [771631104,771632127],
	
    [771633152,771637247],
	
    [771637248,771653631],
	
    [771653632,771670015],
	
    [771670016,771678207],
	
    [771678208,771680255],
	
    [771681280,771682303],
	
    [771682304,771683327],
	
    [771684352,771685375],
	
    [771686400,771702783],
	
    [771702784,771710975],
	
    [771710976,771715071],
	
    [771715072,771717119],
	
    [771717120,771718143],
	
    [771721216,771723263],
	
    [771723264,771727359],
	
    [771727360,771735551],
	
    [771735552,771743743],
	
    [771743744,771747839],
	
    [771747840,771749887],
	
    [771749888,771750911],
	
    [788011008,788011519],
	
    [794558464,794820607],
	
    [794820608,796917759],
	
    [805076992,805109759],
	
    [822345728,822607871],
	
    [825440256,825441279],
	
    [825441280,825441791],
	
    [825442304,825458687],
	
    [825464320,825464831],
	
    [825464832,825466879],
	
    [825466880,825475071],
	
    [825475072,825491455],
	
    [825491456,825753599],
	
    [826277888,828375039],
	
    [829423616,829947903],
	
    [829947904,830210047],
	
    [830472192,830472447],
	
    [830472704,830473215],
	
    [830473216,830474239],
	
    [831258624,831389695],
	
    [832045056,832307199],
	
    [835715072,835977215],
	
    [836501504,836763647],
	
    [837287936,837550079],
	
    [837746688,837763071],
	
    [837795840,837812223],
	
    [877658112,877789183],
	
    [877837056,877837311],
	
    [877837312,877838335],
	
    [877838336,877854719],
	
    [877854720,877920255],
	
    [878639360,878639391],
	
    [920518656,920649727],
	
    [921161728,921165823],
	
    [921755648,921755903],
	
    [962355200,962359295],
	
    [973996032,974127103],
	
    [974127104,974651391],
	
    [974651392,974782463],
	
    [975044608,975175679],
	
    [975175680,977272831],
	
    [977397760,977399807],
	
    [977403904,977534975],
	
    [977567744,977575935],
	
    [977575936,977576447],
	
    [977576704,977576959],
	
    [977576960,977577983],
	
    [977580800,977581055],
	
    [977581056,977581311],
	
    [977586176,977588223],
	
    [977588224,977592319],
	
    [977592320,977600511],
	
    [978452480,978485247],
	
    [978518016,978583551],
	
    [978796544,978812927],
	
    [979599360,979632127],
	
    [979632128,979763199],
	
    [980680704,980942847],
	
    [981467136,981991423],
	
    [982515712,982581247],
	
    [983171072,983302143],
	
    [985661440,987758591],
	
    [988807168,989855743],
	
    [991952896,994050047],
	
    [994050048,995098623],
	
    [995098624,995229695],
	
    [995229696,995262463],
	
    [995262464,995278847],
	
    [995278848,995287039],
	
    [995287040,995291135],
	
    [995291136,995292159],
	
    [995293184,995295231],
	
    [995295232,995311615],
	
    [995328000,995360767],
	
    [996868096,996933631],
	
    [996933632,997064703],
	
    [997064704,997130239],
	
    [997130240,997163007],
	
    [997163008,997179391],
	
    [997179392,997187583],
	
    [997187584,997191679],
	
    [997191680,997193727],
	
    [997193728,997194751],
	
    [997194752,997195263],
	
    [997195520,997195775],
	
    [999751680,999784447],
	
    [999821312,999825407],
	
    [999826432,999827455],
	
    [999833600,999837695],
	
    [999845888,999847935],
	
    [999883776,999884799],
	
    [999890944,999891967],
	
    [999899136,999901183],
	
    [999901184,999902207],
	
    [999906304,999907327],
	
    [999912448,999913471],
	
    [999917568,999918591],
	
    [999921664,999923711],
	
    [999924736,999925759],
	
    [999925760,999927807],
	
    [999927808,999931903],
	
    [999931904,999932927],
	
    [1000013824,1000079359],
	
    [1001127936,1001390079],
	
    [1002373120,1002405887],
	
    [1002438656,1006632959],
	
    [1006632960,1008730111],
	
    [1010237440,1010302975],
	
    [1010761728,1010827263],
	
    [1017118720,1019215871],
	
    [1019346944,1019478015],
	
    [1019740160,1020264447],
	
    [1020264448,1021313023],
	
    [1021837312,1021968383],
	
    [1022033920,1022099455],
	
    [1022722048,1022754815],
	
    [1022820352,1022885887],
	
    [1023148032,1023213567],
	
    [1023246336,1023279103],
	
    [1023344640,1023410175],
	
    [1023693056,1023693311],
	
    [1023693312,1023693823],
	
    [1023693824,1023694847],
	
    [1023694848,1023696895],
	
    [1023717376,1023721471],
	
    [1023975424,1023979519],
	
    [1024381952,1024382975],
	
    [1024382976,1024385023],
	
    [1024389120,1024391167],
	
    [1025245184,1025277951],
	
    [1025343488,1025359871],
	
    [1025359872,1025368063],
	
    [1025368064,1025372159],
	
    [1026392064,1026408447],
	
    [1026416640,1026420735],
	
    [1026523136,1026539519],
	
    [1026555904,1027080191],
	
    [1029160960,1029177343],
	
    [1031798784,1035993087],
	
    [1038614528,1038876671],
	
    [1038876672,1039007743],
	
    [1039138816,1039400959],
	
    [1055522816,1055588351],
	
    [1079319296,1079319551],
	
    [1218705408,1218706431],
	
    [1476316928,1476317183],
	
    [1572277760,1572278015],
	
    [1572278784,1572279039],
	
    [1589575680,1589608447],
	
    [1694498816,1694499839],
	
    [1694564352,1694565375],
	
    [1694673920,1694674943],
	
    [1694760960,1695023103],
	
    [1695547392,1696595967],
	
    [1696595968,1696858111],
	
    [1696858112,1696874495],
	
    [1696874496,1696878591],
	
    [1696880640,1696882687],
	
    [1696882688,1696890879],
	
    [1696890880,1696923647],
	
    [1696923648,1696989183],
	
    [1696989184,1697120255],
	
    [1697120256,1697644543],
	
    [1697644544,1697775615],
	
    [1697777664,1697779711],
	
    [1697789952,1697790975],
	
    [1697906688,1697972223],
	
    [1697997824,1697998847],
	
    [1698037760,1698103295],
	
    [1698160640,1698162687],
	
    [1698693120,1699217407],
	
    [1699217408,1699479551],
	
    [1699479552,1699610623],
	
    [1699610624,1699611647],
	
    [1699618816,1699627007],
	
    [1699741696,1700790271],
	
    [1700790272,1700792319],
	
    [1700792320,1700793343],
	
    [1700794368,1700798463],
	
    [1700823040,1700855807],
	
    [1701011456,1701019647],
	
    [1701134336,1701142527],
	
    [1701143552,1701143807],
	
    [1701144064,1701144575],
	
    [1701144576,1701146623],
	
    [1701146624,1701150719],
	
    [1701199872,1701208063],
	
    [1701209088,1701209599],
	
    [1701209600,1701209855],
	
    [1701210112,1701212159],
	
    [1701212160,1701216255],
	
    [1701314560,1701576703],
	
    [1701724160,1701732351],
	
    [1701732352,1701736447],
	
    [1701737472,1701738495],
	
    [1701738496,1701740543],
	
    [1702363136,1702625279],
	
    [1702625280,1702756351],
	
    [1702756352,1702821887],
	
    [1702887424,1702888447],
	
    [1702889472,1702891519],
	
    [1702891520,1702895615],
	
    [1702895616,1702903807],
	
    [1702952960,1703018495],
	
    [1703018496,1703149567],
	
    [1703149568,1703411711],
	
    [1703936000,1704984575],
	
    [1707081728,1707343871],
	
    [1707343872,1707409407],
	
    [1707507712,1707524095],
	
    [1707524608,1707524863],
	
    [1707525120,1707525375],
	
    [1707525632,1707526143],
	
    [1707526144,1707528191],
	
    [1707528192,1707532287],
	
    [1707532288,1707540479],
	
    [1707540480,1707606015],
	
    [1707606016,1707737087],
	
    [1707835392,1707843583],
	
    [1707843584,1707845631],
	
    [1707846656,1707847679],
	
    [1707847680,1707851775],
	
    [1707868160,1708130303],
	
    [1709178880,1709703167],
	
    [1709703168,1709834239],
	
    [1709850624,1709852671],
	
    [1709853696,1709854719],
	
    [1709854720,1709858815],
	
    [1709858816,1709867007],
	
    [1709965312,1710227455],
	
    [1710227456,1710751743],
	
    [1710751744,1710882815],
	
    [1710948352,1710949375],
	
    [1710950400,1710952447],
	
    [1710952448,1710956543],
	
    [1710956544,1710964735],
	
    [1710964736,1710972927],
	
    [1710972928,1710977023],
	
    [1710978048,1710979071],
	
    [1710979072,1710981119],
	
    [1710981120,1711013887],
	
    [1711013888,1711144959],
	
    [1711144960,1711210495],
	
    [1728120832,1728121855],
	
    [1728123904,1728124927],
	
    [1728124928,1728125951],
	
    [1728137216,1728138239],
	
    [1728141312,1728142335],
	
    [1728161792,1728162815],
	
    [1728211968,1728212991],
	
    [1728224256,1728225279],
	
    [1728226304,1728227327],
	
    [1728235520,1728237567],
	
    [1728237568,1728239615],
	
    [1728271360,1728272383],
	
    [1728272384,1728274431],
	
    [1728274432,1728282623],
	
    [1728282624,1728286719],
	
    [1728287744,1728288767],
	
    [1728288768,1728290815],
	
    [1728329728,1728330751],
	
    [1728358400,1728359423],
	
    [1728362496,1728363519],
	
    [1728390144,1728391167],
	
    [1728394240,1728395263],
	
    [1728395264,1728396287],
	
    [1728419840,1728420863],
	
    [1728423936,1728424959],
	
    [1728430080,1728431103],
	
    [1728445440,1728446463],
	
    [1728465920,1728466943],
	
    [1728474112,1728475135],
	
    [1728477184,1728478207],
	
    [1728502784,1728503807],
	
    [1728504832,1728505855],
	
    [1728547840,1728548863],
	
    [1728566272,1728567295],
	
    [1728567296,1728569343],
	
    [1728577536,1728579583],
	
    [1728579584,1728580607],
	
    [1728585728,1728586751],
	
    [1728590848,1728591871],
	
    [1728594944,1728595967],
	
    [1728605184,1728606207],
	
    [1728617472,1728618495],
	
    [1728628736,1728630783],
	
    [1728633856,1728634879],
	
    [1728645120,1728646143],
	
    [1728649216,1728650239],
	
    [1728670720,1728671743],
	
    [1728681984,1728683007],
	
    [1728706560,1728708607],
	
    [1728708608,1728709631],
	
    [1728712704,1728713727],
	
    [1728730112,1728731135],
	
    [1728737024,1728737279],
	
    [1728744448,1728745471],
	
    [1728778240,1728779263],
	
    [1728817152,1728818175],
	
    [1728820224,1728821247],
	
    [1728847872,1728848895],
	
    [1728874496,1728875519],
	
    [1728886784,1728887807],
	
    [1728899072,1728900095],
	
    [1728908288,1728909311],
	
    [1728936960,1728937983],
	
    [1728942080,1728943103],
	
    [1728955392,1728956415],
	
    [1728967680,1728968703],
	
    [1728992256,1728993279],
	
    [1729004544,1729005567],
	
    [1729005568,1729006591],
	
    [1729010688,1729011711],
	
    [1729032192,1729033215],
	
    [1729037312,1729038335],
	
    [1729038336,1729039359],
	
    [1729040384,1729041407],
	
    [1729060864,1729061887],
	
    [1729087488,1729088511],
	
    [1729115136,1729116159],
	
    [1729122304,1729124351],
	
    [1729124352,1729125375],
	
    [1729129472,1729130495],
	
    [1729133568,1729134591],
	
    [1729177600,1729178623],
	
    [1729183744,1729184767],
	
    [1729198080,1729198591],
	
    [1729202176,1729203199],
	
    [1729208320,1729209343],
	
    [1729219584,1729220607],
	
    [1729225728,1729226751],
	
    [1729282048,1729283071],
	
    [1729286144,1729288191],
	
    [1729290240,1729291263],
	
    [1729301504,1729302527],
	
    [1729308672,1729310719],
	
    [1729314816,1729316863],
	
    [1729316864,1729317887],
	
    [1729357824,1729358847],
	
    [1729367040,1729368063],
	
    [1729375744,1729375999],
	
    [1729381376,1729382399],
	
    [1729392640,1729393663],
	
    [1729396736,1729397759],
	
    [1729404928,1729405951],
	
    [1729427456,1729428479],
	
    [1729458176,1729460223],
	
    [1729465344,1729466367],
	
    [1729474560,1729475583],
	
    [1729490944,1729491967],
	
    [1729495040,1729511423],
	
    [1729511424,1729519615],
	
    [1729520640,1729521663],
	
    [1729521664,1729523711],
	
    [1729523712,1729527807],
	
    [1729543168,1729544191],
	
    [1729553408,1729554431],
	
    [1729559552,1729560575],
	
    [1729562624,1729563647],
	
    [1729574912,1729575935],
	
    [1729601536,1729603583],
	
    [1729605632,1729606655],
	
    [1729618944,1729619967],
	
    [1729632256,1729633279],
	
    [1729655808,1729656831],
	
    [1729658880,1729659903],
	
    [1729662976,1729663999],
	
    [1729671168,1729672191],
	
    [1729673216,1729674239],
	
    [1729684480,1729685503],
	
    [1729690624,1729691647],
	
    [1729696768,1729697791],
	
    [1729697792,1729699839],
	
    [1729699840,1729701887],
	
    [1729701888,1729702911],
	
    [1729703936,1729704959],
	
    [1729708032,1729710079],
	
    [1729729536,1729730559],
	
    [1729731584,1729732607],
	
    [1729746944,1729747967],
	
    [1729757184,1729758207],
	
    [1729773568,1729774591],
	
    [1729776640,1729777663],
	
    [1729786880,1729787903],
	
    [1729797120,1729798143],
	
    [1729798144,1729799167],
	
    [1729815552,1729816575],
	
    [1729818624,1729819647],
	
    [1729823744,1729824767],
	
    [1729825792,1729826815],
	
    [1729828864,1729829887],
	
    [1729837056,1729838079],
	
    [1729847296,1729848319],
	
    [1729884160,1729885183],
	
    [1729889280,1729890303],
	
    [1729890304,1729891327],
	
    [1729935360,1729936383],
	
    [1729940480,1729941503],
	
    [1729942528,1729943551],
	
    [1729957888,1729958911],
	
    [1729986560,1729988607],
	
    [1729988608,1729989631],
	
    [1730024448,1730025471],
	
    [1730043904,1730044927],
	
    [1730057216,1730058239],
	
    [1730071040,1730071551],
	
    [1730077696,1730078719],
	
    [1730079232,1730079487],
	
    [1730079744,1730080767],
	
    [1730097152,1730099199],
	
    [1730100224,1730101247],
	
    [1730101248,1730103295],
	
    [1730103296,1730103551],
	
    [1730122752,1730123775],
	
    [1730125824,1730126847],
	
    [1730127872,1730128895],
	
    [1730136064,1730137087],
	
    [1730145280,1730146303],
	
    [1730150400,1730281471],
	
    [1730281472,1730347007],
	
    [1730347008,1730355199],
	
    [1730355200,1730359295],
	
    [1730359296,1730360319],
	
    [1730373632,1730374655],
	
    [1730403328,1730404351],
	
    [1730419712,1730420735],
	
    [1730421760,1730422783],
	
    [1730426880,1730428927],
	
    [1730428928,1730429951],
	
    [1730430976,1730431999],
	
    [1730437120,1730438143],
	
    [1730446336,1730447359],
	
    [1730447360,1730448383],
	
    [1730453504,1730461695],
	
    [1730461696,1730469887],
	
    [1730469888,1730473983],
	
    [1730473984,1730476031],
	
    [1730481152,1730482175],
	
    [1730482176,1730483199],
	
    [1730484224,1730485247],
	
    [1730489344,1730490367],
	
    [1730491392,1730492415],
	
    [1730492416,1730493439],
	
    [1730496512,1730497535],
	
    [1730503680,1730504703],
	
    [1730504704,1730505727],
	
    [1730512896,1730514943],
	
    [1730514944,1730519039],
	
    [1730519040,1730521087],
	
    [1730522112,1730523135],
	
    [1730523136,1730524159],
	
    [1730526208,1730527231],
	
    [1730531328,1730535423],
	
    [1730542592,1730543615],
	
    [1730543616,1730544639],
	
    [1730551808,1730552831],
	
    [1730553856,1730555903],
	
    [1730563072,1730564095],
	
    [1730565120,1730566143],
	
    [1730567168,1730568191],
	
    [1730568192,1730569215],
	
    [1730573312,1730574335],
	
    [1730577408,1730578431],
	
    [1730579456,1730580479],
	
    [1730599936,1730600959],
	
    [1730600960,1730603007],
	
    [1730603008,1730604031],
	
    [1730608128,1730608639],
	
    [1730625536,1730626559],
	
    [1730631680,1730632703],
	
    [1730634752,1730635775],
	
    [1730635776,1730636799],
	
    [1730650112,1730658303],
	
    [1730660352,1730662399],
	
    [1730662400,1730666495],
	
    [1730666496,1730668543],
	
    [1730668544,1730669567],
	
    [1730677760,1730678783],
	
    [1730678784,1730682879],
	
    [1730682880,1730686975],
	
    [1730697216,1730698239],
	
    [1730723840,1730724863],
	
    [1730728960,1730729983],
	
    [1730731008,1730732031],
	
    [1730733056,1730734079],
	
    [1730734080,1730736127],
	
    [1730736128,1730740223],
	
    [1730740224,1730741247],
	
    [1730753536,1730754559],
	
    [1730776064,1730777087],
	
    [1730778112,1730779135],
	
    [1730779136,1730780159],
	
    [1730781184,1730783231],
	
    [1730796544,1730797567],
	
    [1730797568,1730799615],
	
    [1730799616,1730800639],
	
    [1730807808,1730808831],
	
    [1730811904,1730812927],
	
    [1730813952,1730814975],
	
    [1730822144,1730824191],
	
    [1730825216,1730826239],
	
    [1730865152,1730866175],
	
    [1730877952,1730878463],
	
    [1730892800,1730893823],
	
    [1730895872,1730897919],
	
    [1730897920,1730898943],
	
    [1730903040,1730904063],
	
    [1730918400,1730919423],
	
    [1730920448,1730922495],
	
    [1730924544,1730925567],
	
    [1730927616,1730928639],
	
    [1730928640,1730929663],
	
    [1730932736,1730933759],
	
    [1730951424,1730951679],
	
    [1730951680,1730952191],
	
    [1730957312,1730958335],
	
    [1730967552,1730969599],
	
    [1730973696,1730974719],
	
    [1730975744,1730976767],
	
    [1730979840,1730980863],
	
    [1730981888,1730985983],
	
    [1730985984,1730990079],
	
    [1730994176,1730995199],
	
    [1730997248,1730998271],
	
    [1730998272,1731002367],
	
    [1731002368,1731018751],
	
    [1731020800,1731022847],
	
    [1731022848,1731026943],
	
    [1731026944,1731035135],
	
    [1731035136,1731051519],
	
    [1731051520,1731059711],
	
    [1731059712,1731060735],
	
    [1731065856,1731066879],
	
    [1731067904,1731068927],
	
    [1731070976,1731071999],
	
    [1731072000,1731076095],
	
    [1731076096,1731084287],
	
    [1731084288,1731100671],
	
    [1731100672,1731102719],
	
    [1731102720,1731103743],
	
    [1731106816,1731108863],
	
    [1731108864,1731112959],
	
    [1731112960,1731115007],
	
    [1731130368,1731131391],
	
    [1731131392,1731132415],
	
    [1731134464,1731135487],
	
    [1731138560,1731139583],
	
    [1731142656,1731143679],
	
    [1731143680,1731144703],
	
    [1731153920,1731154943],
	
    [1731158016,1731159039],
	
    [1731163136,1731164159],
	
    [1731164160,1731165183],
	
    [1731168256,1731170303],
	
    [1731187712,1731188735],
	
    [1731212288,1731213311],
	
    [1731222528,1731223551],
	
    [1731236864,1731237887],
	
    [1731237888,1731238399],
	
    [1731250688,1731251199],
	
    [1731254272,1731256319],
	
    [1731256320,1731260415],
	
    [1731260416,1731262463],
	
    [1731267584,1731268607],
	
    [1731269632,1731270655],
	
    [1731282944,1731284991],
	
    [1731289088,1731290111],
	
    [1731292160,1731293183],
	
    [1731297280,1731298303],
	
    [1731309568,1731311615],
	
    [1731339264,1731340287],
	
    [1731341312,1731342335],
	
    [1731342336,1731346431],
	
    [1731346432,1731348479],
	
    [1731348480,1731349503],
	
    [1731353600,1731354623],
	
    [1731357696,1731358719],
	
    [1731358720,1731362815],
	
    [1731363840,1731364863],
	
    [1731364864,1731366911],
	
    [1731374080,1731375103],
	
    [1731375104,1731379199],
	
    [1731379200,1731381247],
	
    [1731381248,1731382271],
	
    [1731386368,1731387391],
	
    [1731387392,1731391487],
	
    [1731391488,1731393535],
	
    [1731393536,1731394559],
	
    [1731471360,1731472383],
	
    [1731479552,1731481599],
	
    [1731481600,1731483647],
	
    [1731485696,1731487743],
	
    [1731487744,1731488767],
	
    [1731502080,1731504127],
	
    [1731505152,1731506175],
	
    [1731506176,1731507199],
	
    [1731508224,1731509247],
	
    [1731511296,1731512319],
	
    [1731543040,1731545087],
	
    [1731550208,1731551231],
	
    [1731558400,1731559423],
	
    [1731559424,1731563519],
	
    [1731563520,1731564543],
	
    [1731567616,1731568639],
	
    [1731572736,1731573759],
	
    [1731578880,1731579903],
	
    [1731579904,1731581951],
	
    [1731587072,1731588095],
	
    [1731590144,1731591167],
	
    [1731594240,1731595263],
	
    [1731604480,1731605503],
	
    [1731633152,1731635199],
	
    [1731646464,1731647487],
	
    [1731650560,1731651583],
	
    [1731653632,1731654655],
	
    [1731678208,1731679231],
	
    [1731688448,1731689471],
	
    [1731696640,1731697663],
	
    [1731701760,1731702783],
	
    [1731709952,1731710975],
	
    [1731710976,1731711999],
	
    [1731716096,1731717119],
	
    [1731718144,1731719167],
	
    [1731719168,1731720191],
	
    [1731728384,1731729407],
	
    [1731731456,1731732479],
	
    [1731737600,1731739647],
	
    [1731741696,1731743743],
	
    [1731759104,1731760127],
	
    [1731762176,1731763199],
	
    [1731774464,1731775487],
	
    [1731791872,1731792895],
	
    [1731802112,1731803135],
	
    [1731803136,1731804159],
	
    [1731808256,1731809279],
	
    [1731823616,1731824639],
	
    [1731838976,1731839999],
	
    [1731860480,1731861503],
	
    [1731939328,1731940351],
	
    [1731948544,1731952639],
	
    [1731952640,1731953663],
	
    [1731957760,1731958783],
	
    [1731993600,1731994623],
	
    [1731996672,1731997695],
	
    [1732027392,1732028415],
	
    [1732043776,1732044799],
	
    [1732045824,1732046847],
	
    [1732066304,1732067327],
	
    [1732077568,1732078591],
	
    [1732086784,1732087807],
	
    [1732089856,1732091903],
	
    [1732091904,1732092927],
	
    [1732094976,1732095999],
	
    [1732096000,1732097023],
	
    [1732122624,1732123647],
	
    [1732134912,1732136959],
	
    [1732136960,1732139007],
	
    [1732139008,1732140031],
	
    [1732141056,1732149247],
	
    [1732149248,1732151295],
	
    [1732156416,1732157439],
	
    [1732157440,1732165631],
	
    [1732165632,1732166655],
	
    [1732168704,1732169727],
	
    [1732169728,1732173823],
	
    [1732173824,1732174847],
	
    [1732190208,1732198399],
	
    [1732198400,1732202495],
	
    [1732202496,1732204543],
	
    [1732204544,1732205567],
	
    [1732217856,1732218879],
	
    [1732218880,1732219903],
	
    [1732220928,1732221951],
	
    [1732222976,1732227071],
	
    [1732227072,1732229119],
	
    [1732229120,1732230143],
	
    [1732231168,1732235263],
	
    [1732235264,1732236287],
	
    [1732243456,1732247551],
	
    [1732247552,1732249599],
	
    [1732253696,1732255743],
	
    [1732255744,1732263935],
	
    [1732263936,1732280319],
	
    [1732283392,1732284415],
	
    [1732284416,1732285439],
	
    [1732286464,1732288511],
	
    [1732288512,1732296703],
	
    [1732296704,1732313087],
	
    [1732313088,1732317183],
	
    [1732317184,1732318207],
	
    [1732325376,1732329471],
	
    [1732329472,1732337663],
	
    [1732338688,1732339711],
	
    [1732339712,1732341759],
	
    [1732341760,1732345855],
	
    [1732345856,1732347903],
	
    [1732347904,1732348927],
	
    [1732349952,1732354047],
	
    [1732354048,1732358143],
	
    [1732386816,1732387839],
	
    [1732388864,1732389887],
	
    [1732406272,1732407295],
	
    [1732429824,1732430847],
	
    [1732440064,1732444159],
	
    [1732444160,1732446207],
	
    [1732446208,1732447231],
	
    [1732454400,1732456447],
	
    [1732456448,1732460543],
	
    [1732460544,1732476927],
	
    [1732476928,1732481023],
	
    [1732481024,1732483071],
	
    [1732488192,1732488447],
	
    [1732488960,1732489215],
	
    [1732493312,1732494335],
	
    [1732498432,1732499455],
	
    [1732532224,1732533247],
	
    [1732535296,1732536319],
	
    [1732542464,1732543487],
	
    [1732579328,1732580351],
	
    [1732605696,1732605951],
	
    [1732629504,1732630015],
	
    [1732642816,1732643839],
	
    [1732678656,1732679679],
	
    [1732701184,1732702207],
	
    [1732705280,1732706303],
	
    [1732706304,1732707327],
	
    [1732723712,1732724735],
	
    [1732724736,1732725759],
	
    [1732726784,1732728831],
	
    [1732728832,1732729855],
	
    [1732737024,1732739071],
	
    [1732739072,1732740095],
	
    [1732743168,1732744191],
	
    [1732756480,1732757503],
	
    [1732757504,1732758527],
	
    [1732765696,1732766719],
	
    [1732774912,1732775935],
	
    [1732775936,1732780031],
	
    [1732780032,1732784127],
	
    [1732784128,1732786175],
	
    [1732800512,1732804607],
	
    [1732804608,1732806655],
	
    [1732809984,1732810239],
	
    [1732810240,1732810751],
	
    [1732815872,1732816895],
	
    [1732817920,1732818943],
	
    [1732829184,1732837375],
	
    [1732837376,1732845567],
	
    [1732849664,1732850687],
	
    [1732867072,1732868095],
	
    [1732868096,1732869119],
	
    [1732870144,1732874239],
	
    [1732874240,1732875263],
	
    [1732880384,1732881407],
	
    [1732882432,1732883455],
	
    [1732889600,1732890623],
	
    [1732890624,1732891647],
	
    [1732898816,1732899327],
	
    [1732899328,1732899583],
	
    [1732899840,1732900863],
	
    [1732900864,1732901887],
	
    [1732909056,1732911103],
	
    [1732911104,1732915199],
	
    [1732915200,1732916223],
	
    [1732917248,1732919295],
	
    [1732923392,1732924415],
	
    [1732934656,1732935679],
	
    [1732940800,1732941823],
	
    [1732941824,1732943871],
	
    [1732955136,1732956159],
	
    [1732962304,1732963327],
	
    [1732990720,1732990975],
	
    [1732990976,1732993023],
	
    [1732995072,1732997119],
	
    [1732997120,1732998143],
	
    [1732999168,1733000191],
	
    [1733001216,1733002239],
	
    [1733005312,1733006335],
	
    [1733007360,1733008383],
	
    [1733028864,1733029119],
	
    [1733049344,1733050367],
	
    [1733050368,1733052415],
	
    [1733052416,1733053439],
	
    [1733057536,1733058559],
	
    [1733089280,1733091327],
	
    [1733091328,1733092351],
	
    [1733106688,1733107711],
	
    [1733112832,1733113855],
	
    [1733113856,1733114879],
	
    [1733122048,1733123071],
	
    [1733133312,1733134335],
	
    [1733137408,1733138431],
	
    [1733155840,1733156863],
	
    [1733179392,1733181439],
	
    [1733181440,1733182463],
	
    [1733196800,1733197823],
	
    [1733209088,1733210111],
	
    [1733210112,1733211135],
	
    [1733215232,1733216255],
	
    [1733223424,1733224447],
	
    [1733236736,1733238783],
	
    [1733239808,1733240831],
	
    [1733240832,1733242879],
	
    [1733244928,1733246975],
	
    [1733246976,1733249023],
	
    [1733251072,1733253119],
	
    [1733265408,1733266431],
	
    [1733278720,1733279743],
	
    [1733279744,1733283839],
	
    [1733283840,1733285887],
	
    [1733292800,1733293055],
	
    [1733307392,1733308415],
	
    [1733314560,1733315583],
	
    [1733341184,1733343231],
	
    [1733343232,1733344255],
	
    [1733345280,1733346303],
	
    [1733347328,1733348351],
	
    [1733355520,1733356543],
	
    [1733362688,1733363711],
	
    [1733363712,1733364735],
	
    [1733365760,1733367807],
	
    [1733372928,1733373951],
	
    [1733373952,1733374975],
	
    [1733386240,1733387263],
	
    [1733392384,1733393407],
	
    [1733399552,1733400575],
	
    [1733403648,1733404671],
	
    [1733412864,1733413887],
	
    [1733421056,1733422079],
	
    [1733442560,1733443583],
	
    [1733444608,1733445631],
	
    [1733448704,1733449727],
	
    [1733453824,1733454847],
	
    [1733484544,1733485567],
	
    [1733487616,1733488639],
	
    [1733504000,1733505023],
	
    [1733506048,1733507071],
	
    [1733508096,1733509119],
	
    [1733511168,1733512191],
	
    [1733521408,1733522431],
	
    [1733526528,1733527551],
	
    [1733538816,1733539839],
	
    [1733558272,1733559295],
	
    [1733561344,1733562367],
	
    [1733562368,1733566463],
	
    [1733570560,1733571583],
	
    [1733572608,1733573631],
	
    [1733574656,1733575679],
	
    [1733576704,1733577727],
	
    [1733635072,1733636095],
	
    [1733636096,1733638143],
	
    [1733638144,1733639167],
	
    [1733645312,1733646335],
	
    [1733658624,1733659647],
	
    [1733660672,1733661695],
	
    [1733665792,1733666815],
	
    [1733666816,1733668863],
	
    [1733668864,1733669887],
	
    [1733696512,1733697535],
	
    [1733697536,1733698559],
	
    [1733704704,1733705727],
	
    [1733712640,1733712895],
	
    [1733741568,1733742591],
	
    [1733742592,1733746687],
	
    [1733746688,1733754879],
	
    [1733754880,1733756927],
	
    [1733760000,1733761023],
	
    [1733763072,1733764095],
	
    [1733779456,1733780479],
	
    [1733788672,1733789695],
	
    [1733800960,1733801983],
	
    [1733812224,1733813247],
	
    [1733821440,1733822463],
	
    [1733822464,1733824511],
	
    [1733824512,1733826559],
	
    [1733828608,1733830655],
	
    [1733835776,1733836799],
	
    [1733836800,1733837823],
	
    [1733838848,1733839871],
	
    [1733844992,1733847039],
	
    [1733859328,1733859839],
	
    [1733862400,1733863423],
	
    [1733868544,1733869567],
	
    [1733874688,1733875711],
	
    [1733893120,1733894143],
	
    [1733910528,1733914623],
	
    [1733914624,1733916671],
	
    [1733923840,1733924863],
	
    [1733929984,1733931007],
	
    [1733933056,1733935103],
	
    [1733935104,1733943295],
	
    [1733943296,1733945343],
	
    [1733964800,1733965823],
	
    [1733975040,1733976063],
	
    [1733977088,1733978111],
	
    [1733978112,1733980159],
	
    [1733980160,1733984255],
	
    [1733984256,1733986303],
	
    [1733990400,1733991423],
	
    [1733994496,1733995519],
	
    [1733995776,1733996031],
	
    [1733996544,1733997567],
	
    [1733999616,1734000639],
	
    [1734000640,1734001663],
	
    [1734026240,1734027263],
	
    [1734027264,1734028287],
	
    [1734044672,1734045695],
	
    [1734055936,1734056959],
	
    [1734062080,1734063103],
	
    [1734068224,1734069247],
	
    [1734070272,1734072319],
	
    [1734077440,1734078463],
	
    [1734094848,1734098943],
	
    [1734098944,1734103039],
	
    [1734103040,1734104063],
	
    [1734104576,1734104831],
	
    [1734105088,1734106111],
	
    [1734110208,1734111231],
	
    [1734114304,1734115327],
	
    [1734116352,1734117375],
	
    [1734122496,1734123519],
	
    [1734124544,1734125567],
	
    [1734125568,1734127615],
	
    [1734127616,1734131711],
	
    [1734131712,1734132735],
	
    [1734142976,1734143999],
	
    [1734144000,1734148095],
	
    [1734148096,1734150143],
	
    [1734155264,1734156287],
	
    [1734169600,1734170623],
	
    [1734187008,1734188031],
	
    [1734194176,1734195199],
	
    [1734200320,1734201343],
	
    [1734216704,1734217727],
	
    [1734218752,1734219775],
	
    [1734220800,1734221823],
	
    [1734221824,1734225919],
	
    [1734232064,1734233087],
	
    [1734236160,1734237183],
	
    [1734243328,1734244351],
	
    [1734254592,1734255615],
	
    [1734264832,1734265855],
	
    [1734287104,1734287359],
	
    [1734292480,1734293503],
	
    [1734296576,1734297599],
	
    [1734301696,1734303743],
	
    [1734313984,1734316031],
	
    [1734316032,1734317055],
	
    [1734318080,1734319103],
	
    [1734334464,1734336511],
	
    [1734336512,1734337535],
	
    [1734339584,1734340607],
	
    [1734340608,1734344703],
	
    [1734346752,1734347775],
	
    [1734376448,1734377471],
	
    [1734379520,1734380543],
	
    [1734383616,1734385663],
	
    [1734385664,1734393855],
	
    [1734393856,1734397951],
	
    [1734397952,1734399999],
	
    [1734400000,1734401023],
	
    [1734412288,1734414335],
	
    [1734414592,1734414847],
	
    [1734414848,1734415359],
	
    [1734415360,1734416383],
	
    [1734416384,1734418431],
	
    [1734419456,1734420479],
	
    [1734420480,1734421503],
	
    [1734424576,1734425599],
	
    [1734425600,1734426111],
	
    [1734426624,1734428671],
	
    [1734428672,1734429695],
	
    [1734438912,1734440959],
	
    [1734443008,1734444031],
	
    [1734447104,1734449151],
	
    [1734458368,1734459391],
	
    [1734459392,1734460415],
	
    [1734486016,1734488063],
	
    [1734488064,1734489087],
	
    [1734490112,1734491135],
	
    [1734496256,1734497279],
	
    [1734498304,1734500351],
	
    [1734500352,1734502399],
	
    [1734507520,1734508543],
	
    [1734510592,1734512639],
	
    [1734512640,1734513663],
	
    [1734517760,1734518783],
	
    [1734518784,1734519807],
	
    [1734521856,1734522879],
	
    [1734525952,1734526975],
	
    [1734531072,1734533119],
	
    [1734533120,1734535167],
	
    [1734535168,1734536191],
	
    [1734537216,1734541311],
	
    [1734551552,1734551807],
	
    [1734554624,1734555647],
	
    [1734555648,1734556671],
	
    [1734561280,1734561791],
	
    [1734567936,1734568959],
	
    [1734571008,1734572031],
	
    [1734572032,1734573055],
	
    [1734575104,1734576127],
	
    [1734576128,1734578175],
	
    [1734578176,1734579199],
	
    [1734580224,1734581247],
	
    [1734597632,1734598655],
	
    [1734600704,1734602751],
	
    [1734606848,1734607871],
	
    [1734615040,1734616063],
	
    [1734617088,1734618111],
	
    [1734619136,1734623231],
	
    [1734623232,1734625279],
	
    [1734629376,1734630399],
	
    [1734636544,1734637567],
	
    [1734643712,1734644735],
	
    [1734668288,1734669311],
	
    [1734670336,1734672383],
	
    [1734673408,1734674431],
	
    [1734674432,1734676479],
	
    [1734679552,1734680575],
	
    [1734687744,1734688767],
	
    [1734703360,1734703615],
	
    [1734703616,1734704127],
	
    [1734704128,1734705151],
	
    [1734709248,1734711295],
	
    [1734718464,1734719487],
	
    [1734719488,1734720511],
	
    [1734757376,1734758399],
	
    [1734758400,1734759423],
	
    [1734780928,1734782975],
	
    [1734784000,1734785023],
	
    [1734785024,1734787071],
	
    [1734787072,1734789119],
	
    [1734789120,1734790143],
	
    [1734791168,1734793215],
	
    [1734806528,1734807551],
	
    [1734807552,1734808575],
	
    [1734812672,1734813695],
	
    [1734820864,1734821887],
	
    [1734821888,1734822911],
	
    [1734849024,1734849535],
	
    [1734851584,1734852607],
	
    [1734854656,1734856703],
	
    [1734868992,1734871039],
	
    [1734878208,1734879231],
	
    [1734879232,1734880255],
	
    [1734885376,1734886399],
	
    [1734895616,1734896639],
	
    [1734907904,1734908927],
	
    [1734912000,1734914047],
	
    [1734919680,1734920191],
	
    [1734933504,1734934527],
	
    [1734934528,1734936575],
	
    [1734937600,1734938623],
	
    [1734938624,1734939647],
	
    [1734940416,1734940671],
	
    [1734948864,1734950911],
	
    [1734964224,1734965247],
	
    [1734968320,1734969343],
	
    [1734980608,1734981631],
	
    [1734981632,1734982655],
	
    [1734985728,1734987775],
	
    [1734990848,1734991871],
	
    [1735009280,1735010303],
	
    [1735010304,1735012351],
	
    [1735015424,1735016447],
	
    [1735017472,1735018495],
	
    [1735024640,1735025663],
	
    [1735030784,1735031807],
	
    [1735032832,1735034879],
	
    [1735041024,1735042047],
	
    [1740636160,1740644351],
	
    [1740648448,1740650495],
	
    [1740650496,1740651519],
	
    [1740657664,1740658687],
	
    [1740658688,1740660735],
	
    [1740660736,1740664831],
	
    [1740664832,1740665855],
	
    [1740668928,1740673023],
	
    [1740673024,1740674047],
	
    [1740678144,1740679167],
	
    [1740684288,1740685311],
	
    [1740689408,1740691455],
	
    [1740691456,1740692479],
	
    [1740700672,1740701695],
	
    [1740711936,1740713983],
	
    [1740732416,1740733439],
	
    [1740737536,1740738559],
	
    [1740742656,1740743679],
	
    [1740749824,1740750847],
	
    [1740750848,1740751871],
	
    [1740755968,1740756991],
	
    [1740756992,1740759039],
	
    [1740759040,1740763135],
	
    [1740771328,1740772351],
	
    [1740826112,1740826623],
	
    [1740861440,1740862463],
	
    [1740871680,1740872703],
	
    [1740873728,1740874751],
	
    [1740914688,1740915711],
	
    [1740916736,1740917759],
	
    [1740920832,1740922879],
	
    [1740922880,1740923903],
	
    [1740941312,1740942335],
	
    [1740945664,1740945919],
	
    [1740945920,1740946431],
	
    [1741009920,1741010943],
	
    [1741022208,1741023231],
	
    [1741028608,1741028863],
	
    [1741028864,1741029375],
	
    [1741034496,1741035519],
	
    [1741044736,1741045759],
	
    [1741045760,1741046783],
	
    [1741047808,1741048831],
	
    [1741061120,1741062143],
	
    [1741069312,1741070335],
	
    [1741075456,1741076479],
	
    [1741079552,1741080575],
	
    [1741080576,1741081599],
	
    [1741084672,1741086719],
	
    [1741086720,1741090815],
	
    [1741090816,1741092863],
	
    [1741136896,1741137919],
	
    [1741145088,1741146111],
	
    [1741153280,1741154303],
	
    [1741159424,1741160447],
	
    [1741173760,1741174783],
	
    [1741176832,1741178879],
	
    [1741195264,1741197311],
	
    [1741197312,1741201407],
	
    [1741201408,1741209599],
	
    [1741209600,1741210623],
	
    [1741216768,1741217791],
	
    [1741217792,1741225983],
	
    [1741225984,1741230079],
	
    [1741230080,1741232127],
	
    [1741233152,1741234175],
	
    [1741234176,1741242367],
	
    [1741242368,1741243391],
	
    [1741245440,1741246463],
	
    [1741246464,1741250559],
	
    [1741250560,1741254655],
	
    [1741254656,1741256703],
	
    [1741256704,1741257727],
	
    [1741264896,1741266943],
	
    [1741266944,1741275135],
	
    [1741275136,1741291519],
	
    [1741291520,1741299711],
	
    [1741299712,1741303807],
	
    [1741305856,1741307903],
	
    [1741307904,1741324287],
	
    [1741324288,1741328383],
	
    [1741328384,1741329407],
	
    [1741330432,1741332479],
	
    [1741332480,1741340671],
	
    [1741340672,1741344767],
	
    [1741345792,1741346815],
	
    [1741349888,1741350911],
	
    [1741351936,1741352959],
	
    [1741352960,1741357055],
	
    [1741357056,1741365247],
	
    [1741365248,1741366271],
	
    [1741381632,1741389823],
	
    [1741389824,1741390847],
	
    [1741392896,1741393919],
	
    [1741399040,1741400063],
	
    [1741400064,1741401087],
	
    [1741406208,1741407231],
	
    [1741408256,1741409279],
	
    [1741411328,1741412351],
	
    [1741412352,1741413375],
	
    [1741428736,1741429759],
	
    [1741445120,1741446143],
	
    [1741451264,1741452287],
	
    [1741457408,1741459455],
	
    [1741459456,1741461503],
	
    [1741461504,1741462527],
	
    [1741472768,1741473791],
	
    [1741481984,1741484031],
	
    [1741498368,1741500415],
	
    [1741501440,1741502463],
	
    [1741515776,1741516799],
	
    [1741517824,1741518847],
	
    [1741522944,1741523967],
	
    [1741529600,1741529855],
	
    [1741536256,1741537279],
	
    [1741537280,1741539327],
	
    [1741539328,1741540351],
	
    [1741548544,1741549567],
	
    [1741551616,1741553663],
	
    [1741553664,1741554687],
	
    [1741564928,1741565951],
	
    [1741591552,1741592575],
	
    [1741645824,1741646847],
	
    [1741666304,1741668351],
	
    [1741668352,1741672447],
	
    [1741672448,1741674495],
	
    [1741675520,1741676543],
	
    [1741677568,1741678591],
	
    [1741678592,1741679615],
	
    [1741687808,1741688831],
	
    [1741688832,1741689855],
	
    [1741691904,1741692927],
	
    [1741722624,1741723647],
	
    [1741778944,1741779967],
	
    [1741785088,1741786111],
	
    [1741801472,1741802495],
	
    [1741803520,1741804543],
	
    [1741805568,1741806591],
	
    [1741815808,1741816831],
	
    [1741840384,1741841407],
	
    [1741855744,1741856767],
	
    [1741856768,1741864959],
	
    [1741871104,1741872127],
	
    [1741892608,1741893631],
	
    [1741905920,1741906431],
	
    [1741906432,1741906687],
	
    [1741906944,1741907967],
	
    [1741921280,1741922303],
	
    [1741923584,1741923839],
	
    [1741924352,1741925375],
	
    [1741937664,1741938687],
	
    [1741944832,1741945855],
	
    [1741946880,1741950975],
	
    [1741958144,1741959167],
	
    [1741959168,1741960191],
	
    [1741968384,1741969407],
	
    [1741972480,1741973503],
	
    [1741984768,1741985791],
	
    [1741988864,1741989887],
	
    [1741997056,1741998079],
	
    [1741998080,1741999103],
	
    [1742005760,1742006271],
	
    [1742011392,1742012415],
	
    [1742022656,1742024703],
	
    [1742024704,1742028799],
	
    [1742028800,1742036991],
	
    [1742036992,1742038015],
	
    [1742046208,1742047231],
	
    [1742047232,1742049279],
	
    [1742049280,1742053375],
	
    [1742053376,1742061567],
	
    [1742076928,1742077951],
	
    [1742090240,1742091263],
	
    [1742099456,1742100479],
	
    [1742132224,1742133247],
	
    [1742139392,1742141439],
	
    [1742150656,1742151679],
	
    [1742151680,1742153727],
	
    [1742154752,1742155775],
	
    [1742169088,1742169599],
	
    [1742171136,1742172159],
	
    [1742173184,1742174207],
	
    [1742174208,1742175231],
	
    [1742179328,1742180351],
	
    [1742210048,1742211071],
	
    [1742211072,1742213119],
	
    [1742213120,1742217215],
	
    [1742217216,1742221311],
	
    [1742225408,1742226431],
	
    [1742236672,1742237695],
	
    [1742243840,1742244863],
	
    [1742247936,1742248959],
	
    [1742266368,1742268415],
	
    [1742270464,1742274559],
	
    [1742274560,1742290943],
	
    [1742317568,1742318591],
	
    [1742320640,1742321663],
	
    [1742321664,1742323711],
	
    [1742323712,1742327807],
	
    [1742342144,1742344191],
	
    [1742344192,1742346239],
	
    [1742347520,1742347775],
	
    [1742347776,1742348287],
	
    [1742348288,1742356479],
	
    [1742356480,1742364671],
	
    [1742389248,1742393343],
	
    [1742393344,1742395391],
	
    [1742395392,1742396415],
	
    [1742411776,1742413823],
	
    [1742413824,1742415871],
	
    [1742422016,1742423039],
	
    [1742427136,1742428159],
	
    [1742428160,1742430207],
	
    [1742430208,1742432255],
	
    [1742450688,1742451711],
	
    [1742452736,1742453759],
	
    [1742483456,1742487551],
	
    [1742487552,1742488575],
	
    [1742494720,1742495743],
	
    [1742495744,1742496767],
	
    [1742497792,1742499839],
	
    [1742500864,1742501887],
	
    [1742501888,1742503935],
	
    [1742503936,1742508031],
	
    [1742508032,1742510079],
	
    [1742510080,1742511103],
	
    [1742512128,1742520319],
	
    [1742520320,1742522367],
	
    [1742522368,1742523391],
	
    [1742532608,1742536703],
	
    [1742536704,1742544895],
	
    [1742544896,1742548991],
	
    [1742548992,1742550015],
	
    [1742559232,1742561279],
	
    [1742561280,1742569471],
	
    [1742569472,1742585855],
	
    [1742585856,1742589951],
	
    [1742602240,1742606335],
	
    [1742606336,1742607359],
	
    [1742608384,1742610431],
	
    [1742610432,1742618623],
	
    [1742618624,1742635007],
	
    [1742635008,1742651391],
	
    [1742651392,1742659583],
	
    [1742659584,1742661631],
	
    [1742661632,1742662655],
	
    [1742663680,1742665727],
	
    [1742671872,1742675967],
	
    [1742675968,1742684159],
	
    [1742684160,1742692351],
	
    [1742692352,1742696447],
	
    [1742696448,1742698495],
	
    [1742698752,1742699007],
	
    [1742699264,1742699519],
	
    [1742699520,1742700543],
	
    [1742700544,1742702591],
	
    [1742703616,1742704639],
	
    [1742704640,1742708735],
	
    [1742708736,1742712831],
	
    [1742712832,1742714879],
	
    [1742715904,1742716927],
	
    [1742716928,1742733311],
	
    [1742733312,1742734335],
	
    [1742743552,1742745599],
	
    [1742748672,1742749695],
	
    [1742789632,1742790655],
	
    [1742790656,1742792703],
	
    [1742792704,1742793727],
	
    [1742874624,1742875647],
	
    [1742878720,1742880767],
	
    [1742884864,1742885887],
	
    [1742894080,1742895103],
	
    [1742898176,1742899199],
	
    [1742904320,1742905343],
	
    [1742910464,1742911487],
	
    [1742914560,1742915583],
	
    [1742942208,1742943231],
	
    [1742948352,1742950399],
	
    [1742950400,1742951423],
	
    [1742955520,1742956543],
	
    [1742960640,1742961663],
	
    [1742963712,1742964735],
	
    [1742964736,1742965759],
	
    [1742980096,1742981119],
	
    [1742982144,1742982655],
	
    [1742982656,1742982911],
	
    [1742984192,1742985215],
	
    [1742988288,1742989311],
	
    [1742998528,1742999551],
	
    [1743017984,1743019007],
	
    [1743030272,1743031295],
	
    [1743036416,1743037439],
	
    [1743040512,1743041535],
	
    [1743047680,1743048703],
	
    [1743048704,1743049727],
	
    [1743054848,1743055871],
	
    [1743066112,1743067135],
	
    [1743076352,1743076863],
	
    [1743076864,1743077119],
	
    [1743095808,1743096831],
	
    [1743098880,1743099903],
	
    [1743105024,1743106047],
	
    [1743115264,1743116287],
	
    [1743116288,1743118335],
	
    [1743119360,1743120383],
	
    [1743121408,1743122431],
	
    [1743122432,1743123455],
	
    [1743126528,1743127551],
	
    [1743133696,1743134719],
	
    [1743136768,1743138815],
	
    [1743151104,1743152127],
	
    [1743176704,1743177727],
	
    [1743177728,1743179775],
	
    [1743180800,1743181823],
	
    [1743186944,1743187967],
	
    [1743196160,1743198207],
	
    [1743208448,1743210495],
	
    [1743228928,1743229951],
	
    [1743238144,1743239167],
	
    [1743254528,1743255551],
	
    [1743258624,1743259647],
	
    [1743294464,1743295487],
	
    [1743311872,1743312383],
	
    [1743312384,1743312639],
	
    [1743324160,1743325183],
	
    [1743334400,1743335423],
	
    [1743336448,1743337471],
	
    [1743349760,1743350783],
	
    [1743355904,1743356927],
	
    [1743357952,1743358975],
	
    [1743381504,1743382527],
	
    [1743388672,1743389695],
	
    [1743393792,1743394815],
	
    [1743403008,1743404031],
	
    [1743420416,1743421439],
	
    [1743421440,1743422463],
	
    [1743432704,1743433727],
	
    [1743434752,1743435775],
	
    [1743468544,1743470591],
	
    [1743474688,1743476735],
	
    [1743486976,1743491071],
	
    [1743491072,1743493119],
	
    [1743501312,1743502335],
	
    [1743503360,1743504383],
	
    [1743505408,1743506431],
	
    [1743510528,1743511551],
	
    [1743511552,1743519743],
	
    [1743519744,1743536127],
	
    [1743536128,1743544319],
	
    [1743544320,1743545343],
	
    [1743550464,1743551487],
	
    [1743566848,1743567871],
	
    [1743581184,1743585279],
	
    [1743585280,1743589375],
	
    [1743591424,1743593471],
	
    [1743602688,1743603711],
	
    [1743607808,1743608831],
	
    [1743624192,1743625215],
	
    [1743630336,1743634431],
	
    [1743634432,1743650815],
	
    [1743650816,1743652863],
	
    [1743654912,1743659007],
	
    [1743659008,1743663103],
	
    [1743663104,1743665151],
	
    [1743665152,1743666175],
	
    [1743673344,1743675391],
	
    [1743675392,1743676415],
	
    [1743684608,1743685631],
	
    [1743686656,1743687679],
	
    [1743687680,1743688703],
	
    [1743691776,1743699967],
	
    [1743700992,1743702015],
	
    [1743703040,1743704063],
	
    [1743715328,1743716351],
	
    [1743716352,1743717375],
	
    [1743727616,1743728639],
	
    [1743733760,1743734783],
	
    [1743755264,1743757311],
	
    [1743762432,1743763455],
	
    [1743763456,1743764479],
	
    [1743765504,1743767551],
	
    [1743768576,1743769599],
	
    [1743769600,1743770623],
	
    [1743773696,1743774719],
	
    [1743778816,1743779839],
	
    [1743785984,1743787007],
	
    [1743791104,1743792127],
	
    [1743800320,1743801343],
	
    [1743803392,1743804415],
	
    [1743813632,1743814655],
	
    [1743825920,1743826943],
	
    [1743830016,1743831039],
	
    [1743844352,1743845375],
	
    [1743850496,1743851519],
	
    [1743870976,1743871999],
	
    [1743872000,1743873023],
	
    [1743888384,1743889407],
	
    [1743894528,1743896575],
	
    [1743903744,1743904767],
	
    [1743945728,1743946239],
	
    [1743953920,1743954943],
	
    [1743955968,1743958015],
	
    [1743958016,1743959039],
	
    [1743964160,1743965183],
	
    [1743967232,1743968255],
	
    [1743969280,1743970303],
	
    [1743974400,1743975423],
	
    [1744013312,1744014335],
	
    [1744043008,1744044031],
	
    [1744048128,1744049151],
	
    [1744058880,1744059391],
	
    [1744059392,1744060415],
	
    [1744060416,1744064511],
	
    [1744064512,1744066559],
	
    [1744073728,1744074751],
	
    [1744086016,1744087039],
	
    [1744103424,1744104447],
	
    [1744108544,1744109567],
	
    [1744115456,1744115711],
	
    [1744122880,1744123903],
	
    [1744124928,1744125951],
	
    [1744130048,1744131071],
	
    [1744141312,1744142335],
	
    [1744142336,1744143359],
	
    [1744177152,1744179199],
	
    [1744205824,1744207871],
	
    [1744208896,1744209919],
	
    [1744214016,1744215039],
	
    [1744283648,1744285695],
	
    [1744285696,1744286719],
	
    [1744291840,1744292863],
	
    [1744294912,1744295935],
	
    [1744322560,1744323071],
	
    [1744331776,1744332799],
	
    [1744337920,1744338943],
	
    [1744345088,1744346111],
	
    [1744349184,1744350207],
	
    [1744355328,1744356351],
	
    [1744360448,1744361471],
	
    [1744363520,1744365567],
	
    [1744373760,1744375807],
	
    [1744385024,1744386047],
	
    [1744404480,1744405503],
	
    [1744406528,1744407551],
	
    [1744408576,1744409599],
	
    [1744413696,1744414719],
	
    [1744414720,1744416767],
	
    [1744416768,1744417791],
	
    [1744419840,1744420863],
	
    [1744421120,1744421375],
	
    [1744434176,1744435199],
	
    [1744436224,1744437247],
	
    [1744445440,1744446463],
	
    [1744463872,1744464895],
	
    [1744468992,1744470015],
	
    [1744483328,1744484351],
	
    [1744486400,1744487423],
	
    [1744492544,1744493567],
	
    [1744494592,1744495615],
	
    [1744497664,1744498687],
	
    [1744500736,1744502783],
	
    [1744510976,1744511999],
	
    [1744524288,1744525311],
	
    [1744527360,1744528383],
	
    [1744534528,1744535551],
	
    [1744543744,1744544767],
	
    [1744551936,1744552959],
	
    [1744555008,1744556031],
	
    [1744564224,1744565247],
	
    [1744575488,1744576511],
	
    [1744577536,1744578559],
	
    [1744584704,1744585727],
	
    [1744592896,1744593919],
	
    [1744594944,1744595967],
	
    [1744612352,1744613375],
	
    [1744620544,1744621567],
	
    [1744621568,1744622591],
	
    [1744627712,1744628735],
	
    [1744631808,1744632831],
	
    [1744634880,1744635903],
	
    [1744649216,1744650239],
	
    [1744686080,1744687103],
	
    [1744690176,1744691199],
	
    [1744691200,1744692223],
	
    [1744693248,1744694271],
	
    [1744701440,1744702463],
	
    [1744704512,1744705535],
	
    [1744715776,1744717823],
	
    [1744718848,1744719871],
	
    [1744728064,1744729087],
	
    [1744744448,1744745471],
	
    [1744747520,1744748543],
	
    [1744782336,1744783359],
	
    [1744787456,1744789503],
	
    [1744799744,1744801791],
	
    [1744812032,1744813055],
	
    [1744816128,1744817151],
	
    [1744818176,1744819199],
	
    [1744823296,1744824319],
	
    [1755735808,1755736063],
	
    [1759429632,1759429887],
	
    [1778384896,1778385151],
	
    [1778385408,1778385919],
	
    [1778385920,1778386943],
	
    [1778386944,1778388991],
	
    [1778388992,1778393087],
	
    [1778396160,1778397183],
	
    [1778401280,1778417663],
	
    [1778515968,1778516479],
	
    [1778516736,1778516991],
	
    [1778516992,1778518015],
	
    [1778518016,1778520063],
	
    [1778520064,1778524159],
	
    [1778524160,1778532351],
	
    [1778532352,1778548735],
	
    [1778548736,1778581503],
	
    [1778585600,1778589695],
	
    [1778589696,1778597887],
	
    [1778597888,1778601983],
	
    [1778601984,1778603007],
	
    [1778604032,1778606079],
	
    [1778606080,1778614271],
	
    [1778614272,1778647039],
	
    [1778647040,1778909183],
	
    [1778909184,1779040255],
	
    [1779105792,1779171327],
	
    [1779171328,1779433471],
	
    [1779433472,1780482047],
	
    [1780482048,1781530623],
	
    [1781530624,1781532671],
	
    [1781532672,1781533695],
	
    [1781534720,1781538815],
	
    [1781538816,1781542911],
	
    [1781545216,1781545471],
	
    [1781545984,1781546495],
	
    [1781546752,1781547007],
	
    [1781547008,1781563391],
	
    [1781563392,1781596159],
	
    [1781596416,1781596671],
	
    [1781596672,1781597183],
	
    [1781597184,1781598207],
	
    [1781598208,1781600255],
	
    [1781600256,1781604351],
	
    [1781604352,1781612543],
	
    [1781612544,1781620735],
	
    [1781620736,1781620991],
	
    [1781621248,1781621759],
	
    [1781621760,1781622783],
	
    [1781622784,1781624831],
	
    [1781624832,1781628927],
	
    [1781628928,1781661695],
	
    [1781661696,1781727231],
	
    [1781792768,1782054911],
	
    [1782054912,1782579199],
	
    [1783234560,1783300095],
	
    [1783300096,1783332863],
	
    [1783332864,1783349247],
	
    [1783351552,1783351807],
	
    [1783352320,1783353343],
	
    [1783353344,1783357439],
	
    [1783357440,1783365631],
	
    [1783627776,1784676351],
	
    [1785462784,1785724927],
	
    [1785724928,1786773503],
	
    [1793064960,1794113535],
	
    [1805212416,1805212671],
	
    [1805212672,1805213183],
	
    [1833370624,1833370879],
	
    [1844707328,1844772863],
	
    [1845886976,1846018047],
	
    [1846542336,1846804479],
	
    [1847732224,1847734271],
	
    [1848115200,1848377343],
	
    [1848380416,1848381439],
	
    [1848414208,1848418303],
	
    [1848639488,1848705023],
	
    [1848836096,1848901631],
	
    [1848901632,1849032703],
	
    [1849163776,1849688063],
	
    [1849688064,1849819135],
	
    [1850212352,1850343423],
	
    [1850408960,1850474495],
	
    [1850474496,1850478591],
	
    [1850478592,1850479615],
	
    [1850479616,1850479871],
	
    [1850480128,1850480383],
	
    [1850480640,1850482687],
	
    [1850482688,1850490879],
	
    [1850508288,1850509311],
	
    [1850514432,1850515455],
	
    [1850521600,1850522623],
	
    [1850523648,1850540031],
	
    [1850540032,1850572799],
	
    [1850736640,1851260927],
	
    [1851260928,1851523071],
	
    [1851540480,1851541503],
	
    [1851596800,1851604991],
	
    [1851654144,1851785215],
	
    [1851785216,1853882367],
	
    [1855455232,1855717375],
	
    [1855717376,1855848447],
	
    [1856372736,1856503807],
	
    [1856815104,1856831487],
	
    [1856831488,1856839679],
	
    [1856839680,1856843775],
	
    [1856847872,1856856063],
	
    [1856880640,1856888831],
	
    [1857028096,1858076671],
	
    [1858076672,1860173823],
	
    [1860435968,1860698111],
	
    [1860706304,1860714495],
	
    [1860960256,1861091327],
	
    [1861222400,1862270975],
	
    [1862270976,1866465279],
	
    [1866596352,1866661887],
	
    [1866711040,1866715135],
	
    [1866743808,1866751999],
	
    [1866989568,1867513855],
	
    [1867841536,1867907071],
	
    [1868283904,1868292095],
	
    [1868363776,1868365823],
	
    [1869611008,1869873151],
	
    [1869873152,1870004223],
	
    [1870055424,1870057471],
	
    [1870086144,1870102527],
	
    [1870102528,1870110719],
	
    [1870135296,1870397439],
	
    [1870397440,1870462975],
	
    [1870528512,1870659583],
	
    [1870659584,1872756735],
	
    [1872756736,1873281023],
	
    [1873412096,1873477631],
	
    [1873543168,1873805311],
	
    [1873805312,1874329599],
	
    [1874460672,1874591743],
	
    [1874853888,1875902463],
	
    [1875902464,1876426751],
	
    [1876761600,1876761855],
	
    [1876787200,1876819967],
	
    [1876819968,1876885503],
	
    [1876886528,1876887551],
	
    [1876887552,1876889599],
	
    [1876889600,1876890623],
	
    [1876946944,1876947967],
	
    [1876949248,1876949503],
	
    [1876949504,1876950015],
	
    [1876951040,1877475327],
	
    [1877696512,1877704703],
	
    [1877711872,1877712895],
	
    [1877712896,1877714943],
	
    [1877715456,1877715967],
	
    [1877715968,1877716991],
	
    [1877716992,1877721087],
	
    [1879048192,1883242495],
	
    [1883242496,1883504639],
	
    [1883848704,1883865087],
	
    [1883897856,1883963391],
	
    [1884291072,1885339647],
	
    [1885339648,1885863935],
	
    [1886224384,1886257151],
	
    [1886322688,1886388223],
	
    [1886388224,1886650367],
	
    [1886650368,1886781439],
	
    [1887043584,1887174655],
	
    [1887174656,1887436799],
	
    [1887436800,1887698943],
	
    [1887698944,1887764479],
	
    [1888038912,1888040959],
	
    [1891631104,1891893247],
	
    [1893728256,1895825407],
	
    [1895825408,1896349695],
	
    [1896349696,1896480767],
	
    [1896595456,1896603647],
	
    [1896611840,1896873983],
	
    [1896873984,1897005055],
	
    [1897005056,1897070591],
	
    [1897261056,1897263103],
	
    [1897398272,1897660415],
	
    [1897857024,1897922559],
	
    [1898708992,1898971135],
	
    [1898971136,1899233279],
	
    [1899274240,1899282431],
	
    [1899291648,1899292671],
	
    [1899364352,1899495423],
	
    [1899495424,1899626495],
	
    [1899626496,1899692031],
	
    [1899692032,1899724799],
	
    [1899749376,1899750399],
	
    [1899888640,1900019711],
	
    [1900019712,1904214015],
	
    [1904214016,1904345087],
	
    [1904369664,1904373759],
	
    [1904373760,1904375807],
	
    [1904476160,1904738303],
	
    [1904738304,1905262591],
	
    [1908539392,1908670463],
	
    [1908761600,1908762111],
	
    [1908762112,1908762367],
	
    [1908932608,1909063679],
	
    [1909063680,1909129215],
	
    [1909194752,1909456895],
	
    [1909481472,1909489663],
	
    [1909489664,1909522431],
	
    [1909522432,1909587967],
	
    [1909719040,1909735423],
	
    [1909744640,1909745663],
	
    [1909766144,1909768191],
	
    [1909784576,1909817343],
	
    [1909850112,1909981183],
	
    [1910112256,1910243327],
	
    [1910243328,1910505471],
	
    [1910505472,1911554047],
	
    [1911554048,1912078335],
	
    [1912078336,1912340479],
	
    [1914437632,1914503167],
	
    [1914650624,1914652671],
	
    [1916141568,1916272639],
	
    [1916534784,1916796927],
	
    [1916796928,1917059071],
	
    [1917059072,1917124607],
	
    [1917796352,1917812735],
	
    [1917845504,1918894079],
	
    [1918894080,1919418367],
	
    [1919418368,1919680511],
	
    [1919811584,1919815679],
	
    [1919827968,1919844351],
	
    [1919877120,1919885311],
	
    [1919918080,1919926271],
	
    [1919943680,1919944703],
	
    [1919944704,1919945727],
	
    [1919945728,1919946239],
	
    [1919948800,1919950847],
	
    [1919950848,1919959039],
	
    [1919959040,1919967231],
	
    [1919967232,1919971327],
	
    [1919972352,1919973375],
	
    [1919973376,1919975423],
	
    [1919977472,1919979519],
	
    [1919979520,1919983615],
	
    [1919983616,1919991807],
	
    [1919991808,1919999999],
	
    [1920008192,1920040959],
	
    [1920040960,1920043007],
	
    [1920044032,1920045055],
	
    [1920045056,1920049151],
	
    [1920049152,1920057343],
	
    [1920058368,1920059391],
	
    [1920059392,1920061439],
	
    [1920061440,1920065535],
	
    [1920065536,1920069631],
	
    [1920073728,1920139263],
	
    [1920139264,1920155647],
	
    [1920156672,1920157695],
	
    [1920157696,1920159743],
	
    [1920159744,1920163839],
	
    [1920163840,1920172031],
	
    [1920172032,1920204799],
	
    [1920204800,1920466943],
	
    [1921253376,1921318911],
	
    [1921449984,1921515519],
	
    [1921646592,1921777663],
	
    [1921859584,1921861631],
	
    [1921863680,1921865727],
	
    [1921875968,1921892351],
	
    [1925447680,1925578751],
	
    [1925642240,1925644287],
	
    [1926234112,1927282687],
	
    [1927282688,1929379839],
	
    [1930952704,1931214847],
	
    [1931214848,1931345919],
	
    [1931427840,1931431935],
	
    [1931476992,1931739135],
	
    [1932146688,1932147711],
	
    [1932263424,1932525567],
	
    [1932525568,1933574143],
	
    [1933918208,1933922303],
	
    [1934884864,1934901247],
	
    [1934934016,1934942207],
	
    [1934999552,1935015935],
	
    [1935933440,1936195583],
	
    [1936195584,1936457727],
	
    [1937244160,1937506303],
	
    [1937510400,1937514495],
	
    [1939079168,1939341311],
	
    [1939341312,1939865599],
	
    [1940275200,1940283391],
	
    [1940389888,1940914175],
	
    [1941176320,1941438463],
	
    [1941635072,1941639167],
	
    [1941831680,1941962751],
	
    [1941962752,1944059903],
	
    [1944059904,1945108479],
	
    [1946159104,1946161151],
	
    [1946163200,1946165247],
	
    [1946222592,1946288127],
	
    [1946288128,1946419199],
	
    [1946419200,1946681343],
	
    [1946681344,1946943487],
	
    [1947009024,1947074559],
	
    [1947205632,1948254207],
	
    [1949433856,1949437951],
	
    [1949564928,1949827071],
	
    [1949827072,1949958143],
	
    [1949990912,1949995007],
	
    [1950011392,1950015487],
	
    [1950089216,1950351359],
	
    [1950482432,1950498815],
	
    [1950498816,1950507007],
	
    [1950507008,1950511103],
	
    [1950513152,1950514175],
	
    [1950648320,1950650367],
	
    [1950658560,1950660607],
	
    [1950679040,1950744575],
	
    [1950744576,1950777343],
	
    [1951137792,1951399935],
	
    [1951727616,1951793151],
	
    [1952026624,1952030719],
	
    [1952075776,1952079871],
	
    [1952102400,1952104447],
	
    [1952382976,1952448511],
	
    [1953497088,1953759231],
	
    [1953759232,1953890303],
	
    [1954545664,1958739967],
	
    [1958739968,1958805503],
	
    [1958809600,1958813695],
	
    [1958813696,1958821887],
	
    [1958850560,1958852607],
	
    [1958871040,1959002111],
	
    [1959002112,1959004159],
	
    [1959004160,1959005183],
	
    [1959005184,1959005695],
	
    [1959006208,1959010303],
	
    [1959010560,1959010815],
	
    [1959010816,1959011327],
	
    [1959011328,1959012351],
	
    [1959012352,1959014399],
	
    [1959014400,1959018495],
	
    [1959018496,1959034879],
	
    [1959034880,1959067647],
	
    [1959108608,1959110655],
	
    [1959113728,1959114239],
	
    [1959133184,1959198719],
	
    [1959198720,1959231487],
	
    [1959231488,1959239679],
	
    [1959526400,1959657471],
	
    [1959723008,1959788543],
	
    [1959788544,1960050687],
	
    [1960091648,1960095743],
	
    [1960132608,1960148991],
	
    [1960148992,1960181759],
	
    [1960189952,1960198143],
	
    [1960198144,1960202239],
	
    [1960214528,1960247295],
	
    [1960247296,1960312831],
	
    [1960312832,1960574975],
	
    [1960837120,1961885695],
	
    [1962016768,1962147839],
	
    [1962147840,1962409983],
	
    [1962409984,1962541055],
	
    [1962672128,1962803199],
	
    [1962829824,1962831871],
	
    [1962835968,1962868735],
	
    [1962901504,1962934271],
	
    [1963458560,1963982847],
	
    [1964310528,1964376063],
	
    [1964376064,1964507135],
	
    [1964507136,1965031423],
	
    [1965031424,1965555711],
	
    [1965555712,1965817855],
	
    [1965817856,1965948927],
	
    [1966080000,1966211071],
	
    [1966211072,1966276607],
	
    [1966309376,1966342143],
	
    [1966419968,1966424063],
	
    [1966452736,1966456831],
	
    [1966669824,1966735359],
	
    [1966735360,1966751743],
	
    [1966800896,1966866431],
	
    [1966866432,1967128575],
	
    [1967128576,1967652863],
	
    [1967652864,1967783935],
	
    [1967800320,1967808511],
	
    [1967816704,1967849471],
	
    [1967849472,1967915007],
	
    [1967915008,1968177151],
	
    [1968177152,1969225727],
	
    [1969487872,1969618943],
	
    [1969688576,1969692671],
	
    [1969694720,1969696767],
	
    [1969702912,1969704959],
	
    [1969717248,1969721343],
	
    [1969793024,1969795071],
	
    [1969798144,1969798399],
	
    [1969881088,1970012159],
	
    [1970274304,1970798591],
	
    [1970814976,1970831359],
	
    [1970831360,1970864127],
	
    [1970864128,1970872319],
	
    [1970872320,1970874367],
	
    [1970874368,1970875391],
	
    [1970875392,1970875903],
	
    [1970875904,1970876159],
	
    [1970876416,1970880511],
	
    [1970880512,1970896895],
	
    [1970896896,1970900991],
	
    [1970902016,1970903039],
	
    [1970903040,1970905087],
	
    [1970905088,1970913279],
	
    [1970913280,1970915327],
	
    [1970962432,1970995199],
	
    [1971060736,1971322879],
	
    [1971322880,1975517183],
	
    [1981284352,1981415423],
	
    [1981415424,1981431807],
	
    [1981431808,1981439999],
	
    [1981440000,1981444095],
	
    [1981444096,1981446143],
	
    [1981448192,1981480959],
	
    [1981546496,1981808639],
	
    [1983905792,1984036863],
	
    [1984036864,1984102399],
	
    [1984131072,1984135167],
	
    [1984430080,1984954367],
	
    [1984954368,1985085439],
	
    [1985216512,1985347583],
	
    [1985486848,1985495039],
	
    [1985495040,1985511423],
	
    [1985511424,1985544191],
	
    [1985544192,1985609727],
	
    [1986400256,1986404351],
	
    [1986404352,1986406399],
	
    [1986503680,1986504703],
	
    [1986504704,1986506751],
	
    [1986506752,1986507775],
	
    [1986524416,1986524671],
	
    [1986524672,1986525183],
	
    [1987051520,1987575807],
	
    [1987575808,1987837951],
	
    [1987837952,1987969023],
	
    [1987969280,1987969535],
	
    [1987969536,1987970047],
	
    [1987970048,1987971071],
	
    [1987971072,1987973119],
	
    [1987973120,1987973631],
	
    [1987973632,1987973887],
	
    [1987977216,1987985407],
	
    [1987985408,1988001791],
	
    [1988001792,1988034559],
	
    [1988067328,1988075519],
	
    [1988362240,1988624383],
	
    [1989148672,1989410815],
	
    [1991376896,1991442431],
	
    [1991507968,1991770111],
	
    [1991771392,1991771647],
	
    [1991772160,1991772671],
	
    [1991772672,1991772927],
	
    [1991796992,1991797247],
	
    [1991797248,1991797759],
	
    [1991797760,1991798271],
	
    [1991798272,1991798527],
	
    [1991798784,1991802879],
	
    [1991802880,1991819263],
	
    [1991819264,1991821311],
	
    [1991823360,1991827455],
	
    [1991831552,1991835647],
	
    [1991901184,1991966719],
	
    [1991966720,1991970815],
	
    [1991970816,1991972863],
	
    [1991972864,1991973375],
	
    [1991973632,1991973887],
	
    [1991973888,1991974911],
	
    [1991974912,1991983103],
	
    [1991983104,1991999487],
	
    [1991999488,1992032255],
	
    [1992032256,1992097791],
	
    [1992163328,1992228863],
	
    [1992228864,1992261631],
	
    [1992261632,1992278015],
	
    [1992278016,1992282111],
	
    [1992282112,1992284159],
	
    [1992292352,1992294399],
	
    [1992294400,1992359935],
	
    [1992359936,1992360959],
	
    [1992368128,1992372223],
	
    [1992374272,1992376319],
	
    [1992377344,1992378367],
	
    [1992378368,1992378623],
	
    [1992379648,1992379903],
	
    [1992384512,1992392703],
	
    [1992425472,1992458239],
	
    [1992458240,1992474623],
	
    [1992474624,1992482815],
	
    [1992484864,1992486911],
	
    [1992486912,1992491007],
	
    [1992491008,1992556543],
	
    [1992556544,1992818687],
	
    [1992949760,1993080831],
	
    [1993080832,1993342975],
	
    [1993605120,1993736191],
	
    [1993850880,1993867263],
	
    [1994391552,1994653695],
	
    [1994653696,1994686463],
	
    [1994686464,1994690559],
	
    [1994690560,1994692607],
	
    [1994693632,1994694655],
	
    [1994694656,1994702847],
	
    [1994702848,1994719231],
	
    [1994719232,1994784767],
	
    [1994784768,1994850303],
	
    [1995374592,1995440127],
	
    [1995571200,1995636735],
	
    [1995702272,1995964415],
	
    [1995964416,1996488703],
	
    [1996488704,1996619775],
	
    [1996619776,1996627967],
	
    [1996652544,1996685311],
	
    [1996685312,1996750847],
	
    [1996750848,1997012991],
	
    [1997012992,1997078527],
	
    [1997144064,1997176831],
	
    [1997506560,1997508607],
	
    [1997537280,1997602815],
	
    [1997717504,1997721599],
	
    [1997721600,1997723647],
	
    [1997725696,1997726719],
	
    [1997726720,1997726975],
	
    [1997727232,1997727743],
	
    [1997727744,1997729791],
	
    [1997729792,1997733887],
	
    [1997733888,1997799423],
	
    [1997799424,1998061567],
	
    [1998274560,1998290943],
	
    [1998290944,1998323711],
	
    [1998330880,1998331135],
	
    [1998389248,1998454783],
	
    [1998467072,1998471167],
	
    [1998569472,1998577663],
	
    [1998585856,1998847999],
	
    [1998848000,1998979071],
	
    [1998979072,1999011839],
	
    [1999011840,1999028223],
	
    [1999028224,1999032319],
	
    [1999032320,1999033343],
	
    [1999033344,1999033855],
	
    [1999033856,1999033887],
	
    [1999033912,1999033919],
	
    [1999033920,1999033983],
	
    [1999033984,1999034111],
	
    [1999034112,1999034367],
	
    [1999034368,1999036415],
	
    [1999044608,1999110143],
	
    [1999110144,1999126527],
	
    [1999126528,1999130623],
	
    [1999142912,1999175679],
	
    [1999175680,1999241215],
	
    [1999241216,1999249407],
	
    [1999254528,1999255551],
	
    [1999273984,1999278079],
	
    [1999298560,1999306751],
	
    [1999372288,1999503359],
	
    [1999634432,2000158719],
	
    [2000224256,2000289791],
	
    [2000289792,2000355327],
	
    [2000388096,2000420863],
	
    [2000420864,2000551935],
	
    [2000551936,2000617471],
	
    [2000625664,2000633855],
	
    [2001457152,2001461247],
	
    [2001600512,2001731583],
	
    [2001731584,2001797119],
	
    [2001915904,2001919999],
	
    [2001993728,2002255871],
	
    [2002255872,2002518015],
	
    [2002780160,2003304447],
	
    [2003566592,2003697663],
	
    [2003828736,2004877311],
	
    [2004877312,2005925887],
	
    [2005925888,2006188031],
	
    [2006228992,2006237183],
	
    [2006433792,2006450175],
	
    [2007025664,2007027711],
	
    [2007070720,2007072767],
	
    [2007072768,2007105535],
	
    [2007105536,2007236607],
	
    [2007236608,2007498751],
	
    [2008023040,2009071615],
	
    [2011693056,2011824127],
	
    [2011922432,2011930623],
	
    [2011930624,2011934719],
	
    [2011936768,2011937791],
	
    [2012741632,2013003775],
	
    [2013028352,2013030399],
	
    [2013065216,2013067263],
	
    [2013067264,2013068287],
	
    [2013068288,2013068799],
	
    [2013068800,2013069055],
	
    [2013069312,2013134847],
	
    [2013134848,2013265919],
	
    [2013265920,2014314495],
	
    [2014838784,2015100927],
	
    [2015232000,2015363071],
	
    [2015363072,2016411647],
	
    [2016411648,2016542719],
	
    [2016673792,2016935935],
	
    [2017460224,2017984511],
	
    [2017992704,2018000895],
	
    [2018017280,2018050047],
	
    [2018246656,2018508799],
	
    [2018508800,2019033087],
	
    [2019035136,2019037183],
	
    [2019164160,2019295231],
	
    [2019295232,2019360767],
	
    [2019426304,2019557375],
	
    [2021654528,2021916671],
	
    [2021916672,2021949439],
	
    [2021949440,2021965823],
	
    [2021965824,2021974015],
	
    [2021974016,2021976063],
	
    [2021976064,2021977087],
	
    [2021978112,2021982207],
	
    [2021982208,2022047743],
	
    [2022047744,2022178815],
	
    [2022182912,2022184959],
	
    [2022211584,2022227967],
	
    [2022244352,2022277119],
	
    [2022670336,2022678527],
	
    [2025848832,2030043135],
	
    [2030045184,2030047231],
	
    [2030047232,2030051327],
	
    [2030305280,2030436351],
	
    [2030567424,2031091711],
	
    [2031091712,2032140287],
	
    [2032140288,2032664575],
	
    [2032664576,2032926719],
	
    [2033057792,2033074175],
	
    [2033077248,2033078271],
	
    [2033090560,2033123327],
	
    [2033123328,2033188863],
	
    [2033188864,2033319935],
	
    [2033321984,2033324031],
	
    [2033385472,2033451007],
	
    [2033491968,2033500159],
	
    [2033504256,2033508351],
	
    [2033508352,2033516543],
	
    [2033627136,2033629183],
	
    [2033647616,2033663999],
	
    [2033713152,2033844223],
	
    [2033844224,2033876991],
	
    [2033879040,2033881087],
	
    [2033881088,2033885183],
	
    [2033885184,2033887231],
	
    [2033909760,2033975295],
	
    [2033975296,2034237439],
	
    [2034499584,2034761727],
	
    [2035023872,2035154943],
	
    [2035253248,2035269631],
	
    [2035875840,2035941375],
	
    [2036629504,2036662271],
	
    [2036662272,2036678655],
	
    [2036715520,2036719615],
	
    [2042626048,2043150335],
	
    [2043199488,2043201535],
	
    [2043215872,2043232255],
	
    [2043232256,2043236351],
	
    [2043236352,2043238399],
	
    [2043238400,2043239423],
	
    [2043239424,2043239935],
	
    [2043239936,2043240191],
	
    [2043240448,2043248639],
	
    [2043248640,2043281407],
	
    [2043412480,2043674623],
	
    [2044723200,2045771775],
	
    [2046296064,2046558207],
	
    [2046754816,2046820351],
	
    [2046836736,2046853119],
	
    [2046853120,2046885887],
	
    [2047082496,2047344639],
	
    [2047344896,2047345151],
	
    [2047346176,2047346687],
	
    [2047347200,2047347711],
	
    [2047347712,2047348735],
	
    [2047348736,2047352831],
	
    [2047352832,2047361023],
	
    [2047361024,2047365119],
	
    [2047365120,2047366143],
	
    [2047366656,2047367167],
	
    [2047367168,2047367423],
	
    [2047368192,2047369215],
	
    [2047369216,2047370239],
	
    [2047370240,2047370495],
	
    [2047373056,2047373311],
	
    [2047373312,2047375359],
	
    [2047375360,2047376383],
	
    [2047376384,2047376895],
	
    [2047377408,2047410175],
	
    [2047509504,2047510527],
	
    [2047510528,2047512575],
	
    [2047512576,2047516671],
	
    [2047516672,2047517695],
	
    [2047525888,2047526399],
	
    [2047531008,2047532031],
	
    [2047534080,2047535103],
	
    [2047535104,2047537151],
	
    [2047537152,2047539199],
	
    [2047539200,2047540223],
	
    [2047541248,2047574015],
	
    [2047606784,2047737855],
	
    [2047737856,2047770623],
	
    [2047787008,2047803391],
	
    [2049966080,2050031615],
	
    [2050031616,2050047999],
	
    [2050162688,2050228223],
	
    [2051014656,2053111807],
	
    [2053111808,2053242879],
	
    [2053279744,2053283839],
	
    [2053283840,2053285887],
	
    [2053286912,2053287935],
	
    [2053287936,2053292031],
	
    [2053292032,2053294079],
	
    [2053302272,2053304319],
	
    [2053304320,2053308415],
	
    [2053505024,2053509119],
	
    [2053521408,2053529599],
	
    [2054160384,2054176767],
	
    [2054176768,2054184959],
	
    [2054184960,2054185983],
	
    [2054188288,2054188543],
	
    [2054190592,2054190847],
	
    [2054191616,2054192127],
	
    [2054192128,2054192639],
	
    [2054193152,2054225919],
	
    [2054225920,2054291455],
	
    [2054291456,2054356991],
	
    [2054356992,2054373375],
	
    [2054377472,2054381567],
	
    [2054381568,2054389759],
	
    [2054389760,2054422527],
	
    [2054619136,2054684671],
	
    [2055234560,2055235583],
	
    [2055239680,2055241727],
	
    [2055733248,2056257535],
	
    [2056290304,2056323071],
	
    [2056830976,2056847359],
	
    [2057043968,2057306111],
	
    [2059141120,2059403263],
	
    [2059403264,2059665407],
	
    [2059796480,2059862015],
	
    [2059937792,2059939839],
	
    [2059943936,2059960319],
	
    [2060005376,2060009471],
	
    [2060189696,2060451839],
	
    [2061500416,2062548991],
	
    [2062548992,2063073279],
	
    [2063079424,2063081471],
	
    [2063085568,2063089663],
	
    [2063548416,2063550463],
	
    [2063630336,2063632383],
	
    [2063632384,2063632895],
	
    [2063633152,2063633407],
	
    [2063633408,2063634431],
	
    [2063634432,2063638527],
	
    [2063638528,2063646719],
	
    [2063859712,2064121855],
	
    [2064121856,2064646143],
	
    [2066842112,2066842367],
	
    [2066843648,2066844671],
	
    [2066844928,2066845183],
	
    [2066845440,2066845695],
	
    [2066847744,2066849791],
	
    [2066849792,2066857983],
	
    [2066857984,2066874367],
	
    [2066915328,2066923519],
	
    [2067005440,2067267583],
	
    [2067267584,2067398655],
	
    [2067398656,2067415039],
	
    [2067415040,2067419135],
	
    [2067419136,2067421183],
	
    [2067421184,2067422207],
	
    [2067423232,2067431423],
	
    [2067431424,2067464191],
	
    [2067464192,2067529727],
	
    [2067595264,2067660799],
	
    [2067660800,2067726335],
	
    [2067791872,2069889023],
	
    [2069889024,2070020095],
	
    [2070020096,2070052863],
	
    [2070118400,2070151167],
	
    [2070151168,2070159359],
	
    [2070210560,2070210815],
	
    [2070216704,2070282239],
	
    [2070347776,2070351871],
	
    [2070351872,2070353919],
	
    [2070353920,2070354943],
	
    [2070354944,2070355455],
	
    [2070355456,2070355711],
	
    [2070355968,2070364159],
	
    [2070364160,2070380543],
	
    [2070709760,2070710015],
	
    [2070710784,2070711295],
	
    [2070711296,2070711551],
	
    [2070711808,2070712063],
	
    [2070728704,2070732799],
	
    [2070937600,2071986175],
	
    [2071986176,2072510463],
	
    [2072576000,2072641535],
	
    [2072641536,2072772607],
	
    [2073034752,2074083327],
	
    [2074083328,2075131903],
	
    [2075147264,2075148287],
	
    [2075152384,2075156479],
	
    [2075197440,2075262975],
	
    [2075262976,2075394047],
	
    [2075394048,2075656191],
	
    [2075656192,2076180479],
	
    [2076442624,2076573695],
	
    [2076672000,2076704767],
	
    [2077097984,2077229055],
	
    [2078801920,2079064063],
	
    [2079457280,2079490047],
	
    [2079506432,2079508479],
	
    [2079588352,2079850495],
	
    [2079916032,2079981567],
	
    [2080178176,2080243711],
	
    [2080268288,2080270335],
	
    [2080784384,2080800767],
	
    [2081292288,2081423359],
	
    [2081423360,2081554431],
	
    [2081685504,2081947647],
	
    [2082258944,2082275327],
	
    [2082275328,2082308095],
	
    [2082406400,2082471935],
	
    [2083024896,2083028991],
	
    [2083028992,2083045375],
	
    [2083045376,2083053567],
	
    [2083057664,2083058687],
	
    [2083127296,2083192831],
	
    [2083454976,2083471359],
	
    [2084569088,2084700159],
	
    [2084700160,2084732927],
	
    [2084765696,2084831231],
	
    [2084831232,2084962303],
	
    [2084962304,2084963327],
	
    [2085093376,2085617663],
	
    [2086141952,2086666239],
	
    [2087454720,2087456767],
	
    [2087462912,2087464959],
	
    [2087542784,2087544831],
	
    [2087714816,2088239103],
	
    [2088632320,2088763391],
	
    [2088763392,2089287679],
	
    [2090041344,2090074111],
	
    [2090240256,2090240511],
	
    [2090270720,2090336255],
	
    [2090336256,2090401791],
	
    [2090598400,2090663935],
	
    [2090860544,2091384831],
	
    [2091646976,2091909119],
	
    [2092957696,2093088767],
	
    [2093219840,2093285375],
	
    [2093481984,2094006271],
	
    [2094792704,2095054847],
	
    [2095054848,2096103423],
	
    [2096103424,2096136191],
	
    [2096136192,2096152575],
	
    [2096234496,2096300031],
	
    [2096349184,2096365567],
	
    [2096627712,2096660479],
	
    [2096693248,2096758783],
	
    [2096758784,2096791551],
	
    [2096793600,2096795647],
	
    [2096795648,2096799743],
	
    [2096799744,2096807935],
	
    [2096807936,2096824319],
	
    [2096824320,2096889855],
	
    [2097020928,2097037311],
	
    [2099232768,2099249151],
	
    [2099249152,2100297727],
	
    [2100985856,2101018623],
	
    [2101182464,2101215231],
	
    [2101215232,2101231615],
	
    [2101346304,2103443455],
	
    [2103443456,2103574527],
	
    [2103574528,2103640063],
	
    [2103967744,2104492031],
	
    [2104492032,2105540607],
	
    [2108227584,2108293119],
	
    [2108358656,2108424191],
	
    [2110783488,2110791679],
	
    [2110792960,2110793215],
	
    [2110793728,2110793983],
	
    [2110795008,2110795263],
	
    [2110795776,2110799871],
	
    [2110914560,2111045631],
	
    [2111111168,2111143935],
	
    [2111201280,2111209471],
	
    [2111242240,2111258623],
	
    [2111307776,2111832063],
	
    [2113830912,2113863679],
	
    [2154561536,2154627071],
	
    [2166095872,2166161407],
	
    [2178940416,2178940671],
	
    [2212782080,2212782335],
	
    [2229796864,2229862399],
	
    [2230158848,2230159103],
	
    [2230162944,2230163199],
	
    [2259615744,2259681279],
	
    [2275397632,2275401727],
	
    [2280935424,2280939519],
	
    [2302360320,2302360575],
	
    [2302367744,2302368767],
	
    [2317415424,2317416447],
	
    [2332375040,2332377087],
	
    [2332381184,2332382207],
	
    [2332384256,2332385279],
	
    [2332393472,2332394495],
	
    [2332401664,2332402687],
	
    [2332409856,2332410879],
	
    [2332412928,2332413951],
	
    [2332423168,2332424191],
	
    [2332622848,2332688383],
	
    [2340487168,2340552703],
	
    [2341732352,2341797887],
	
    [2342191104,2342256639],
	
    [2342453248,2342461439],
	
    [2342461440,2342463487],
	
    [2342463488,2342464511],
	
    [2342466048,2342466559],
	
    [2342466560,2342467583],
	
    [2342467584,2342469631],
	
    [2342469632,2342477823],
	
    [2342477824,2342481919],
	
    [2342481920,2342482943],
	
    [2342482944,2342483455],
	
    [2342483968,2342486015],
	
    [2342486016,2342518783],
	
    [2343174144,2343239679],
	
    [2343567360,2343632895],
	
    [2344026112,2344091647],
	
    [2344222720,2344288255],
	
    [2344419328,2344484863],
	
    [2344878080,2345009151],
	
    [2345009152,2345011199],
	
    [2345011200,2345011711],
	
    [2345011968,2345012223],
	
    [2345012224,2345013247],
	
    [2345013248,2345017343],
	
    [2345017344,2345025535],
	
    [2345025536,2345033727],
	
    [2345033728,2345037823],
	
    [2345037824,2345039871],
	
    [2345040128,2345040383],
	
    [2345040384,2345040895],
	
    [2345040896,2345041919],
	
    [2345041920,2345074687],
	
    [2345074688,2345140223],
	
    [2345140224,2345664511],
	
    [2345664512,2346188799],
	
    [2346254336,2346319871],
	
    [2346385408,2346450943],
	
    [2346450944,2346483711],
	
    [2346483712,2346500095],
	
    [2346500096,2346501119],
	
    [2346501120,2346501631],
	
    [2346502144,2346504191],
	
    [2346504192,2346504703],
	
    [2346505216,2346506239],
	
    [2346506240,2346508287],
	
    [2346508288,2346516479],
	
    [2346516480,2346582015],
	
    [2346713088,2346778623],
	
    [2346844160,2346975231],
	
    [2353725440,2353790975],
	
    [2355482624,2355482879],
	
    [2358181888,2358247423],
	
    [2362245120,2362261503],
	
    [2362261504,2362269695],
	
    [2362269696,2362273791],
	
    [2362273792,2362275839],
	
    [2362275840,2362276351],
	
    [2362276608,2362276863],
	
    [2362276864,2362277887],
	
    [2362277888,2362310655],
	
    [2362310656,2362441727],
	
    [2362572800,2362638335],
	
    [2363490304,2363555839],
	
    [2364342272,2364407807],
	
    [2364538880,2364604415],
	
    [2364725248,2364725503],
	
    [2364727040,2364727295],
	
    [2364727296,2364727551],
	
    [2364735488,2364801023],
	
    [2364932096,2364997631],
	
    [2365128704,2365194239],
	
    [2365194240,2365259775],
	
    [2365521920,2365587455],
	
    [2415919104,2415984639],
	
    [2416377856,2416443391],
	
    [2416705536,2416771071],
	
    [2418315776,2418316287],
	
    [2419067904,2419068927],
	
    [2419081216,2419082239],
	
    [2419087360,2419088383],
	
    [2419104768,2419105791],
	
    [2419110912,2419111935],
	
    [2419111936,2419112959],
	
    [2419117056,2419118079],
	
    [2419118080,2419120127],
	
    [2419326976,2419392511],
	
    [2423980032,2424045567],
	
    [2429767680,2429767935],
	
    [2429782528,2429782783],
	
    [2432630784,2432696319],
	
    [2453192704,2453209087],
	
    [2462332928,2462333951],
	
    [2462336000,2462337023],
	
    [2462342144,2462343167],
	
    [2462347264,2462349311],
	
    [2462350336,2462351359],
	
    [2463729920,2463730175],
	
    [2464042752,2464043007],
	
    [2464043264,2464043519],
	
    [2464046592,2464046847],
	
    [2487615488,2487681023],
	
    [2516582400,2516647935],
	
    [2523725824,2523791359],
	
    [2524119040,2524184575],
	
    [2524512256,2524577791],
	
    [2524577792,2524643327],
	
    [2525071360,2525072383],
	
    [2525085696,2525086719],
	
    [2525101056,2525102079],
	
    [2525626368,2525757439],
	
    [2531196928,2531262463],
	
    [2532442112,2532444159],
	
    [2532444160,2532445183],
	
    [2532449280,2532450303],
	
    [2532453376,2532454399],
	
    [2532454400,2532456447],
	
    [2532456448,2532457471],
	
    [2532461568,2532462591],
	
    [2532462592,2532463615],
	
    [2532465664,2532466687],
	
    [2532466688,2532467711],
	
    [2532470784,2532472831],
	
    [2532472832,2532473855],
	
    [2532481024,2532483071],
	
    [2532483072,2532485119],
	
    [2532485120,2532486143],
	
    [2532489216,2532491263],
	
    [2532491264,2532492287],
	
    [2532499456,2532500479],
	
    [2532501504,2532503551],
	
    [2532503552,2532505599],
	
    [2532505600,2532506623],
	
    [2533294080,2533359615],
	
    [2556985344,2557018111],
	
    [2566914048,2566979583],
	
    [2567110656,2567176191],
	
    [2569142272,2569273343],
	
    [2569273344,2569404415],
	
    [2573402112,2573467647],
	
    [2573533184,2573598719],
	
    [2574647296,2574778367],
	
    [2584248320,2584281087],
	
    [2624299008,2624299263],
	
    [2624301568,2624301823],
	
    [2634022912,2634088447],
	
    [2635202560,2635268095],
	
    [2638020608,2638086143],
	
    [2641823744,2641825791],
	
    [2641825792,2641826815],
	
    [2641828864,2641829887],
	
    [2641855488,2641856511],
	
    [2641856512,2641858559],
	
    [2641858560,2641862655],
	
    [2641862656,2641864703],
	
    [2641865728,2641866751],
	
    [2641870848,2641872895],
	
    [2641883136,2641884159],
	
    [2641886208,2641887231],
	
    [2642018304,2642083839],
	
    [2642786816,2642787327],
	
    [2642788352,2642790399],
	
    [2642793472,2642793727],
	
    [2642799616,2642799871],
	
    [2643722240,2643787775],
	
    [2644246528,2644312063],
	
    [2650734592,2650800127],
	
    [2677635072,2677636095],
	
    [2682388480,2682454015],
	
    [2685652992,2685655039],
	
    [2685655040,2685656063],
	
    [2685677568,2685678591],
	
    [2688420352,2688420607],
	
    [2689821952,2689822207],
	
    [2689822208,2689822719],
	
    [2697608192,2697608703],
	
    [2697608704,2697608959],
	
    [2697630720,2697631743],
	
    [2697631744,2697632767],
	
    [2697647104,2697648127],
	
    [2697648128,2697650175],
	
    [2697650176,2697658367],
	
    [2699968512,2699969535],
	
    [2711814144,2711816191],
	
    [2711821312,2711821823],
	
    [2711859200,2711859455],
	
    [2711859712,2711860223],
	
    [2711860224,2711861247],
	
    [2714697728,2714763263],
	
    [2721972224,2722037759],
	
    [2724790272,2724855807],
	
    [2734686208,2734751743],
	
    [2737767424,2737768447],
	
    [2738159616,2738163711],
	
    [2738168832,2738169855],
	
    [2738169856,2738171903],
	
    [2738171904,2738175999],
	
    [2738176000,2738177023],
	
    [2738182144,2738184191],
	
    [2738184192,2738192383],
	
    [2738192384,2738194431],
	
    [2738194432,2738195455],
	
    [2738200576,2738204671],
	
    [2738207744,2738208767],
	
    [2738215936,2738216959],
	
    [2738220032,2738221055],
	
    [2738221056,2738221567],
	
    [2738221568,2738221823],
	
    [2742878208,2742943743],
	
    [2743992320,2744057855],
	
    [2746286080,2746351615],
	
    [2746417152,2746482687],
	
    [2748055552,2748121087],
	
    [2750739968,2750740223],
	
    [2754884608,2754884863],
	
    [2778471936,2778472191],
	
    [2792292352,2792357887],
	
    [2810904576,2810970111],
	
    [2814181376,2814246911],
	
    [2816275456,2816276479],
	
    [2829029376,2829031423],
	
    [2829031424,2829032447],
	
    [2829032448,2829032959],
	
    [2829032960,2829033215],
	
    [2829058048,2829123583],
	
    [2833645568,2833645823],
	
    [2859073536,2859139071],
	
    [2863857664,2863923199],
	
    [2866929664,2866930175],
	
    [2868680704,2868682751],
	
    [2869428224,2869952511],
	
    [2871132160,2871263231],
	
    [2871263232,2871525375],
	
    [2871525376,2872049663],
	
    [2874146816,2875195391],
	
    [2875719680,2876243967],
	
    [2876243968,2877292543],
	
    [2882535424,2883583999],
	
    [2891038720,2891055103],
	
    [2936012800,2937061375],
	
    [2937061376,2937585663],
	
    [2937585664,2937847807],
	
    [2937978880,2938109951],
	
    [2938765312,2938896383],
	
    [2938896384,2938961919],
	
    [2939027456,2939158527],
	
    [2939158528,2940207103],
	
    [2940207104,2942304255],
	
    [2942697472,2942763007],
	
    [2942992384,2943025151],
	
    [2943314944,2943315967],
	
    [2943324160,2943328255],
	
    [2943328256,2943332351],
	
    [2943334400,2943335423],
	
    [2945581056,2945712127],
	
    [2945712128,2945974271],
	
    [2945974272,2946236415],
	
    [2946392064,2946393087],
	
    [2946498560,2947547135],
	
    [2947587072,2947588095],
	
    [2947678208,2947743743],
	
    [2948104192,2948120575],
	
    [2948136960,2948202495],
	
    [2948202496,2948333567],
	
    [2948333568,2948595711],
	
    [3024883712,3024887807],
	
    [3024887808,3024895999],
	
    [3024896000,3024912383],
	
    [3024912384,3024928767],
	
    [3024928768,3024936959],
	
    [3024936960,3024941055],
	
    [3024941056,3024941311],
	
    [3024941568,3024942079],
	
    [3024942080,3024943103],
	
    [3024943104,3024944127],
	
    [3024944128,3024944639],
	
    [3024944896,3024945151],
	
    [3024945152,3025010687],
	
    [3025010688,3025141759],
	
    [3025403904,3025534975],
	
    [3025534976,3025600511],
	
    [3025666048,3025928191],
	
    [3026073600,3026075647],
	
    [3026083840,3026087935],
	
    [3026089984,3026092031],
	
    [3026157568,3026190335],
	
    [3026190336,3028287487],
	
    [3028385792,3028418559],
	
    [3028418560,3028484095],
	
    [3028811776,3029336063],
	
    [3029602304,3029604351],
	
    [3029637120,3029639167],
	
    [3029653504,3029655551],
	
    [3029655552,3029663743],
	
    [3029696512,3029704703],
	
    [3029774336,3029778431],
	
    [3029860352,3030384639],
	
    [3030384640,3031433215],
	
    [3031592960,3031595007],
	
    [3031613440,3031629823],
	
    [3031957504,3032219647],
	
    [3032219648,3032252415],
	
    [3032323072,3032324095],
	
    [3033070592,3033071615],
	
    [3033071616,3033137151],
	
    [3033137152,3033268223],
	
    [3033530368,3033661439],
	
    [3033715712,3033716735],
	
    [3033721088,3033721343],
	
    [3033721856,3033722879],
	
    [3033792512,3033923583],
	
    [3034505216,3034513407],
	
    [3034513408,3034578943],
	
    [3035168768,3035185151],
	
    [3035185152,3035193343],
	
    [3035205632,3035206655],
	
    [3035316224,3035324415],
	
    [3035328512,3035329535],
	
    [3054538752,3054540799],
	
    [3054551040,3054559231],
	
    [3054632960,3054665727],
	
    [3055007744,3055009791],
	
    [3055011840,3055013887],
	
    [3055550464,3056599039],
	
    [3056623616,3056631807],
	
    [3056664576,3056730111],
	
    [3056730112,3056731135],
	
    [3056732160,3056734207],
	
    [3056758784,3056762879],
	
    [3056795648,3056861183],
	
    [3056992256,3057025023],
	
    [3057451008,3057467391],
	
    [3057483776,3057516543],
	
    [3058696192,3059220479],
	
    [3059220480,3059482623],
	
    [3059482624,3059548159],
	
    [3059744768,3061841919],
	
    [3061841920,3062890495],
	
    [3062890496,3063414783],
	
    [3063742464,3063807999],
	
    [3063955456,3063963647],
	
    [3064856576,3064987647],
	
    [3066560512,3067084799],
	
    [3068952576,3068985343],
	
    [3068991488,3068993535],
	
    [3069050880,3069116415],
	
    [3069116416,3069124607],
	
    [3069181952,3069706239],
	
    [3070099456,3070164991],
	
    [3070230528,3074424831],
	
    [3074424832,3074949119],
	
    [3075383296,3075385343],
	
    [3075388416,3075389439],
	
    [3075585024,3075586047],
	
    [3075735552,3075866623],
	
    [3076227072,3076228095],
	
    [3076229120,3076231167],
	
    [3076231168,3076235263],
	
    [3076259840,3076521983],
	
    [3078619136,3080716287],
	
    [3080716288,3081240575],
	
    [3081240576,3081371647],
	
    [3081371648,3081437183],
	
    [3081502720,3081764863],
	
    [3082289152,3082813439],
	
    [3082813440,3087007743],
	
    [3110988800,3110989055],
	
    [3162734592,3162767359],
	
    [3221952256,3221952511],
	
    [3221953024,3221953279],
	
    [3221956352,3221956607],
	
    [3222006784,3222007039],
	
    [3222781696,3222781951],
	
    [3224832512,3224833023],
	
    [3224840192,3224840447],
	
    [3224841728,3224841983],
	
    [3224847360,3224848383],
	
    [3227962368,3227963391],
	
    [3229391360,3229391615],
	
    [3230211840,3230212095],
	
    [3230369536,3230369791],
	
    [3230369792,3230370047],
	
    [3230433280,3230435327],
	
    [3230435328,3230436351],
	
    [3230440448,3230441471],
	
    [3230441472,3230449663],
	
    [3230449664,3230453759],
	
    [3230453760,3230455807],
	
    [3230695424,3230728191],
	
    [3231910656,3231910911],
	
    [3234338816,3234339071],
	
    [3236454656,3236454911],
	
    [3239329792,3239330815],
	
    [3245342720,3245408255],
	
    [3263875584,3263876095],
	
    [3333383168,3333384191],
	
    [3335524608,3335524863],
	
    [3339143168,3339143423],
	
    [3342974976,3342977023],
	
    [3354693632,3354693887],
	
    [3389023232,3389023743],
	
    [3389028864,3389029375],
	
    [3389090048,3389090303],
	
    [3389090304,3389090559],
	
    [3389227008,3389227519],
	
    [3389292544,3389300735],
	
    [3389324288,3389325311],
	
    [3389378560,3389380607],
	
    [3389380608,3389381631],
	
    [3389392384,3389392895],
	
    [3389407744,3389408255],
	
    [3389409280,3389409791],
	
    [3389413120,3389413375],
	
    [3389413376,3389413887],
	
    [3389414400,3389414911],
	
    [3389417216,3389417471],
	
    [3389418496,3389418751],
	
    [3389419008,3389419519],
	
    [3389420032,3389420287],
	
    [3389435904,3389439999],
	
    [3389521920,3389522175],
	
    [3389522432,3389522943],
	
    [3389522944,3389523455],
	
    [3389524992,3389525247],
	
    [3389528064,3389528319],
	
    [3389541632,3389541887],
	
    [3389554688,3389562879],
	
    [3389571072,3389575167],
	
    [3389595648,3389595903],
	
    [3389596160,3389596671],
	
    [3389599744,3389600255],
	
    [3389600512,3389600767],
	
    [3389600768,3389601279],
	
    [3389601280,3389601535],
	
    [3389602048,3389602303],
	
    [3389602304,3389602815],
	
    [3389669376,3389671423],
	
    [3389671936,3389672447],
	
    [3389672448,3389673471],
	
    [3389681664,3389685759],
	
    [3389784320,3389784575],
	
    [3389784576,3389784831],
	
    [3389788416,3389788671],
	
    [3389788672,3389789183],
	
    [3389802496,3389802751],
	
    [3389805568,3389806079],
	
    [3389808640,3389808895],
	
    [3389809152,3389809663],
	
    [3389811200,3389811455],
	
    [3389812480,3389812735],
	
    [3389813760,3389814015],
	
    [3389931520,3389932031],
	
    [3389932800,3389933055],
	
    [3389933824,3389934079],
	
    [3389934080,3389934591],
	
    [3389934592,3389934847],
	
    [3389935104,3389935615],
	
    [3389937664,3389937919],
	
    [3389939968,3389940223],
	
    [3389941760,3389942271],
	
    [3389942784,3389943295],
	
    [3389943552,3389943807],
	
    [3389944320,3389944831],
	
    [3389945344,3389945855],
	
    [3389946880,3389947391],
	
    [3389947648,3389947903],
	
    [3389948160,3389948415],
	
    [3389949696,3389949951],
	
    [3389949952,3389950207],
	
    [3389953280,3389953535],
	
    [3389953792,3389954047],
	
    [3389955328,3389955583],
	
    [3389955584,3389956095],
	
    [3389958400,3389958655],
	
    [3389958656,3389959167],
	
    [3389959168,3389960191],
	
    [3389960192,3389960447],
	
    [3389962240,3389962751],
	
    [3389968384,3389968895],
	
    [3389969664,3389969919],
	
    [3389971200,3389971455],
	
    [3389971456,3389971711],
	
    [3389971968,3389972479],
	
    [3389972736,3389972991],
	
    [3389972992,3389973503],
	
    [3389974272,3389974527],
	
    [3389975296,3389975551],
	
    [3389975552,3389976575],
	
    [3389978112,3389978367],
	
    [3389979392,3389979647],
	
    [3390325248,3390325503],
	
    [3390328576,3390328831],
	
    [3390330624,3390330879],
	
    [3390330880,3390331391],
	
    [3390331392,3390331647],
	
    [3390332416,3390332927],
	
    [3390337536,3390337791],
	
    [3390338304,3390338559],
	
    [3390339072,3390339327],
	
    [3390340352,3390340607],
	
    [3390340608,3390341119],
	
    [3390386176,3390390271],
	
    [3390407424,3390407679],
	
    [3390407680,3390407935],
	
    [3390409984,3390410239],
	
    [3390410240,3390410495],
	
    [3390411520,3390411775],
	
    [3390411776,3390412031],
	
    [3390412288,3390412799],
	
    [3390412800,3390413311],
	
    [3390413312,3390413567],
	
    [3390413824,3390414079],
	
    [3390427136,3390427391],
	
    [3390502912,3390504959],
	
    [3390770176,3390770431],
	
    [3390770688,3390770943],
	
    [3390801920,3390802431],
	
    [3391414784,3391415039],
	
    [3391488000,3391489023],
	
    [3391490048,3391492095],
	
    [3391500288,3391504383],
	
    [3391504384,3391520767],
	
    [3391520768,3391522815],
	
    [3391522816,3391523327],
	
    [3391523328,3391523583],
	
    [3391523840,3391524863],
	
    [3391525376,3391525887],
	
    [3391526144,3391526399],
	
    [3391526400,3391526911],
	
    [3391526912,3391527935],
	
    [3391527936,3391528191],
	
    [3391528448,3391528959],
	
    [3391528960,3391529471],
	
    [3391529984,3391531007],
	
    [3391531008,3391532031],
	
    [3391533056,3391533567],
	
    [3391535104,3391537151],
	
    [3391537152,3391553535],
	
    [3391620096,3391620607],
	
    [3391620864,3391621119],
	
    [3391622912,3391623167],
	
    [3391653632,3391653887],
	
    [3391653888,3391654143],
	
    [3391654912,3391655167],
	
    [3391655680,3391655935],
	
    [3391655936,3391656447],
	
    [3391657472,3391657727],
	
    [3391658752,3391659007],
	
    [3391659008,3391659263],
	
    [3391659520,3391660031],
	
    [3391660544,3391660799],
	
    [3391686656,3391687167],
	
    [3391687424,3391687679],
	
    [3391687680,3391688191],
	
    [3391717376,3391717631],
	
    [3391717888,3391718399],
	
    [3391720960,3391721215],
	
    [3391723520,3391725567],
	
    [3391733760,3391734015],
	
    [3391734784,3391735807],
	
    [3391735808,3391736831],
	
    [3391746048,3391750143],
	
    [3391835136,3391836159],
	
    [3391852544,3391856639],
	
    [3391885312,3391889407],
	
    [3391893504,3391894527],
	
    [3391898368,3391898623],
	
    [3391900160,3391900415],
	
    [3391906048,3391906303],
	
    [3391914240,3391914495],
	
    [3391915008,3391915519],
	
    [3391918592,3391919103],
	
    [3391946752,3391947263],
	
    [3391947264,3391947519],
	
    [3391950592,3391950847],
	
    [3391950848,3391954943],
	
    [3392016384,3392016895],
	
    [3392016896,3392017151],
	
    [3392017408,3392017919],
	
    [3392045056,3392045311],
	
    [3392069632,3392073727],
	
    [3392098816,3392099327],
	
    [3392102400,3392106495],
	
    [3392110080,3392110335],
	
    [3392110592,3392110847],
	
    [3392111104,3392111615],
	
    [3392414208,3392414463],
	
    [3392442112,3392442367],
	
    [3392506880,3392507135],
	
    [3392507648,3392507903],
	
    [3392787456,3392788479],
	
    [3392788480,3392789503],
	
    [3392794624,3392798719],
	
    [3392798720,3392798975],
	
    [3392827392,3392828415],
	
    [3392864256,3392864767],
	
    [3392918528,3392919551],
	
    [3392924672,3392924927],
	
    [3392925696,3392925951],
	
    [3392942080,3392944127],
	
    [3392954368,3392956415],
	
    [3392958464,3392962559],
	
    [3392963584,3392964607],
	
    [3392964608,3392966655],
	
    [3392966656,3392970751],
	
    [3393012736,3393013759],
	
    [3393014784,3393015807],
	
    [3393017856,3393018879],
	
    [3393026816,3393027071],
	
    [3393027840,3393028095],
	
    [3393089536,3393090559],
	
    [3393124352,3393125375],
	
    [3393125376,3393125631],
	
    [3393126144,3393126399],
	
    [3393146880,3393150975],
	
    [3393167360,3393175551],
	
    [3393189888,3393190911],
	
    [3393191168,3393191423],
	
    [3393257472,3393259519],
	
    [3393259520,3393260031],
	
    [3393388544,3393389567],
	
    [3393520640,3393521151],
	
    [3393523712,3393527807],
	
    [3393585152,3393593343],
	
    [3393609728,3393613823],
	
    [3393634304,3393638399],
	
    [3393658880,3393662975],
	
    [3393726464,3393728511],
	
    [3393736704,3393740799],
	
    [3393744896,3393748991],
	
    [3393814528,3393815551],
	
    [3393843200,3393847295],
	
    [3393849344,3393851391],
	
    [3393856512,3393856767],
	
    [3393858048,3393858303],
	
    [3393860608,3393860863],
	
    [3393867776,3393871871],
	
    [3393912320,3393912831],
	
    [3393966080,3393970175],
	
    [3393977344,3393978367],
	
    [3394041600,3394041855],
	
    [3394042880,3394043903],
	
    [3394064384,3394066431],
	
    [3394067456,3394068479],
	
    [3394111488,3394113535],
	
    [3394232320,3394234367],
	
    [3394238464,3394239487],
	
    [3394289664,3394293759],
	
    [3394306048,3394307071],
	
    [3394351104,3394355199],
	
    [3394501632,3394502655],
	
    [3394503680,3394504703],
	
    [3394504704,3394506751],
	
    [3394506752,3394507263],
	
    [3394508288,3394508543],
	
    [3394508800,3394510847],
	
    [3394621440,3394625535],
	
    [3394697472,3394697727],
	
    [3394719744,3394723839],
	
    [3394772992,3394774015],
	
    [3394832384,3394834431],
	
    [3394854912,3394855935],
	
    [3394857984,3394859007],
	
    [3394860800,3394861055],
	
    [3394889728,3394891775],
	
    [3394895872,3394896895],
	
    [3394899968,3394904063],
	
    [3394905344,3394905599],
	
    [3394920448,3394928639],
	
    [3394945280,3394945535],
	
    [3394946048,3394946303],
	
    [3394948352,3394948607],
	
    [3394953216,3394957311],
	
    [3394961408,3394962431],
	
    [3394985984,3394990079],
	
    [3394994176,3394995199],
	
    [3395006464,3395010559],
	
    [3395018752,3395026943],
	
    [3395026944,3395027967],
	
    [3395028992,3395031039],
	
    [3395039232,3395043327],
	
    [3395091456,3395092479],
	
    [3395092480,3395093503],
	
    [3395156992,3395158015],
	
    [3395158016,3395166207],
	
    [3395176960,3395177215],
	
    [3395178752,3395179007],
	
    [3395181568,3395182591],
	
    [3395223552,3395231743],
	
    [3395284992,3395287039],
	
    [3395288064,3395289087],
	
    [3395289088,3396337663],
	
    [3396337664,3396861951],
	
    [3396861952,3396993023],
	
    [3396993024,3396995071],
	
    [3397001216,3397003263],
	
    [3397009408,3397017599],
	
    [3397021696,3397025791],
	
    [3397025792,3397026047],
	
    [3397026816,3397027071],
	
    [3397083136,3397087231],
	
    [3397088256,3397089279],
	
    [3397089280,3397090303],
	
    [3397128192,3397130239],
	
    [3397130240,3397131263],
	
    [3397217024,3397217279],
	
    [3397217536,3397217791],
	
    [3397218304,3397222399],
	
    [3397234688,3397238783],
	
    [3397320704,3397322751],
	
    [3397323776,3397324799],
	
    [3397324800,3397328895],
	
    [3397330944,3397332991],
	
    [3397332992,3397337087],
	
    [3397349376,3397353471],
	
    [3397353472,3397361663],
	
    [3397361664,3397363711],
	
    [3397369856,3397373951],
	
    [3397373952,3397374463],
	
    [3397374976,3397375999],
	
    [3397376000,3397378047],
	
    [3397378048,3397386239],
	
    [3397505024,3397505279],
	
    [3397517312,3397525503],
	
    [3397527296,3397527551],
	
    [3397574656,3397582847],
	
    [3397586944,3397588991],
	
    [3397597952,3397598207],
	
    [3397636096,3397640191],
	
    [3397722112,3397726207],
	
    [3397794304,3397794559],
	
    [3397812224,3397816319],
	
    [3397832704,3397836799],
	
    [3397922816,3397926911],
	
    [3397963776,3397967871],
	
    [3397967872,3397971967],
	
    [3397974016,3397975039],
	
    [3397975552,3397976063],
	
    [3398035200,3398035455],
	
    [3398208512,3398209535],
	
    [3398209536,3398213631],
	
    [3398279168,3398287359],
	
    [3398307840,3398311935],
	
    [3398370304,3398371327],
	
    [3398373376,3398377471],
	
    [3398377472,3398381567],
	
    [3398383616,3398385663],
	
    [3398394880,3398395903],
	
    [3398395904,3398396927],
	
    [3398485760,3398486015],
	
    [3398606848,3398610943],
	
    [3398613504,3398613759],
	
    [3398614016,3398615039],
	
    [3398616064,3398617087],
	
    [3398617088,3398619135],
	
    [3398668288,3398672383],
	
    [3398705152,3398709247],
	
    [3398713344,3398729727],
	
    [3398770688,3398778879],
	
    [3398803456,3398811647],
	
    [3398819840,3398828031],
	
    [3398832128,3398836223],
	
    [3398836224,3398840319],
	
    [3398842368,3398843391],
	
    [3398877184,3398881279],
	
    [3398885376,3398893567],
	
    [3398893568,3398894591],
	
    [3398926336,3398934527],
	
    [3399004160,3399008255],
	
    [3399024640,3399025663],
	
    [3399026432,3399026687],
	
    [3399036928,3399041023],
	
    [3399335936,3399344127],
	
    [3399393280,3399401471],
	
    [3399414272,3399414527],
	
    [3399523328,3399524351],
	
    [3399528448,3399532543],
	
    [3399631616,3399631871],
	
    [3399633664,3399633919],
	
    [3399745536,3399749631],
	
    [3399770112,3399778303],
	
    [3399835648,3399837695],
	
    [3399837696,3399838719],
	
    [3399839232,3399839743],
	
    [3399856128,3399860223],
	
    [3399864320,3399868415],
	
    [3399872256,3399872511],
	
    [3399872512,3399873023],
	
    [3399873280,3399873535],
	
    [3399873792,3399874047],
	
    [3399875328,3399875583],
	
    [3399875584,3399876607],
	
    [3399933952,3399942143],
	
    [3400028160,3400029183],
	
    [3400040448,3400044543],
	
    [3400048640,3400056831],
	
    [3400171520,3400179711],
	
    [3400194048,3400196095],
	
    [3400196096,3400204287],
	
    [3400259584,3400261631],
	
    [3400263680,3400263935],
	
    [3400264448,3400264703],
	
    [3400269824,3400270847],
	
    [3400271616,3400271871],
	
    [3400335360,3400336383],
	
    [3400336896,3400337151],
	
    [3400337408,3400339455],
	
    [3400364032,3400365055],
	
    [3400366080,3400367103],
	
    [3400392704,3400400895],
	
    [3400417280,3400421375],
	
    [3400432640,3400433663],
	
    [3400589312,3400597503],
	
    [3400769536,3400773631],
	
    [3400790016,3400794111],
	
    [3400826880,3400835071],
	
    [3400847360,3400849407],
	
    [3400861696,3400862719],
	
    [3400866816,3400867839],
	
    [3400888320,3400892415],
	
    [3400933376,3400937471],
	
    [3400974336,3400982527],
	
    [3401383936,3401400319],
	
    [3401404416,3401408511],
	
    [3401431040,3401433087],
	
    [3401515008,3401515263],
	
    [3401532416,3401533439],
	
    [3401533440,3401535487],
	
    [3401535488,3401539583],
	
    [3401580544,3402629119],
	
    [3405775872,3405776895],
	
    [3405777408,3405777919],
	
    [3405779456,3405779711],
	
    [3405780992,3405781247],
	
    [3405785600,3405786111],
	
    [3405786368,3405786623],
	
    [3405786624,3405787135],
	
    [3405795584,3405795839],
	
    [3405795840,3405796351],
	
    [3405797888,3405798399],
	
    [3405799424,3405799935],
	
    [3405801472,3405803519],
	
    [3405804032,3405804543],
	
    [3405806080,3405806335],
	
    [3405807616,3405807871],
	
    [3405808128,3405808639],
	
    [3405808640,3405809663],
	
    [3405809920,3405810175],
	
    [3405811200,3405811455],
	
    [3405811712,3405811967],
	
    [3405812224,3405812479],
	
    [3405812736,3405812991],
	
    [3405813248,3405813759],
	
    [3405813760,3405814015],
	
    [3405820160,3405820415],
	
    [3405832192,3405832447],
	
    [3405841408,3405842431],
	
    [3405844992,3405845247],
	
    [3405847040,3405847551],
	
    [3405857024,3405857279],
	
    [3405857280,3405857791],
	
    [3405858304,3405858815],
	
    [3405859840,3405860351],
	
    [3405863424,3405863679],
	
    [3405865216,3405865471],
	
    [3405865472,3405865983],
	
    [3405865984,3405867007],
	
    [3405868032,3405868287],
	
    [3405905152,3405905407],
	
    [3405905408,3405905663],
	
    [3405922304,3405924351],
	
    [3405924608,3405924863],
	
    [3405934592,3405936639],
	
    [3405938176,3405938687],
	
    [3405941760,3405942015],
	
    [3405944320,3405944575],
	
    [3405944832,3405945855],
	
    [3405945856,3405946367],
	
    [3405946880,3405948927],
	
    [3405952000,3405952511],
	
    [3405956096,3405956607],
	
    [3405959424,3405959679],
	
    [3405960704,3405961215],
	
    [3405963776,3405964287],
	
    [3405964544,3405964799],
	
    [3405966336,3405966847],
	
    [3405988864,3405989119],
	
    [3405989888,3405990399],
	
    [3405990656,3405990911],
	
    [3405991936,3405993983],
	
    [3405996032,3405997055],
	
    [3405998336,3405998591],
	
    [3406000128,3406002175],
	
    [3406002176,3406002431],
	
    [3406002944,3406003199],
	
    [3406006016,3406006271],
	
    [3406007040,3406007295],
	
    [3406008064,3406008319],
	
    [3406070784,3406071295],
	
    [3406071296,3406071551],
	
    [3406075648,3406075903],
	
    [3406075904,3406076927],
	
    [3406081536,3406082047],
	
    [3406083072,3406083327],
	
    [3406084608,3406084863],
	
    [3406089472,3406089727],
	
    [3406090240,3406091263],
	
    [3406095104,3406095359],
	
    [3406095872,3406096383],
	
    [3406103552,3406104063],
	
    [3406104320,3406104575],
	
    [3406104576,3406105087],
	
    [3406105344,3406105599],
	
    [3406107904,3406108159],
	
    [3406108160,3406108415],
	
    [3406113792,3406114047],
	
    [3406114304,3406114815],
	
    [3406115840,3406116863],
	
    [3406116864,3406117375],
	
    [3406117888,3406118399],
	
    [3406131712,3406132223],
	
    [3406132736,3406132991],
	
    [3406133248,3406133503],
	
    [3406146560,3406146815],
	
    [3406148608,3406149119],
	
    [3406149120,3406149375],
	
    [3406149888,3406150143],
	
    [3406150144,3406150399],
	
    [3406150656,3406151167],
	
    [3406151168,3406151423],
	
    [3406152448,3406152703],
	
    [3406157312,3406157823],
	
    [3406158336,3406158847],
	
    [3406201600,3406201855],
	
    [3406202880,3406203135],
	
    [3406203392,3406203903],
	
    [3406204416,3406204671],
	
    [3406206464,3406206975],
	
    [3406208256,3406208511],
	
    [3406208768,3406209023],
	
    [3406225408,3406229503],
	
    [3406231552,3406232063],
	
    [3406266624,3406266879],
	
    [3406268928,3406269439],
	
    [3406271232,3406271487],
	
    [3406272000,3406272511],
	
    [3406274048,3406274303],
	
    [3406282752,3406283263],
	
    [3406284800,3406285055],
	
    [3406299136,3406299391],
	
    [3406301184,3406301439],
	
    [3406305024,3406305279],
	
    [3406305280,3406307327],
	
    [3406317056,3406317311],
	
    [3406320128,3406320383],
	
    [3406321152,3406321663],
	
    [3406322432,3406322687],
	
    [3406327296,3406327807],
	
    [3406328576,3406328831],
	
    [3406341632,3406342143],
	
    [3406342400,3406342655],
	
    [3406343424,3406343679],
	
    [3406346240,3406346495],
	
    [3406346752,3406347263],
	
    [3406347776,3406348287],
	
    [3406348288,3406348543],
	
    [3406349568,3406349823],
	
    [3406349824,3406350335],
	
    [3406351104,3406351359],
	
    [3406352640,3406352895],
	
    [3406352896,3406353407],
	
    [3406353408,3406354431],
	
    [3406354688,3406354943],
	
    [3406355456,3406355711],
	
    [3406372864,3406373119],
	
    [3406373888,3406374399],
	
    [3406379264,3406379519],
	
    [3406380800,3406381055],
	
    [3406381312,3406381567],
	
    [3406382592,3406383103],
	
    [3406383104,3406383359],
	
    [3406383872,3406384127],
	
    [3406384128,3406384639],
	
    [3406389248,3406390271],
	
    [3406390272,3406390783],
	
    [3406392320,3406392575],
	
    [3406405120,3406405375],
	
    [3406438912,3406439167],
	
    [3406444544,3406444799],
	
    [3406449152,3406449663],
	
    [3406451712,3406452735],
	
    [3406452736,3406452991],
	
    [3406454528,3406454783],
	
    [3406462208,3406462463],
	
    [3406513664,3406513919],
	
    [3406515200,3406516223],
	
    [3406516736,3406516991],
	
    [3406517248,3406518271],
	
    [3406521344,3406522367],
	
    [3406523648,3406523903],
	
    [3406525696,3406525951],
	
    [3406526976,3406527231],
	
    [3406528000,3406528255],
	
    [3406530560,3406531583],
	
    [3406531840,3406532095],
	
    [3406532096,3406532607],
	
    [3406541824,3406542847],
	
    [3406548992,3406550015],
	
    [3406565376,3406565631],
	
    [3406566144,3406566399],
	
    [3406567424,3406567679],
	
    [3406575872,3406576127],
	
    [3406577920,3406578175],
	
    [3406578176,3406578431],
	
    [3406579200,3406579711],
	
    [3406583552,3406583807],
	
    [3406584320,3406584831],
	
    [3406584832,3406585855],
	
    [3406586880,3406587391],
	
    [3406587648,3406587903],
	
    [3406590464,3406590719],
	
    [3406591488,3406591743],
	
    [3406594560,3406594815],
	
    [3406596352,3406596607],
	
    [3406611456,3406612479],
	
    [3406615296,3406615551],
	
    [3406617344,3406617599],
	
    [3406619136,3406619391],
	
    [3406622720,3406623743],
	
    [3406631424,3406631679],
	
    [3406632960,3406633215],
	
    [3406638080,3406638591],
	
    [3406647488,3406647551],
	
    [3406647808,3406648319],
	
    [3406648320,3406649343],
	
    [3406649344,3406649855],
	
    [3406650368,3406651391],
	
    [3406671104,3406671359],
	
    [3406684160,3406684671],
	
    [3406684928,3406685183],
	
    [3406686464,3406686719],
	
    [3406698496,3406699519],
	
    [3406700800,3406701055],
	
    [3406706688,3406706943],
	
    [3406707968,3406708223],
	
    [3406708224,3406708479],
	
    [3406718976,3406719231],
	
    [3406721536,3406722047],
	
    [3406722560,3406722815],
	
    [3406733824,3406734079],
	
    [3406739456,3406741503],
	
    [3406741504,3406741759],
	
    [3406742016,3406742527],
	
    [3406747136,3406747391],
	
    [3406751488,3406751743],
	
    [3406755328,3406755583],
	
    [3406757888,3406761983],
	
    [3406763008,3406763519],
	
    [3406763520,3406763775],
	
    [3406780160,3406780415],
	
    [3406780416,3406780927],
	
    [3406784768,3406785023],
	
    [3406786560,3406788607],
	
    [3406791168,3406791679],
	
    [3406796032,3406796287],
	
    [3406796544,3406796799],
	
    [3406797824,3406798847],
	
    [3406802432,3406802687],
	
    [3406816000,3406816255],
	
    [3406817280,3406819327],
	
    [3406819328,3406819839],
	
    [3406820864,3406821119],
	
    [3406825984,3406826239],
	
    [3406826496,3406827007],
	
    [3406827520,3406829567],
	
    [3406830336,3406830591],
	
    [3406833152,3406833407],
	
    [3406835968,3406836223],
	
    [3406836224,3406836735],
	
    [3406838272,3406838527],
	
    [3406839552,3406839807],
	
    [3406857472,3406857727],
	
    [3406864640,3406864895],
	
    [3406864896,3406865151],
	
    [3406871040,3406871551],
	
    [3406881792,3406882047],
	
    [3406884352,3406884607],
	
    [3406884864,3406885119],
	
    [3406886144,3406886399],
	
    [3406889472,3406889727],
	
    [3406893568,3406893823],
	
    [3406896128,3406896383],
	
    [3406898944,3406899199],
	
    [3406903296,3406903551],
	
    [3406907904,3406908415],
	
    [3406911488,3406911999],
	
    [3406923776,3406924031],
	
    [3406930944,3406931199],
	
    [3406936832,3406937087],
	
    [3406937600,3406938111],
	
    [3406948096,3406948351],
	
    [3406948608,3406948863],
	
    [3406952448,3406952959],
	
    [3406954240,3406954495],
	
    [3406955008,3406955519],
	
    [3406955520,3406955775],
	
    [3406956288,3406956543],
	
    [3406962432,3406962687],
	
    [3406963968,3406964223],
	
    [3406966784,3406967295],
	
    [3406967808,3406968063],
	
    [3406972928,3406973951],
	
    [3406974976,3406975487],
	
    [3406976768,3406977023],
	
    [3406980096,3406980607],
	
    [3406981376,3406981631],
	
    [3406981888,3406982143],
	
    [3406982656,3406982911],
	
    [3406987520,3406987775],
	
    [3406988032,3406988287],
	
    [3406988288,3406988799],
	
    [3406991360,3406991615],
	
    [3406993664,3406993919],
	
    [3407005440,3407005695],
	
    [3407007744,3407007999],
	
    [3407008512,3407008767],
	
    [3407009536,3407009791],
	
    [3407020288,3407020543],
	
    [3407024640,3407024895],
	
    [3407026176,3407026431],
	
    [3407027712,3407027967],
	
    [3407030528,3407030783],
	
    [3407031296,3407031807],
	
    [3407031808,3407032063],
	
    [3407034880,3407035135],
	
    [3407035392,3407035903],
	
    [3407036416,3407036671],
	
    [3407037440,3407037695],
	
    [3407038464,3407038719],
	
    [3407045888,3407046143],
	
    [3407048448,3407048703],
	
    [3407053568,3407053823],
	
    [3407054080,3407054335],
	
    [3407056896,3407057151],
	
    [3407057664,3407057919],
	
    [3407058176,3407058431],
	
    [3407059968,3407060223],
	
    [3407065088,3407065343],
	
    [3407065600,3407066111],
	
    [3407073280,3407073535],
	
    [3407078400,3407079423],
	
    [3407079680,3407079935],
	
    [3407081984,3407082239],
	
    [3407083520,3407084031],
	
    [3407085312,3407085567],
	
    [3407089920,3407090175],
	
    [3407095808,3407096319],
	
    [3407096832,3407097087],
	
    [3407097856,3407098111],
	
    [3407101184,3407101439],
	
    [3407102208,3407102463],
	
    [3407107072,3407107583],
	
    [3407108352,3407108607],
	
    [3407112704,3407113215],
	
    [3407115008,3407115263],
	
    [3407115520,3407115775],
	
    [3407115776,3407116287],
	
    [3407116800,3407117055],
	
    [3407117824,3407118335],
	
    [3407120128,3407120383],
	
    [3407120384,3407122431],
	
    [3407123968,3407124223],
	
    [3407144448,3407144703],
	
    [3407144960,3407145215],
	
    [3407145984,3407146239],
	
    [3407151104,3407151615],
	
    [3407151616,3407151871],
	
    [3407153152,3407153407],
	
    [3407153664,3407153919],
	
    [3407155712,3407155967],
	
    [3407159552,3407159807],
	
    [3407159808,3407160063],
	
    [3407161600,3407161855],
	
    [3407162368,3407162623],
	
    [3407168512,3407168767],
	
    [3407172096,3407172351],
	
    [3407175680,3407176703],
	
    [3407182848,3407183103],
	
    [3407185920,3407186431],
	
    [3407188224,3407188479],
	
    [3407203840,3407204095],
	
    [3407222784,3407223039],
	
    [3407223808,3407224319],
	
    [3407224576,3407224831],
	
    [3407234048,3407234303],
	
    [3407236096,3407236351],
	
    [3407238144,3407238399],
	
    [3407238912,3407239167],
	
    [3407240192,3407241215],
	
    [3407241984,3407242239],
	
    [3407243776,3407244031],
	
    [3407247872,3407248383],
	
    [3407250176,3407250431],
	
    [3407258368,3407258623],
	
    [3407259136,3407259391],
	
    [3407260160,3407260415],
	
    [3407261696,3407263743],
	
    [3407266304,3407266559],
	
    [3407278592,3407279103],
	
    [3407279360,3407279615],
	
    [3407279616,3407279871],
	
    [3407281152,3407281663],
	
    [3407282176,3407282431],
	
    [3407294208,3407294463],
	
    [3407297792,3407298047],
	
    [3407298048,3407298559],
	
    [3407300864,3407301119],
	
    [3407303936,3407304191],
	
    [3407305728,3407306751],
	
    [3407307264,3407307519],
	
    [3407309568,3407309823],
	
    [3407310848,3407311103],
	
    [3407315456,3407315711],
	
    [3407318016,3407318527],
	
    [3407326208,3407326463],
	
    [3407328768,3407329023],
	
    [3407329792,3407330303],
	
    [3407331328,3407331583],
	
    [3407332608,3407332863],
	
    [3407332864,3407333119],
	
    [3407334400,3407335423],
	
    [3407339520,3407339775],
	
    [3407340032,3407340543],
	
    [3407340544,3407341567],
	
    [3407345920,3407346175],
	
    [3407346432,3407346687],
	
    [3407351040,3407351295],
	
    [3407352320,3407352575],
	
    [3407354624,3407354879],
	
    [3407358720,3407358975],
	
    [3407362048,3407362303],
	
    [3407362560,3407362815],
	
    [3407364864,3407365119],
	
    [3407366656,3407366911],
	
    [3407367936,3407368191],
	
    [3407368192,3407368703],
	
    [3407369216,3407369727],
	
    [3407369728,3407369983],
	
    [3407370752,3407371007],
	
    [3407376128,3407376383],
	
    [3407376384,3407376639],
	
    [3407377408,3407377663],
	
    [3407378944,3407379455],
	
    [3407384832,3407385087],
	
    [3407386624,3407387135],
	
    [3407387904,3407388159],
	
    [3407388928,3407389183],
	
    [3407390464,3407390719],
	
    [3407395328,3407395839],
	
    [3407398656,3407398911],
	
    [3407399424,3407399679],
	
    [3407401984,3407402495],
	
    [3407403264,3407403519],
	
    [3407403776,3407404031],
	
    [3407410176,3407410431],
	
    [3407418112,3407418367],
	
    [3407418368,3407418879],
	
    [3407425024,3407425279],
	
    [3407425536,3407427583],
	
    [3407429632,3407430143],
	
    [3407436544,3407436799],
	
    [3407438592,3407438847],
	
    [3407438848,3407439103],
	
    [3407440384,3407440639],
	
    [3407446784,3407447039],
	
    [3407447808,3407448063],
	
    [3407448576,3407448831],
	
    [3407450880,3407451135],
	
    [3407452416,3407452671],
	
    [3407452672,3407453183],
	
    [3407455232,3407455487],
	
    [3407455744,3407455999],
	
    [3407457792,3407458303],
	
    [3407459328,3407459583],
	
    [3407459840,3407460095],
	
    [3407462144,3407462399],
	
    [3407464192,3407464447],
	
    [3407464448,3407464703],
	
    [3407464960,3407465471],
	
    [3407466496,3407470591],
	
    [3407471872,3407472127],
	
    [3407473408,3407473663],
	
    [3407473664,3407473919],
	
    [3407475200,3407475455],
	
    [3407481856,3407482111],
	
    [3407487488,3407487743],
	
    [3407491328,3407491583],
	
    [3407491584,3407491839],
	
    [3407492864,3407493119],
	
    [3407493120,3407493631],
	
    [3407494144,3407494399],
	
    [3407495424,3407495679],
	
    [3407496192,3407496447],
	
    [3407498240,3407498495],
	
    [3407499264,3407499519],
	
    [3407500288,3407500543],
	
    [3407503616,3407503871],
	
    [3407504896,3407505407],
	
    [3407508224,3407508479],
	
    [3407508480,3407508735],
	
    [3407511808,3407512063],
	
    [3407515392,3407515647],
	
    [3407515648,3407515903],
	
    [3407516672,3407517183],
	
    [3407518208,3407518463],
	
    [3407519232,3407519743],
	
    [3407520000,3407520255],
	
    [3407522304,3407522559],
	
    [3407523072,3407523327],
	
    [3407523840,3407524095],
	
    [3407526144,3407526399],
	
    [3407530496,3407531007],
	
    [3407532544,3407532799],
	
    [3407533568,3407533823],
	
    [3407535616,3407535871],
	
    [3407536128,3407536383],
	
    [3407537152,3407537407],
	
    [3407538176,3407538431],
	
    [3407544320,3407544575],
	
    [3407546880,3407547135],
	
    [3407548160,3407548415],
	
    [3407548416,3407548671],
	
    [3407549440,3407549695],
	
    [3407549952,3407550463],
	
    [3407554560,3407554815],
	
    [3407555840,3407556095],
	
    [3407557888,3407558143],
	
    [3407560960,3407561215],
	
    [3407561216,3407561471],
	
    [3407565056,3407565311],
	
    [3407566848,3407567103],
	
    [3407570432,3407570687],
	
    [3407572224,3407572479],
	
    [3407574272,3407574527],
	
    [3407575296,3407575551],
	
    [3407575552,3407576063],
	
    [3407576320,3407576575],
	
    [3407595520,3407595775],
	
    [3407596032,3407596287],
	
    [3407603968,3407604223],
	
    [3407606016,3407606271],
	
    [3407608320,3407608575],
	
    [3407612416,3407612671],
	
    [3407612928,3407613183],
	
    [3407618304,3407618559],
	
    [3407618560,3407619071],
	
    [3407620864,3407621119],
	
    [3407621120,3407621375],
	
    [3407623680,3407623935],
	
    [3407624192,3407624447],
	
    [3407628544,3407628799],
	
    [3407628800,3407629055],
	
    [3407629312,3407629567],
	
    [3407631872,3407632127],
	
    [3407632384,3407632639],
	
    [3407638528,3407638783],
	
    [3407643392,3407643647],
	
    [3407644672,3407644927],
	
    [3407645696,3407645951],
	
    [3407646976,3407647231],
	
    [3407652096,3407652351],
	
    [3407653120,3407653375],
	
    [3407653376,3407653631],
	
    [3407655424,3407655935],
	
    [3407657216,3407657471],
	
    [3407657728,3407657983],
	
    [3407660032,3407660287],
	
    [3407667712,3407668223],
	
    [3407671040,3407671295],
	
    [3407675904,3407676159],
	
    [3407677440,3407677951],
	
    [3407678720,3407678975],
	
    [3407678976,3407679231],
	
    [3407682560,3407682815],
	
    [3407687168,3407687423],
	
    [3407689984,3407690239],
	
    [3407691008,3407691263],
	
    [3407691520,3407691775],
	
    [3407693056,3407693311],
	
    [3407694080,3407694335],
	
    [3407696128,3407696383],
	
    [3407698432,3407698687],
	
    [3407699712,3407699967],
	
    [3407700992,3407701247],
	
    [3407701760,3407702015],
	
    [3407704064,3407704319],
	
    [3407706112,3407707135],
	
    [3407721984,3407722495],
	
    [3407723264,3407723519],
	
    [3407723776,3407724031],
	
    [3407724032,3407724287],
	
    [3407727872,3407728127],
	
    [3407729152,3407729407],
	
    [3407730944,3407731199],
	
    [3407733504,3407733759],
	
    [3407734528,3407734783],
	
    [3407735040,3407735295],
	
    [3407735296,3407735551],
	
    [3407738880,3407739135],
	
    [3407740416,3407740927],
	
    [3407745024,3407745535],
	
    [3407747328,3407747583],
	
    [3407748352,3407748607],
	
    [3407757824,3407758079],
	
    [3407761664,3407761919],
	
    [3407763200,3407763455],
	
    [3407769344,3407769599],
	
    [3407771904,3407772159],
	
    [3407772416,3407772671],
	
    [3407779840,3407780095],
	
    [3407780864,3407781119],
	
    [3407782400,3407782655],
	
    [3407785216,3407785471],
	
    [3407785728,3407785983],
	
    [3407788800,3407789055],
	
    [3407790592,3407790847],
	
    [3407796480,3407796735],
	
    [3407797248,3407797503],
	
    [3407797760,3407798015],
	
    [3407800320,3407800831],
	
    [3407801088,3407801343],
	
    [3407802368,3407802879],
	
    [3407803904,3407804159],
	
    [3407804928,3407805439],
	
    [3407817984,3407818239],
	
    [3407818240,3407818495],
	
    [3407819008,3407819263],
	
    [3407819520,3407819775],
	
    [3407820288,3407820799],
	
    [3407824128,3407824383],
	
    [3407824896,3407825151],
	
    [3407826944,3407827199],
	
    [3407828224,3407828479],
	
    [3407831296,3407831551],
	
    [3407833344,3407833599],
	
    [3407833600,3407833855],
	
    [3407834112,3407834623],
	
    [3407838208,3407838463],
	
    [3407847936,3407848191],
	
    [3407851008,3407851263],
	
    [3407851776,3407852031],
	
    [3407852800,3407853055],
	
    [3407854336,3407854591],
	
    [3407854848,3407855103],
	
    [3407858688,3407858943],
	
    [3407862784,3407863039],
	
    [3407863296,3407863807],
	
    [3407864064,3407864319],
	
    [3407865088,3407865343],
	
    [3407869952,3407870463],
	
    [3407871232,3407871487],
	
    [3407877120,3407877375],
	
    [3407884288,3407884799],
	
    [3407886336,3407886591],
	
    [3407887360,3407887615],
	
    [3407887872,3407888127],
	
    [3407889408,3407889919],
	
    [3407891456,3407891711],
	
    [3407892736,3407892991],
	
    [3407893504,3407894015],
	
    [3407896320,3407896575],
	
    [3407898112,3407898367],
	
    [3407898880,3407899135],
	
    [3407905280,3407905535],
	
    [3407906048,3407906303],
	
    [3407907840,3407908095],
	
    [3407910912,3407911167],
	
    [3407919616,3407920127],
	
    [3407921152,3407921407],
	
    [3407922176,3407922431],
	
    [3407923968,3407924223],
	
    [3407924224,3407924735],
	
    [3407926272,3407926527],
	
    [3407938560,3407938815],
	
    [3407939328,3407939583],
	
    [3407940608,3407941119],
	
    [3407942912,3407943167],
	
    [3407944192,3407944447],
	
    [3407945728,3407945983],
	
    [3407953664,3407953919],
	
    [3407953920,3407954175],
	
    [3407954688,3407954943],
	
    [3407954944,3407955199],
	
    [3407956224,3407956479],
	
    [3407957760,3407958015],
	
    [3407963136,3407963391],
	
    [3407968768,3407969023],
	
    [3407970560,3407970815],
	
    [3407971072,3407971327],
	
    [3407974656,3407974911],
	
    [3407977472,3407977727],
	
    [3407977984,3407978495],
	
    [3407982080,3407982335],
	
    [3407984896,3407985151],
	
    [3407988736,3407988991],
	
    [3407989248,3407989759],
	
    [3407989760,3407990015],
	
    [3407990272,3407990783],
	
    [3407992320,3407992831],
	
    [3407994880,3407995391],
	
    [3407995392,3407995647],
	
    [3407997184,3407997439],
	
    [3407999744,3407999999],
	
    [3408001536,3408001791],
	
    [3408004096,3408004351],
	
    [3408008448,3408008703],
	
    [3408009984,3408010239],
	
    [3408013056,3408013311],
	
    [3408015360,3408015871],
	
    [3408016896,3408017151],
	
    [3408017408,3408017919],
	
    [3408020224,3408020479],
	
    [3408020736,3408020991],
	
    [3408022528,3408022783],
	
    [3408026624,3408026879],
	
    [3408030208,3408030463],
	
    [3408032000,3408032255],
	
    [3408040704,3408040959],
	
    [3408041472,3408041727],
	
    [3408041984,3408042495],
	
    [3408044288,3408044543],
	
    [3408044544,3408044799],
	
    [3408050944,3408051199],
	
    [3408052224,3408054271],
	
    [3408055296,3408056319],
	
    [3408062464,3408062719],
	
    [3408064512,3408064767],
	
    [3408065024,3408065279],
	
    [3408065792,3408066047],
	
    [3408067328,3408067583],
	
    [3409379840,3409380351],
	
    [3409380352,3409380607],
	
    [3409381888,3409382143],
	
    [3409382656,3409382911],
	
    [3409384960,3409385215],
	
    [3409387008,3409387263],
	
    [3409403136,3409403391],
	
    [3409405184,3409405439],
	
    [3409407232,3409407487],
	
    [3409407488,3409407743],
	
    [3409409024,3409409535],
	
    [3409409792,3409410047],
	
    [3409412096,3409412607],
	
    [3409416704,3409417215],
	
    [3409428480,3409428735],
	
    [3409429504,3409429759],
	
    [3409435136,3409435647],
	
    [3409435904,3409436159],
	
    [3409436672,3409436927],
	
    [3409445120,3409445375],
	
    [3409445888,3409446143],
	
    [3409447936,3409448191],
	
    [3409451008,3409451263],
	
    [3409454592,3409454847],
	
    [3409455104,3409455359],
	
    [3409456640,3409456895],
	
    [3409457664,3409458175],
	
    [3409458176,3409459199],
	
    [3409462272,3409462783],
	
    [3409465856,3409466367],
	
    [3409466368,3409466879],
	
    [3409469184,3409469439],
	
    [3409473024,3409473279],
	
    [3409475840,3409476095],
	
    [3409486080,3409486335],
	
    [3409488128,3409488383],
	
    [3409488896,3409489407],
	
    [3409489664,3409489919],
	
    [3409491712,3409491967],
	
    [3409492224,3409492479],
	
    [3409492736,3409492991],
	
    [3409494016,3409494271],
	
    [3409495552,3409495807],
	
    [3409496320,3409496575],
	
    [3409498112,3409498623],
	
    [3409498624,3409498879],
	
    [3409499648,3409499903],
	
    [3409500160,3409500415],
	
    [3409502976,3409503231],
	
    [3409503232,3409503487],
	
    [3409504256,3409504511],
	
    [3409506304,3409506559],
	
    [3409509376,3409509631],
	
    [3409509888,3409510143],
	
    [3409511680,3409511935],
	
    [3409511936,3409512191],
	
    [3409513472,3409513983],
	
    [3409517568,3409517823],
	
    [3409520384,3409520639],
	
    [3409522176,3409522431],
	
    [3409525248,3409525503],
	
    [3409526016,3409526271],
	
    [3409527296,3409527551],
	
    [3409528064,3409528319],
	
    [3409528320,3409528831],
	
    [3409529088,3409529343],
	
    [3409533440,3409533695],
	
    [3409536256,3409536511],
	
    [3409538304,3409538559],
	
    [3409541888,3409542143],
	
    [3409550592,3409550847],
	
    [3409561600,3409561855],
	
    [3409562112,3409562367],
	
    [3409563136,3409563391],
	
    [3409567232,3409567487],
	
    [3409567744,3409571839],
	
    [3409573376,3409573887],
	
    [3409574144,3409574399],
	
    [3409575168,3409575423],
	
    [3409575424,3409575935],
	
    [3409838592,3409838847],
	
    [3409871616,3409871871],
	
    [3409873664,3409873919],
	
    [3409879296,3409879551],
	
    [3409888512,3409888767],
	
    [3409896448,3409897471],
	
    [3409897984,3409898239],
	
    [3409901056,3409901311],
	
    [3410096128,3410097151],
	
    [3410796544,3410797567],
	
    [3410798592,3410799615],
	
    [3410808832,3410810879],
	
    [3410810880,3410811903],
	
    [3410867200,3410868223],
	
    [3410898944,3410903039],
	
    [3410926592,3410927615],
	
    [3410952192,3410956287],
	
    [3411018752,3411019263],
	
    [3411025920,3411030015],
	
    [3411032320,3411032575],
	
    [3411050752,3411051007],
	
    [3411051520,3411052543],
	
    [3411053056,3411053567],
	
    [3411053568,3411054591],
	
    [3411054592,3411058687],
	
    [3411083264,3411085311],
	
    [3411087360,3411091455],
	
    [3411145728,3411146751],
	
    [3411148800,3411149311],
	
    [3411152896,3411154943],
	
    [3411177472,3411181567],
	
    [3411206144,3411210239],
	
    [3411214336,3411215359],
	
    [3411217408,3411218431],
	
    [3411228672,3411230719],
	
    [3411271680,3411275775],
	
    [3411410944,3411427327],
	
    [3411427328,3411435519],
	
    [3411474944,3411475199],
	
    [3411475968,3411476479],
	
    [3411550208,3411558399],
	
    [3411591168,3411599359],
	
    [3411607552,3411608575],
	
    [3411642368,3411643391],
	
    [3411644416,3411644671],
	
    [3411673088,3411674111],
	
    [3411675136,3411677183],
	
    [3411705856,3411722239],
	
    [3411722240,3411730431],
	
    [3411738880,3411739135],
	
    [3411746816,3411755007],
	
    [3411763200,3411767295],
	
    [3411769344,3411771391],
	
    [3411804160,3411805183],
	
    [3411805696,3411805951],
	
    [3411845120,3411853311],
	
    [3411869696,3411935231],
	
    [3411935232,3411943423],
	
    [3412000768,3412002815],
	
    [3412025344,3412033535],
	
    [3412033536,3412049919],
	
    [3412051968,3412054015],
	
    [3412054016,3412055039],
	
    [3412058112,3412066303],
	
    [3412264960,3412267007],
	
    [3412267008,3412271103],
	
    [3412283392,3412287487],
	
    [3412336640,3412340735],
	
    [3412341248,3412341759],
	
    [3412341760,3412342783],
	
    [3412343296,3412343551],
	
    [3412343808,3412344063],
	
    [3412344576,3412344831],
	
    [3412348928,3412353023],
	
    [3412353024,3412361215],
	
    [3412377600,3412381695],
	
    [3412598784,3412602879],
	
    [3412680704,3412688895],
	
    [3412688896,3412697087],
	
    [3412787200,3412819967],
	
    [3413024768,3413032959],
	
    [3413037056,3413041151],
	
    [3413043200,3413043711],
	
    [3413043712,3413043967],
	
    [3413266432,3413270527],
	
    [3413308416,3413309439],
	
    [3413557248,3413565439],
	
    [3413569792,3413570047],
	
    [3413571584,3413572607],
	
    [3413579776,3413580287],
	
    [3413581824,3413582079],
	
    [3413582336,3413582847],
	
    [3413594112,3413595135],
	
    [3413595392,3413595647],
	
    [3413602560,3413602815],
	
    [3413602816,3413603327],
	
    [3413603328,3413604351],
	
    [3413604352,3413606399],
	
    [3413606400,3413639167],
	
    [3413850624,3413850879],
	
    [3414171648,3414179839],
	
    [3414188032,3414196223],
	
    [3414196224,3414196479],
	
    [3414220800,3414222847],
	
    [3414302720,3414306815],
	
    [3414433792,3414441983],
	
    [3414619904,3414620159],
	
    [3414646784,3414654975],
	
    [3414663168,3414667263],
	
    [3415084032,3415084543],
	
    [3415137024,3415137279],
	
    [3415138304,3415146495],
	
    [3415277568,3415285759],
	
    [3415474176,3415490559],
	
    [3415490560,3415494655],
	
    [3415494656,3415495679],
	
    [3415496192,3415496703],
	
    [3415563264,3415564287],
	
    [3415752704,3415760895],
	
    [3415769088,3415777279],
	
    [3415801856,3415802879],
	
    [3416047616,3416063999],
	
    [3416133632,3416135679],
	
    [3416287232,3416289279],
	
    [3416293632,3416293887],
	
    [3416309760,3416317951],
	
    [3416326144,3416327167],
	
    [3416372224,3416372479],
	
    [3416372992,3416373247],
	
    [3416375296,3416383487],
	
    [3416694784,3416702975],
	
    [3416726528,3416727551],
	
    [3416784896,3416793087],
	
    [3416930816,3416931327],
	
    [3416981504,3416982527],
	
    [3417034752,3417035007],
	
    [3417038848,3417042943],
	
    [3417179136,3417179391],
	
    [3417179648,3417179903],
	
    [3417202688,3417206783],
	
    [3417276416,3417284607],
	
    [3417292800,3417309183],
	
    [3417309184,3417325567],
	
    [3417325568,3417333759],
	
    [3417352192,3417354239],
	
    [3417853952,3417858047],
	
    [3418071040,3418079231],
	
    [3418161152,3418161663],
	
    [3418162688,3418163199],
	
    [3418189824,3418190847],
	
    [3418210304,3418218495],
	
    [3418222592,3418223615],
	
    [3418251264,3418255359],
	
    [3418290432,3418290687],
	
    [3418292224,3418292735],
	
    [3418292736,3418292991],
	
    [3418293504,3418293759],
	
    [3418294016,3418294271],
	
    [3418308608,3418324991],
	
    [3418326272,3418326527],
	
    [3418329088,3418333183],
	
    [3418357760,3418365951],
	
    [3418480640,3418488831],
	
    [3418519552,3418521599],
	
    [3418570752,3418578943],
	
    [3418583040,3418585087],
	
    [3418587136,3418619903],
	
    [3418619904,3418623999],
	
    [3418627072,3418628095],
	
    [3418993920,3418994175],
	
    [3418994176,3418994431],
	
    [3419073536,3419074559],
	
    [3419226112,3419234303],
	
    [3419357184,3419373567],
	
    [3419373568,3419406335],
	
    [3419406336,3419410431],
	
    [3419410432,3419411455],
	
    [3419414528,3419422719],
	
    [3419529216,3419537407],
	
    [3419668480,3419672575],
	
    [3419688960,3419693055],
	
    [3420038144,3420039167],
	
    [3420389376,3420393471],
	
    [3420393472,3420393727],
	
    [3420395008,3420395263],
	
    [3426197504,3426197759],
	
    [3427426304,3427426559],
	
    [3430068224,3430068735],
	
    [3470470144,3470470655],
	
    [3470471680,3470472191],
	
    [3470472192,3470472703],
	
    [3478721536,3478721791],
	
    [3523346432,3523346943],
	
    [3523346944,3523347199],
	
    [3523347968,3523348479],
	
    [3523348480,3523350527],
	
    [3523352576,3523354623],
	
    [3523543040,3523551231],
	
    [3523557376,3523557631],
	
    [3523558400,3523558655],
	
    [3523575808,3523583999],
	
    [3523688448,3523690495],
	
    [3524001792,3524132863],
	
    [3524149248,3524157439],
	
    [3524161536,3524165631],
	
    [3524165632,3524198399],
	
    [3524198400,3524231167],
	
    [3524231168,3524247551],
	
    [3524296704,3524298751],
	
    [3524298752,3524299775],
	
    [3524303872,3524304895],
	
    [3524304896,3524313087],
	
    [3524591616,3524657151],
	
    [3524657152,3524722687],
	
    [3524730880,3524739071],
	
    [3524853760,3524919295],
	
    [3524919296,3525050367],
	
    [3525050368,3525312511],
	
    [3525312512,3526361087],
	
    [3526557696,3526623231],
	
    [3526623232,3526754303],
	
    [3526934528,3526942719],
	
    [3527933952,3528196095],
	
    [3528196096,3528327167],
	
    [3528327168,3528392703],
	
    [3528409088,3528425471],
	
    [3528450048,3528458239],
	
    [3528589312,3528720383],
	
    [3528949760,3528966143],
	
    [3535388672,3535405055],
	
    [3535822848,3535831039],
	
    [3544186880,3544711167],
	
    [3545235456,3546284031],
	
    [3546284032,3546546175],
	
    [3546546176,3546578943],
	
    [3546578944,3546587135],
	
    [3546587136,3546591231],
	
    [3546593280,3546595327],
	
    [3546595328,3546611711],
	
    [3546611712,3546677247],
	
    [3546677248,3546808319],
	
    [3548905472,3549429759],
	
    [3549429760,3549954047],
	
    [3549954048,3550085119],
	
    [3550085120,3550093311],
	
    [3550093312,3550097407],
	
    [3550097408,3550099455],
	
    [3550101504,3550117887],
	
    [3550117888,3550150655],
	
    [3550150656,3550167039],
	
    [3550167808,3550168063],
	
    [3550168064,3550168319],
	
    [3550169088,3550171135],
	
    [3550171136,3550175231],
	
    [3550175232,3550183423],
	
    [3550183424,3550216191],
	
    [3550216192,3550232575],
	
    [3550232576,3550240767],
	
    [3550240768,3550242815],
	
    [3550242816,3550243839],
	
    [3550243840,3550244351],
	
    [3550244864,3550248959],
	
    [3550248960,3550281727],
	
    [3550281728,3550347263],
	
    [3550347264,3550478335],
	
    [3550478336,3551002623],
	
    [3560964096,3560996863],
	
    [3565256704,3565289471],
	
    [3657433088,3658481663],
	
    [3658481664,3659005951],
	
    [3659005952,3659268095],
	
    [3659268096,3659399167],
	
    [3659399168,3659407359],
	
    [3659415552,3659431935],
	
    [3659431936,3659464703],
	
    [3659464704,3659530239],
	
    [3661103104,3661627391],
	
    [3661627392,3663724543],
	
    [3663724544,3663855615],
	
    [3663855616,3663871999],
	
    [3663880192,3663888383],
	
    [3663888384,3663896575],
	
    [3663904768,3663921151],
	
    [3663921152,3663986687],
	
    [3664009728,3664010239],
	
    [3664010244,3664010247],
	
    [3664010252,3664010255],
	
    [3664010256,3664010271],
	
    [3664010272,3664010303],
	
    [3664010304,3664010367],
	
    [3664010368,3664010495],
	
    [3664010496,3664010751],
	
    [3664010752,3664011007],
	
    [3664011264,3664019455],
	
    [3664019456,3664052223],
	
    [3664248832,3664510975],
	
    [3664510976,3664642047],
	
    [3669606400,3669614591],
	
    [3669619968,3669620223],
	
    [3669620224,3669620735],
	
    [3670016000,3671064575],
	
    [3673161728,3673423871],
	
    [3673423872,3673554943],
	
    [3673554944,3673587711],
	
    [3673587968,3673588223],
	
    [3673588480,3673588735],
	
    [3673588736,3673589247],
	
    [3673589248,3673589503],
	
    [3673590528,3673590783],
	
    [3673591808,3673595903],
	
    [3673595904,3673604095],
	
    [3673604096,3673620479],
	
    [3673620480,3673636863],
	
    [3673645056,3673653247],
	
    [3673653248,3673686015],
	
    [3673751552,3673817087],
	
    [3678928896,3678994431],
	
    [3679584256,3679649791],
	
    [3679682560,3679715327],
	
    [3680125952,3680126975],
	
    [3680126976,3680129023],
	
    [3682598912,3684696063],
	
    [3688366080,3688890367],
	
    [3688890368,3689414655],
	
    [3689414656,3689545727],
	
    [3689545728,3689547775],
	
    [3689553920,3689562111],
	
    [3689562112,3689578495],
	
    [3689578496,3689611263],
	
    [3689611264,3689676799],
	
    [3689676800,3689938943],
	
    [3690070016,3690201087],
	
    [3690201088,3690463231],
	
    [3697655808,3697672191],
	
    [3698327552,3698589695],
	
    [3700981760,3701014527],
	
    [3701080064,3701145599],
	
    [3701145600,3701147647],
	
    [3701147904,3701148159],
	
    [3701148160,3701148671],
	
    [3701148672,3701149695],
	
    [3701149696,3701151743],
	
    [3701151744,3701152767],
	
    [3701152768,3701153279],
	
    [3701153536,3701153791],
	
    [3701153792,3701161983],
	
    [3701161984,3701178367],
	
    [3701178368,3701211135],
	
    [3701403648,3701404671],
	
    [3701473280,3703570431],
	
    [3703570432,3704619007],
	
    [3706126336,3706142719],
	
    [3706159104,3706191871],
	
    [3706208256,3706224639],
	
    [3706322944,3706388479],
	
    [3706847232,3706847487],
	
    [3706848768,3706849023],
	
    [3706849280,3706850303],
	
    [3706850304,3706850815],
	
    [3706850816,3706851071],
	
    [3706851328,3706852351],
	
    [3706852352,3706852607],
	
    [3706853888,3706854399],
	
    [3706854400,3706855423],
	
    [3706855424,3706863615],
	
    [3706863616,3706879999],
	
    [3706880000,3706912767],
	
    [3706912768,3706945535],
	
    [3706945536,3706961919],
	
    [3706964992,3706965247],
	
    [3706967552,3706967807],
	
    [3706968320,3706968575],
	
    [3706968576,3706968831],
	
    [3706973696,3706973951],
	
    [3707209728,3707211775],
	
    [3707240448,3707502591],
	
    [3707502592,3707568127],
	
    [3707764736,3708289023],
	
    [3708289024,3708551167],
	
    [3708551168,3708583935],
	
    [3708583936,3708600319],
	
    [3708616704,3708682239],
	
    [3708682240,3708813311],
	
    [3715760128,3715891199],
	
    [3716186112,3716218879],
	
    [3716218880,3716284415],
	
    [3716284416,3716415487],
	
    [3716538368,3716546559],
	
    [3716677632,3716808703],
	
    [3719036928,3719299071],
	
    [3719299072,3719307263],
	
    [3719307264,3719311359],
	
    [3719311360,3719313407],
	
    [3719313408,3719313663],
	
    [3719313920,3719314431],
	
    [3719314432,3719315455],
	
    [3719315456,3719331839],
	
    [3719331840,3719364607],
	
    [3719364608,3719430143],
	
    [3719430144,3719561215],
	
    [3719561216,3719823359],
	
    [3720347648,3720609791],
	
    [3720609792,3720740863],
	
    [3720740864,3720806399],
	
    [3720806400,3720839167],
	
    [3720839168,3720855551],
	
    [3720855552,3720859647],
	
    [3720863744,3720871935],
	
    [3720871936,3721396223],
	
    [3721396224,3722444799],
	
    [3722444800,3723493375],
	
    [3725590528,3726639103],
	
    [3726639104,3728736255],
	
    [3728736256,3730833407],
	
    [3732733952,3732799487],
	
    [3732832256,3732840447],
	
    [3732840448,3732842495],
	
    [3732842496,3732843519],
	
    [3732843520,3732844031],
	
    [3732845056,3732845567],
	
    [3732845568,3732846591],
	
    [3732846592,3732848639],
	
    [3732848640,3732850687],
	
    [3732852224,3732852735],
	
    [3732852736,3732853759],
	
    [3732853760,3732854271],
	
    [3732854784,3732856831],
	
    [3732856832,3732860927],
	
    [3732860928,3732861183],
	
    [3732861440,3732861951],
	
    [3732861952,3732862975],
	
    [3732862976,3732865023],
	
    [3732930560,3733979135],
	
    [3735027712,3735289855],
	
    [3735552000,3736076287],
	
    [3736076288,3737124863],
	
    [3737124864,3739222015],
	
    [3740270592,3740794879],
	
    [3740794880,3740925951],
	
    [3741319168,3742367743],
	
    [3742629888,3742760959],
	
    [3743135744,3743136767],
	
    [3743272960,3743273983],
	
    [3743284224,3743285247],
	
    [3745513472,3747610623],
	
    [3747610624,3748659199],
	
    [3748659200,3748921343],
	
    [3748921344,3749052415],
	
    [3749183488,3749707775],
	
    [3749707776,3749838847],
	
    [3750756352,3751804927],
	
    [3751804928,3752067071],
	
    [3752198144,3752329215],
	
    [3753902080,3754033151],
	
    [3754295296,3754426367],
	
    [3754491904,3754557439],
	
    [3754557440,3754590207],
	
    [3754590208,3754606591],
	
    [3754606592,3754614783],
	
    [3754614784,3754618879],
	
    [3754618880,3754620927],
	
    [3754620928,3754621951],
	
    [3754621952,3754622463],
	
    [3754622976,3754688511],
	
    [3754950656,3755474943],
	
    [3755737088,3755868159],
	
    [3755978752,3755982847],
	
    [3755982848,3755986943],
	
    [3757047808,3757572095],
	
    [3757572096,3757834239],
	
    [3757867008,3757875199],
	
    [3757883392,3757899775],
	
    [3757965312,3758030847],
	
    [3758030848,3758063615],
	
    [3758091264,3758092287],
	
    [3758095360,3758095871],
	
];


function ip2decimal(ip) {
    var d = ip.split('.');
    return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
}

function FindProxyForURL(url, host){
    if(/\d+\.\d+\.\d+\.\d+/.test(host)){
        if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
                isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
                isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
                isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")){
            return "DIRECT";
        }
        
        var d = ip2decimal(host);
        var l = cidrs.length;
        var min = 0;
        var max = l;
        for(;;){
            if (min+1 > max) {
                break;
            }
            var mid = Math.floor(min+(max-min)/2);
            if(d >= cidrs[mid][0] && d <= cidrs[mid][1]){
				if(mode == "white"){
					return "DIRECT";
				}
				if(mode == "black"){
					return proxy;
				}
            }else if(d < cidrs[mid][0]){
                max = mid;
            }else{
                min = mid+1;
            }
        }
		
    }

    if (isPlainHostName(host)){
        return "DIRECT";
    }

    
    var a = host.split(".");
    for(var i=a.length-1; i>=0; i--){
        if (domains.hasOwnProperty(a.slice(i).join("."))){
			if(mode == "white"){
				return "DIRECT";
			}
			if(mode == "black"){
				return proxy;
			}
        }
    }
	if(mode == "white"){
		return proxy;
	}
	if(mode == "black"){
		return "DIRECT";
	}
	

	if(mode == "global"){
		return proxy;
	}
}
