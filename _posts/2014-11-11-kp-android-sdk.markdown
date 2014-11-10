---
layout: post
title:  "KPSDK"
subtitle:  "Android 版野生 SDK"
excerpt: "這是一款由網友 李思諒 所製作的野生 Android App SDK，方便網友快速開發生產「野生 APP」"
author: "李思諒"
image: "http://unlimited.kptaipei.tw/images/posts/kp-android-sdk-fb.png"
cover: "/images/posts/kp-android-sdk-1.png"
date: 2014-11-11 00:00:00
categories: showroom sdk
---

[link-1]:https://github.com/TakumaMochizuki/KPSDK
[link-2]:https://github.com/TakumaMochizuki/KPAPP

### SDK網址
[https://github.com/TakumaMochizuki/KPSDK][link-1]

### 作品介紹

這是一款由網友 李思諒 所製作的野生 Android App SDK，方便網友快速開發生產「野生 APP」，SDK 的內容如下：

<strong>Entity</strong>

- Album
- Article
- ArticleCategory
- Photo
- VideoCategory
- Video

<strong>Listener</strong>

- OnAlbumListener
- OnArticleCategoryListener
- OnArticleListener
- OnPhotoListener
- OnVideoCategoryListener
- OnVideoListener

### 如何使用
In your Application, you need to initial instance by using KPAndroid
{% highlight ruby %}
KPAndroid.initSingleton(getApplicationContext(), <YOUR_KP_API_KEY>);
{% endhighlight %}

and next, you can call function to get any object kp entity from api like album, article, article category...etc
EX
{% highlight ruby %}
KPAndroid.getInstance().fetchArticleCategory(new OnArticleCategoryListener() {
    @Override
    public void onComplete(List<ArticleCategory> object) {
        //do your things
    }});
{% endhighlight %}
