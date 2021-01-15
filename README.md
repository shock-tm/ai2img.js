# ai2img.js

shock tm

https://adodtp.com/

===

[sample page](https://adodtp.com/sampleCode/ai2img/)

"ai2img.js" that analyzes ai files and displays preview images in HTML.

URL scheme must be "http" or "https".

「ai2img.js」はaiファイルを分析してプレビュー画像をHTMLで表示させます。

URLスキームは「http」または「https」である必要があります。

### Usage
Step 1:include ai2img.js in your page.

    <script src="ai2img.js"></script>

Step 2: Create an img tag and enter the ai file path in src or name.

    <img src="IllustratorFile.ai" id="img01">
    <img name="IllustratorFile.ai" class="imgs">
    <img src="IllustratorFile.ai">

Step 3: Run the script after reading the HTML.

    <script>
        ai2img({
            target:"#img01",
            attr:"src"
        });
        ai2img({
            target:".imgs",
            attr:"name"
        });
        ai2img({
            target:"img",
            attr:"src"
        });
    </script>

### Options
Can optionally specify the ai file path.

    <img class="readLaters">

    <script>
        ai2img({
            target:".readLaters",
            src:"IllustratorFile.ai"
        });
    </script>

### Browser Support
- Google Chrome  
- Firefox  
- Edge
- Safari
- IE 11+

### License 
You may use ai2img.js under the terms of the MIT License.
[More information](http://en.wikipedia.org/wiki/MIT_License)
