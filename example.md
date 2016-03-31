# My first markdown-to-slides presentation

## Is is that simple?

1. first bullet point
.red[- important subbullet]
2. and some equation

$$x^2 = \int_0^x ydy$$

.footnote[.gray[*I like footnotes]]

## Two columns? Why not

.left-column[
You may want to use some colors, like .red[red], to highlight .blue[important stuff].
Or even .orange[**bold some part of text**]. And sometime you want to provide a link to your source:

Gif source = [link](http://theodysseyonline.com/portland-state/life-lessons-from-andy-dwyer/343455)

]
.right-column[
![](andy.gif)
]

## Some bash code

```bash
#!/bin/bash

cd $HOME
echo "I am at home!"
```

###Some C++ code

```cpp
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
    cout << "Hello World!\n";

    return 0;
}
```

## References

- Introduction to *remark*: http://remarkjs.com/
- Introduction to *markdown-to-slides*: [md2slides](http://www.lendmeyourear.net/wp-content/uploads/markdown-remark-slides.html)
- *Markdown* wiki: [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
