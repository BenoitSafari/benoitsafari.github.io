"use strict";(self.webpackChunkbenoitsafari_github_io=self.webpackChunkbenoitsafari_github_io||[]).push([[3818,3980],{5543:function(e){function a(e){!function(e){var a=/\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,t=/\b[A-Z](?:\w*[a-z]\w*)?\b/;e.languages.java=e.languages.extend("clike",{"class-name":[t,/\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],keyword:a,function:[e.languages.clike.function,{pattern:/(\:\:)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","class-name",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0},namespace:{pattern:/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,lookbehind:!0,inside:{punctuation:/\./}},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":t,keyword:a,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(e)}e.exports=a,a.displayName="java",a.aliases=[]},7719:function(e,a,t){var n=t(5543);function s(e){e.register(n),e.languages.scala=e.languages.extend("java",{keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],builtin:/\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,number:/\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,symbol:/'[^\d\s\\]\w*/}),delete e.languages.scala["class-name"],delete e.languages.scala.function}e.exports=s,s.displayName="scala",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_scala.31b04647.chunk.js.map