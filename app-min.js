$(function(){function t(t,e){var o=["<style>body{overflow:scroll}</style>",'<div class="ds-thread" data-url="http://123.jser.us" data-thread-key="{id}"></div>','<script type="text/javascript">','    var duoshuoQuery = {short_name:"123jser"};',"    (function() {",'        var ds = document.createElement("script");','        ds.type = "text/javascript";ds.async = true;','        ds.src = "http://static.duoshuo.com/embed.js";','        ds.charset = "UTF-8";','        (document.getElementsByTagName("head")[0] ','        || document.getElementsByTagName("body")[0]).appendChild(ds);',"    })();","</script>"].join(""),a=t.contentWindow.document;a.write(o.replace(/\{id\}/g,e))}var e=window;e.buildCommentBox=t,$("a[data-toggle=feedback]").popover({placement:"bottom",title:"反馈",html:!0,content:'<iframe border="0" src="about:blank" onload="buildCommentBox(this, \'feedback\')" frameborder="0"  marginwidth="0" allowTransparency="true" marginheight="0"  style="border:0 none;width:400px;height:400px"></iframe>',trigger:"click"}),$("a.tag").mouseenter(function(){var t=$(this).data("des"),e=$(this).data("index"),o=$(this).height(),a=$(this).position().top,i="bottom";a+o+450>$(document.body).height()&&(i="top"),$(this).popover({placement:i,title:"详情",html:!0,container:document.body,content:'<p style="width:400px">'+t+'</p><iframe border="0" src="about:blank" onload="buildCommentBox(this, \''+e+'\')" frameborder="0"  marginwidth="0" allowTransparency="true" marginheight="0"  style="border:0 none;width:400px;height:400px"></iframe>',trigger:"manual"});var r=$(this).data("popover").tip(),n=this;clearTimeout($(this).data("timer")),$(this).popover("show"),r.one("mouseenter",function(){clearTimeout($(n).data("timer"))}).one("mouseleave",function(){$(n).data("timer",setTimeout(function(){$(n).popover("hide")},500))})}).mouseleave(function(){var t=this;$(this).data("timer",setTimeout(function(){$(t).popover("hide")},500))}),$("body").tooltip({selector:"a[data-toggle=tooltip]"}),e._hmt=e._hmt||[]});