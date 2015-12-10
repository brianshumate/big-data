(function() {
    function walk(node) {
        var child
        var next
        switch (node.nodeType) {
            case 1:
            case 9:
            case 11:
                child = node.firstChild
                while (child) {
                    next = child.nextSibling
                    walk(child)
                    child = next
                }
                break
            case 3:
                handleText(node)
                break
        }
    }

    function handleText(textNode) {
        var t = textNode.nodeValue
        t = t.replace(/\bBig Data\b/g, "Chronic Farting")
        t = t.replace(/\bBig data\b/g, "Chronic farting")
        t = t.replace(/\bbig Data\b/g, "chronic Farting")
        t = t.replace(/\bbig data\b/g, "chronic farting")
        textNode.nodeValue = t
    }

    function windowLoadHandler() {
        window.removeEventListener('load', windowLoadHandler)
        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body)
        })
    }
    window.addEventListener('load', windowLoadHandler)
}())
