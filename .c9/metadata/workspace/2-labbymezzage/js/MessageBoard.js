{"filter":false,"title":"MessageBoard.js","tooltip":"/2-labbymezzage/js/MessageBoard.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":6},"end":{"row":18,"column":54}},"text":"text.addEventListener(\"keypress\", function (e) {"},{"action":"insertText","range":{"start":{"row":18,"column":54},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":19,"column":0},"end":{"row":21,"column":0}},"lines":["            if (e.keyCode == 13 && !e.shiftKey){","                MessageBoard.createMessage();"]},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":13}},"text":"            }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":5},"end":{"row":18,"column":8}},"text":"   "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":11},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":8},"end":{"row":18,"column":54}},"text":"var text = document.getElementById(\"textarea\")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":13},"end":{"row":22,"column":14}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":22,"column":13},"end":{"row":22,"column":14}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":47},"end":{"row":20,"column":48}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":13},"end":{"row":22,"column":14}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":14},"end":{"row":22,"column":15}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":11},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":54},"end":{"row":19,"column":55}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":55},"end":{"row":20,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":44},"end":{"row":19,"column":52}},"text":"textarea"},{"action":"insertText","range":{"start":{"row":19,"column":44},"end":{"row":19,"column":59}},"text":"messageTextArea"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":45}},"text":"MessageBoard.createMessage();"},{"action":"insertText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":29}},"text":"createMessage"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":29},"end":{"row":23,"column":31}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":31},"end":{"row":23,"column":32}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":47},"end":{"row":23,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":33}},"text":"key.preventDefault();"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":19}},"text":"key"},{"action":"insertText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":17}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":15},"end":{"row":26,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":26,"column":12},"end":{"row":26,"column":47}},"text":"txtArea.onkeypress = function (e) {"},{"action":"insertText","range":{"start":{"row":26,"column":47},"end":{"row":27,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":27,"column":0},"end":{"row":40,"column":0}},"lines":["            //if (!e) var e = window.event;","            if (e.keyCode === 13 && e.shiftKey) {","                return \"\\r\\n\";","            }","            else if (e.keyCode === 13) {","                readMessage();","","                countMessages();","","                displayMessages();","","                txtArea.value = \"\";","            }"]},{"action":"insertText","range":{"start":{"row":40,"column":0},"end":{"row":40,"column":9}},"text":"        }"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":43}},"text":"            //if (!e) var e = window.event;"},{"action":"removeText","range":{"start":{"row":26,"column":47},"end":{"row":27,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":15},"end":{"row":26,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":26,"column":12},"end":{"row":27,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":12},"end":{"row":27,"column":60}},"text":"text.addEventListener(\"keypress\", function (e) {"},{"action":"insertText","range":{"start":{"row":27,"column":60},"end":{"row":28,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":28,"column":0},"end":{"row":31,"column":0}},"lines":["            if (e.keyCode == 13 && !e.shiftKey)","                e.preventDefault();","                createMessage();"]},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":15}},"text":"            });"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":0},"end":{"row":44,"column":13}},"text":"            }"},{"action":"removeLines","range":{"start":{"row":34,"column":0},"end":{"row":44,"column":0}},"nl":"\n","lines":["                return \"\\r\\n\";","            }","            else if (e.keyCode === 13) {","                readMessage();","","                countMessages();","","                displayMessages();","","                txtArea.value = \"\";"]},{"action":"removeText","range":{"start":{"row":33,"column":11},"end":{"row":33,"column":49}},"text":" if (e.keyCode === 13 && e.shiftKey) {"},{"action":"removeText","range":{"start":{"row":33,"column":11},"end":{"row":34,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":32}},"text":"                createMessage();"},{"action":"removeLines","range":{"start":{"row":29,"column":0},"end":{"row":30,"column":0}},"nl":"\n","lines":["                e.preventDefault();"]},{"action":"removeText","range":{"start":{"row":28,"column":12},"end":{"row":28,"column":47}},"text":"if (e.keyCode == 13 && !e.shiftKey)"},{"action":"removeText","range":{"start":{"row":28,"column":12},"end":{"row":29,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":28,"column":12},"end":{"row":28,"column":50}},"text":" if (e.keyCode === 13 && e.shiftKey) {"},{"action":"insertText","range":{"start":{"row":28,"column":50},"end":{"row":29,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":29,"column":0},"end":{"row":39,"column":0}},"lines":["                return \"\\r\\n\";","            }","            else if (e.keyCode === 13) {","                readMessage();","","                countMessages();","","                displayMessages();","","                txtArea.value = \"\";"]},{"action":"insertText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":13}},"text":"            }"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":9}},"text":"        }"},{"action":"removeLines","range":{"start":{"row":41,"column":0},"end":{"row":43,"column":0}},"nl":"\n","lines":["            txtArea.onkeypress = function (e) {","           "]},{"action":"removeText","range":{"start":{"row":40,"column":15},"end":{"row":41,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":60},"end":{"row":28,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":16},"end":{"row":35,"column":29}},"text":"countMessages"},{"action":"insertText","range":{"start":{"row":35,"column":16},"end":{"row":35,"column":32}},"text":"numberOfMessages"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":16},"end":{"row":39,"column":23}},"text":"txtArea"},{"action":"insertText","range":{"start":{"row":39,"column":16},"end":{"row":39,"column":20}},"text":"text"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":16},"end":{"row":33,"column":27}},"text":"readMessage"},{"action":"insertText","range":{"start":{"row":33,"column":16},"end":{"row":33,"column":17}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":16},"end":{"row":33,"column":17}},"text":"c"},{"action":"insertText","range":{"start":{"row":33,"column":16},"end":{"row":33,"column":29}},"text":"createMessage"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":1},"end":{"row":21,"column":3}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":1},"end":{"row":21,"column":3}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":2},"end":{"row":21,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":3},"end":{"row":21,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":4},"end":{"row":22,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":5},"end":{"row":22,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":6},"end":{"row":23,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":7},"end":{"row":23,"column":8}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":8},"end":{"row":24,"column":9}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":9},"end":{"row":24,"column":10}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":10},"end":{"row":25,"column":11}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":11},"end":{"row":25,"column":12}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":17}},"text":"          //  });"},{"action":"removeLines","range":{"start":{"row":22,"column":0},"end":{"row":25,"column":0}},"nl":"\n","lines":["    //        if (e.keyCode == 13 && !e.shiftKey)","      //          e.preventDefault();","        //        createMessage();"]},{"action":"removeText","range":{"start":{"row":21,"column":1},"end":{"row":21,"column":59}},"text":" //       text.addEventListener(\"keypress\", function (e) {"},{"action":"removeText","range":{"start":{"row":21,"column":1},"end":{"row":22,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":8},"end":{"row":21,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":4},"end":{"row":20,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":62},"end":{"row":20,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":10},"end":{"row":21,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":9},"end":{"row":21,"column":10}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":8},"end":{"row":21,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":8},"end":{"row":21,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":8},"end":{"row":23,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":8},"end":{"row":23,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":13},"end":{"row":26,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":40},"end":{"row":28,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":32},"end":{"row":30,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":35},"end":{"row":31,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":34},"end":{"row":32,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":16},"end":{"row":30,"column":17}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":17},"end":{"row":30,"column":18}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":17},"end":{"row":30,"column":18}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":16},"end":{"row":30,"column":17}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":25},"end":{"row":24,"column":26}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":24},"end":{"row":24,"column":25}},"text":"\\"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":16},"end":{"row":22,"column":20}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":20},"end":{"row":23,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":20}},"text":"                    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":20}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":13}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":13},"end":{"row":23,"column":14}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":14},"end":{"row":23,"column":15}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":15},"end":{"row":23,"column":16}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":17}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":17},"end":{"row":23,"column":18}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":18},"end":{"row":23,"column":19}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":18},"end":{"row":23,"column":19}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":18},"end":{"row":23,"column":19}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":19},"end":{"row":23,"column":20}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":20},"end":{"row":23,"column":21}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":21},"end":{"row":23,"column":22}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":22},"end":{"row":23,"column":23}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":23},"end":{"row":23,"column":24}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":24},"end":{"row":23,"column":25}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":25},"end":{"row":23,"column":26}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":26},"end":{"row":23,"column":27}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":27},"end":{"row":23,"column":28}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":28},"end":{"row":23,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":29},"end":{"row":23,"column":30}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":30},"end":{"row":23,"column":31}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":31},"end":{"row":23,"column":32}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":32},"end":{"row":23,"column":33}},"text":"r"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":3},"end":{"row":7,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416901704377,"hash":"5880b5b97ecc7d60ed81979d9917bf9ca3c70628"}