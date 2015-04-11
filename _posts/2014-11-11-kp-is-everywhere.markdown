---
layout: post
title:  "柯文哲關鍵字小幫手"
subtitle:  "KP IS EVERYWHERE"
excerpt: "安裝了這個之後，當瀏覽的網頁出現關鍵字，就介紹一條相關的政見，也許剛好就是你有興趣的政見囉！"
author: "19"
image: "http://demo-unlimited.unfoldgroup.com/images/posts/kp-is-everywhere-fb.png"
cover: "/images/posts/kp-is-everywhere-1.png"
date: 2014-11-11 00:00:00
categories: showroom chrome extension
---

[link-1]: http://kp-is-everywhere.github.io/
[link-2]: https://github.com/kp-is-everywhere/kp-is-everywhere.github.io
[link-3]: https://chrome.google.com/webstore/detail/moldcnjkjmceelkphffaeoodjknbnfhn
[link-4]: http://kp-is-everywhere.github.io/files/example.zip

### 作品網址
[http://kp-is-everywhere.github.io/][link-1]

### 作品介紹

<q class="right">簡直是神一般的作品</q>

由網友 19 所開發的 **[柯文哲關鍵字小幫手][link-1]** Chrome 擴充套件，讓您就算沒有太多時間看政見，也能夠在瀏覽網頁的過程中，自動推薦您可能有興趣的政見給您！馬上安裝 Chrome 擴充套件 [柯文哲關鍵字小幫手][link-3]，讓你在瀏覽網頁時，輕鬆得到相關資訊！

安裝了 <strong>柯文哲關鍵字小幫手</strong> 之後，它就會陪你一起看網頁，當關鍵字出現時，就會自動將關鍵字標示出來，只要將滑鼠移上去，就會介紹一條相關的政見，並且跳出柯文哲政見的相關連結，也許就剛好會看到你有興趣的政見囉！

作者 19 表示：「誠心推薦您－偷偷貼心地裝在爸媽的電腦上。」


### 安裝Chrome擴充套件
1. 進入 [Chrome線上應用程式商店][link-3]，點擊彈出框右上角「+ 免費」按鈕，安裝瀏覽器擴充套件
2. 畫面顯示確認新增提示，點擊「新增」按鈕，確認安裝
3. 至此之後每次在瀏覽網頁時，就會自動媒合與柯文哲政見相關的關鍵字，並打上highlight


###加碼推出 jQuery Plugin
除了能夠依照以上方式安裝 Chrome 擴充套件外，作者 19 也貼心的提供開源 jQuery Plugin，讓您能夠將這項服務安裝在自己的網站或部落格上，當瀏覽者瀏覽網頁時，就能貼心的推薦政見給他們了唷！


### 在網頁中安裝 jQuery Plugin
1. 下載 kpkey.js 目前相依於 jquery.js, tabletop.js 和 highlight.js，所以請下載[這個壓縮檔][link-4]

2. <strong>加入 css 到頁面</strong>，放在 <head></head> 裡
{% highlight ruby %}
<head>
  <link href="css/kp-highlight.css" media="screen" rel="stylesheet" type="text/css" />
</head>
{% endhighlight %}

3. <strong>加入 js 到頁面</strong>，把它們和 jquery 加到的 </body> 之後
{% highlight ruby %}
<script src="js/jquery-2.1.1.min.js" type="text/javascript"></script>
<script src="js/tabletop.js" type="text/javascript"></script>
<script src="js/highlight.js" type="text/javascript"></script>
<script src="js/kpkey.js" type="text/javascript"></script>
<script type="text/javascript">
    $('.example').kpkey();
    // .example 是要搜尋的元素，也可以用 $('body') 做全頁搜尋
</script>
{% endhighlight %}

4. 也不能忘記柯 P 的照片（意思就是你也可以換成你喜歡的啦）
   把 kp.jpg 放到和 js 同層的 images 資料夾裡

5. have fun!


### Github 開源連結
[https://github.com/kp-is-everywhere/kp-is-everywhere.github.io][link-2]
