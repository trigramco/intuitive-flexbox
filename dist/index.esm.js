import React, { forwardRef } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const HBox = forwardRef((props, ref) => {
    const { children, className, id, wFull, hFull, spaceBetween, center, vcenter, style, wrap } = props, other = __rest(props, ["children", "className", "id", "wFull", "hFull", "spaceBetween", "center", "vcenter", "style", "wrap"]);
    let classes = "flex";
    classes = className ? classes.concat(` ${className}`) : classes;
    classes = center ? classes.concat(" justify-center") : classes;
    classes = vcenter ? classes.concat(" items-center") : classes;
    classes = spaceBetween ? classes.concat(" justify-between") : classes;
    classes = wFull ? classes.concat(" w-full") : classes;
    classes = hFull ? classes.concat(" h-full") : classes;
    classes = wrap ? classes.concat(" flex-wrap") : classes;
    return (React.createElement("div", Object.assign({ className: classes, id: id, style: style }, other, { ref: ref }), children));
});
HBox.displayName = "HBox";

const VBox = forwardRef((props, ref) => {
    const { children, className, id, center, vcenter, hFull } = props, other = __rest(props, ["children", "className", "id", "center", "vcenter", "hFull"]);
    let classes = "flex flex-col";
    classes = className ? classes.concat(` ${className}`) : classes;
    classes = center ? classes.concat(" items-center") : classes;
    classes = vcenter ? classes.concat(" justify-center") : classes;
    classes = hFull ? classes.concat(" h-full") : classes;
    return (React.createElement("div", Object.assign({ className: classes, id: id }, other, { ref: ref }), children));
});
VBox.displayName = "VBox";

export { HBox, VBox };
