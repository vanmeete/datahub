(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(165)),i={title:"Developer's Guide",hide_title:!0,slug:"/developers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/developers.md"},l={unversionedId:"docs/developers",id:"docs/developers",isDocsHomePage:!1,title:"Developer's Guide",description:"DataHub Developer's Guide",source:"@site/genDocs/docs/developers.md",slug:"/developers",permalink:"/docs/developers",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/developers.md",version:"current",sidebar:"overviewSidebar",previous:{title:"What is MXE (Metadata Events)?",permalink:"/docs/what/mxe"},next:{title:"Using Docker Images During Development",permalink:"/docs/docker/development"}},c=[{value:"Building the Project",id:"building-the-project",children:[]},{value:"IDE Support",id:"ide-support",children:[]},{value:"Common Build Issues",id:"common-build-issues",children:[{value:"Getting <code>Unsupported class file major version 57</code>",id:"getting-unsupported-class-file-major-version-57",children:[]},{value:"Getting <code>cannot find symbol</code> error for <code>javax.annotation.Generated</code>",id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated",children:[]},{value:"<code>:metadata-models:generateDataTemplate</code> task fails with <code>java.nio.file.InvalidPathException: Illegal char &lt;:&gt; at index XX</code> or <code>Caused by: java.lang.IllegalArgumentException: &#39;other&#39; has different root</code> error",id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error",children:[]},{value:"Various errors related to <code>generateDataTemplate</code> or other <code>generate</code> tasks",id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks",children:[]},{value:"<code>Execution failed for task &#39;:gms:impl:checkRestModel&#39;</code>",id:"execution-failed-for-task-gmsimplcheckrestmodel",children:[]},{value:"<code>java.io.IOException: No space left on device</code>",id:"javaioioexception-no-space-left-on-device",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"datahub-developers-guide"},"DataHub Developer's Guide"),Object(o.b)("h2",{id:"building-the-project"},"Building the Project"),Object(o.b)("p",null,"Fork and clone the repository if haven't done so already"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"git clone https://github.com/{username}/datahub.git\n")),Object(o.b)("p",null,"Change into the repository's root directory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cd datahub\n")),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html"},"gradle wrapper")," to build the project"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew build\n")),Object(o.b)("h2",{id:"ide-support"},"IDE Support"),Object(o.b)("p",null,"The recommended IDE for DataHub development is ",Object(o.b)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA"),".\nYou can run the following command to generate or update the IntelliJ project file"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew idea\n")),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"datahub.ipr")," in IntelliJ to start developing!"),Object(o.b)("p",null,"For consistency please import and auto format the code using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gradle/idea/LinkedIn%20Style.xml"},"LinkedIn IntelliJ Java style"),"."),Object(o.b)("h2",{id:"common-build-issues"},"Common Build Issues"),Object(o.b)("h3",{id:"getting-unsupported-class-file-major-version-57"},"Getting ",Object(o.b)("inlineCode",{parentName:"h3"},"Unsupported class file major version 57")),Object(o.b)("p",null,"You're probably using a Java version that's too new for gradle. Run the following command to check your Java version"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"java --version\n")),Object(o.b)("p",null,"While it may be possible to build and run DataHub using newer versions of Java, we currently only support ",Object(o.b)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"},"Java 1.8")," (aka Java 8). Plan for Java 11 migration is being discussed in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/1699"},"this issue"),"."),Object(o.b)("h3",{id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated"},"Getting ",Object(o.b)("inlineCode",{parentName:"h3"},"cannot find symbol")," error for ",Object(o.b)("inlineCode",{parentName:"h3"},"javax.annotation.Generated")),Object(o.b)("p",null,"Similar to the previous issue, please use Java 1.8 to build the project.\nYou can install multiple version of Java on a single machine and switch between them using the ",Object(o.b)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable. See ",Object(o.b)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E21454_01/html/821-2531/inst_jdk_javahome_t.html"},"this document")," for more details."),Object(o.b)("h3",{id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error"},Object(o.b)("inlineCode",{parentName:"h3"},":metadata-models:generateDataTemplate")," task fails with ",Object(o.b)("inlineCode",{parentName:"h3"},"java.nio.file.InvalidPathException: Illegal char <:> at index XX")," or ",Object(o.b)("inlineCode",{parentName:"h3"},"Caused by: java.lang.IllegalArgumentException: 'other' has different root")," error"),Object(o.b)("p",null,"This is a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/issues/287"},"known issue")," when building the project on Windows due a bug in the Pegasus plugin. Please build on a Mac or Linux instead. "),Object(o.b)("h3",{id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks"},"Various errors related to ",Object(o.b)("inlineCode",{parentName:"h3"},"generateDataTemplate")," or other ",Object(o.b)("inlineCode",{parentName:"h3"},"generate")," tasks"),Object(o.b)("p",null,"As we generate quite a few files from the models, it is possible that old generated files may conflict with new model changes. When this happens, a simple ",Object(o.b)("inlineCode",{parentName:"p"},"./gradlew clean")," should reosolve the issue. "),Object(o.b)("h3",{id:"execution-failed-for-task-gmsimplcheckrestmodel"},Object(o.b)("inlineCode",{parentName:"h3"},"Execution failed for task ':gms:impl:checkRestModel'")),Object(o.b)("p",null,"This generally means that an ",Object(o.b)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"incompatible change")," was introduced to the rest.li API in GMS. You'll need to rebuild the snapshots/IDL by running the following command once"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew :gms:impl:build -Prest.model.compatibility=ignore\n")),Object(o.b)("h3",{id:"javaioioexception-no-space-left-on-device"},Object(o.b)("inlineCode",{parentName:"h3"},"java.io.IOException: No space left on device")),Object(o.b)("p",null,"This means you're running out of space on your disk to build. Please free up some space or try a different disk."))}s.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(m,l(l({ref:t},d),{},{components:a})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);