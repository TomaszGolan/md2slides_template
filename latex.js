<script src="http://gnab.github.io/remark/downloads/remark-latest.min.js" type="text/javascript"></script>
<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML&delayStartupUntil=configured" type="text/javascript"></script>
<script type="text/javascript">

  // Setup MathJax
  MathJax.Hub.Config({
      tex2jax: {
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      }
  });
  MathJax.Hub.Queue(function() {
      $(MathJax.Hub.getAllJax()).map(function(index, elem) {
          return(elem.SourceElement());
      }).parent().addClass('has-jax');
  });

  MathJax.Hub.Configured();
</script>
