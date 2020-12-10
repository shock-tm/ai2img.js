function ai2img(jsom){
    const listItems=document.querySelectorAll(jsom["target"]);
    if(window.fetch){
        if(jsom["src"]!=undefined){
            const path=jsom["src"];
            fetch(path).then(function(response) {
                response.text().then(function(letStr) {
                    var imgdata="data:image/jpeg;base64,";
                    const dpObj=new DOMParser();
                    const si=letStr.indexOf("<x:xmpmeta");
                    if(si==-1){return};
                    letStr=letStr.substring(si);
                    const ei=letStr.indexOf("</x:xmpmeta>");
                    if(ei==-1){return};
                    letStr=letStr.substring(0,ei)+"</x:xmpmeta>";
                    letStr=letStr.replace(/<x:xmpmeta.*/g,"");
                    letStr=letStr.replace(/<\/x:xmpmeta>/g,"");
                    const xs=dpObj.parseFromString(letStr,"text/xml");
                    const xmpGImg=xs.getElementsByTagName("xmpGImg:image");
                    if(xmpGImg.length!=0){
                        imgdata=imgdata+xmpGImg[0].textContent;
                        imgdata=imgdata.replace(/\&#xA;/g,"");
                        for(let i=0;i<listItems.length;i++){
                            listItems.item(i).src=imgdata;
                        };
                    };
                });
            });
        }else if(jsom["attr"]=="src"){
            for(let i=0;i<listItems.length;i++){
                const item=listItems.item(i);
                const path=item.src;
                fetch(path).then(function(response) {
                    response.text().then(function(letStr) {
                        var imgdata="data:image/jpeg;base64,";
                        const dpObj=new DOMParser();
                        const si=letStr.indexOf("<x:xmpmeta");
                        if(si==-1){return};
                        letStr=letStr.substring(si);
                        const ei=letStr.indexOf("</x:xmpmeta>");
                        if(ei==-1){return};
                        letStr=letStr.substring(0,ei)+"</x:xmpmeta>";
                        letStr=letStr.replace(/<x:xmpmeta.*/g,"");
                        letStr=letStr.replace(/<\/x:xmpmeta>/g,"");
                        const xs=dpObj.parseFromString(letStr,"text/xml");
                        const xmpGImg=xs.getElementsByTagName("xmpGImg:image");
                        if(xmpGImg.length!=0){
                            imgdata=imgdata+xmpGImg[0].textContent;
                            imgdata=imgdata.replace(/\&#xA;/g,"");
                            item.src=imgdata;
                        };
                    });
                });
            };
        }else if(jsom["attr"]=="name"){
            for(let i=0;i<listItems.length;i++){
                const item=listItems.item(i);
                const path=item.name;
                fetch(path).then(function(response) {
                    response.text().then(function(letStr) {
                        var imgdata="data:image/jpeg;base64,";
                        const dpObj=new DOMParser();
                        const si=letStr.indexOf("<x:xmpmeta");
                        if(si==-1){return};
                        letStr=letStr.substring(si);
                        const ei=letStr.indexOf("</x:xmpmeta>");
                        if(ei==-1){return};
                        letStr=letStr.substring(0,ei)+"</x:xmpmeta>";
                        letStr=letStr.replace(/<x:xmpmeta.*/g,"");
                        letStr=letStr.replace(/<\/x:xmpmeta>/g,"");
                        const xs=dpObj.parseFromString(letStr,"text/xml");
                        const xmpGImg=xs.getElementsByTagName("xmpGImg:image");
                        if(xmpGImg.length!=0){
                            imgdata=imgdata+xmpGImg[0].textContent;
                            imgdata=imgdata.replace(/\&#xA;/g,"");
                            item.src=imgdata;
                        };
                    });
                });
            };
        };
    }else{
        if(jsom["src"]!=undefined){
            const path=jsom["src"];
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                switch(xhr.readyState){
                    case 4: // データ受信完了.
                        if(xhr.status==200||xhr.status==304){
                            var letStr = xhr.responseText;
                            var imgdata="data:image/jpeg;base64,";
                            const dpObj=new DOMParser();
                            const si=letStr.indexOf("<x:xmpmeta");
                            if(si==-1){return};
                            letStr=letStr.substring(si);
                            const ei=letStr.indexOf("</x:xmpmeta>");
                            if(ei==-1){return};
                            letStr=letStr.substring(0,ei)+"</x:xmpmeta>";
                            letStr=letStr.replace(/<x:xmpmeta.*/g,"");
                            letStr=letStr.replace(/<\/x:xmpmeta>/g,"");
                            const xs=dpObj.parseFromString(letStr,"text/xml");
                            const xmpGImg=xs.getElementsByTagName("xmpGImg:image");
                            if(xmpGImg.length!=0){
                                imgdata=imgdata+xmpGImg[0].textContent;
                                imgdata=imgdata.replace(/\&#xA;/g,"");
                                for(let i=0;i<listItems.length;i++){
                                    listItems.item(i).src=imgdata;
                                };
                            };
                        };
                        break;
                    default:
                        break;
                };
            };
            xhr.open("GET",path,false);
            xhr.send();
            xhr.abort(); 
        }else if(jsom["attr"]=="src"){
            for(let i=0;i<listItems.length;i++){
                const item=listItems.item(i);
                const path=item.src;
                var xhr=new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    switch(xhr.readyState){
                        case 4: // データ受信完了.
                            if(xhr.status==200||xhr.status==304){
                                var letStr = xhr.responseText;
                                var imgdata="data:image/jpeg;base64,";
                                const dpObj=new DOMParser();
                                const si=letStr.indexOf("<x:xmpmeta");
                                if(si==-1){return};
                                letStr=letStr.substring(si);
                                const ei=letStr.indexOf("</x:xmpmeta>");
                                if(ei==-1){return};
                                letStr=letStr.substring(0,ei)+"</x:xmpmeta>";
                                letStr=letStr.replace(/<x:xmpmeta.*/g,"");
                                letStr=letStr.replace(/<\/x:xmpmeta>/g,"");
                                const xs=dpObj.parseFromString(letStr,"text/xml");
                                const xmpGImg=xs.getElementsByTagName("xmpGImg:image");
                                if(xmpGImg.length!=0){
                                    imgdata=imgdata+xmpGImg[0].textContent;
                                    imgdata=imgdata.replace(/\&#xA;/g,"");
                                    item.src=imgdata;
                                };
                            };
                            break;
                        default:
                            break;
                    };
                };
                xhr.open("GET",path,false);
                xhr.send();
                xhr.abort();
            };
        }else if(jsom["attr"]=="name"){
            for(let i=0;i<listItems.length;i++){
                const item=listItems.item(i);
                const path=item.name;
                var xhr=new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    switch(xhr.readyState){
                        case 4: // データ受信完了.
                            if(xhr.status==200||xhr.status==304){
                                var letStr = xhr.responseText;
                                var imgdata="data:image/jpeg;base64,";
                                const dpObj=new DOMParser();
                                const si=letStr.indexOf("<x:xmpmeta");
                                if(si==-1){return};
                                letStr=letStr.substring(si);
                                const ei=letStr.indexOf("</x:xmpmeta>");
                                if(ei==-1){return};
                                letStr=letStr.substring(0,ei)+"</x:xmpmeta>";
                                letStr=letStr.replace(/<x:xmpmeta.*/g,"");
                                letStr=letStr.replace(/<\/x:xmpmeta>/g,"");
                                const xs=dpObj.parseFromString(letStr,"text/xml");
                                const xmpGImg=xs.getElementsByTagName("xmpGImg:image");
                                if(xmpGImg.length!=0){
                                    imgdata=imgdata+xmpGImg[0].textContent;
                                    imgdata=imgdata.replace(/\&#xA;/g,"");
                                    item.src=imgdata;
                                };
                            };
                            break;
                        default:
                            break;
                    };
                };
                xhr.open("GET",path,false);
                xhr.send();
                xhr.abort();
            };
        };
    };
};