// import * as m from './HTML';

declare module HTML {

    type EventNames = (
        'onabort' |
        'onauxclick' |
        'onblur' |
        'oncanplay' |
        'oncanplaythrough' |
        'onchange' |
        'onclick' |
        'oncontextmenu' |
        'oncopy' |
        'oncuechange' |
        'oncut' |
        'ondblclick' |
        'ondrag' |
        'ondragend' |
        'ondragenter' |
        'ondragexit' |
        'ondragleave' |
        'ondragover' |
        'ondragstart' |
        'ondrop' |
        'ondurationchange' |
        'onemptied' |
        'onended' |
        'onerror' |
        'onfocus' |
        'oninput' |
        'oninvalid' |
        'onkeydown' |
        'onkeypress' |
        'onkeyup' |
        'onload' |
        'onloadeddata' |
        'onloadedmetadata' |
        'onloadend' |
        'onloadstart' |
        'onmousedown' |
        'onmouseenter' |
        'onmouseleave' |
        'onmousemove' |
        'onmouseout' |
        'onmouseover' |
        'onmouseup' |
        'onmousewheel' |
        'onpaste' |
        'onpause' |
        'onplay' |
        'onplaying' |
        'onpointercancel' |
        'onpointerdown' |
        'onpointerenter' |
        'onpointerleave' |
        'onpointermove' |
        'onpointerout' |
        'onpointerover' |
        'onpointerup' |
        'onprogress' |
        'onratechange' |
        'onreset' |
        'onscroll' |
        'onseeked' |
        'onseeking' |
        'onselect' |
        'onselectstart' |
        'onstalled' |
        'onsubmit' |
        'onsuspend' |
        'ontimeupdate' |
        'onvolumechange' |
        'onwaiting'
    );

    interface EventMap {
        onabort: UIEvent;
        onauxclick: MouseEvent;
        onblur: FocusEvent;
        oncanplay: Event;
        oncanplaythrough: Event;
        onchange: Event;
        onclick: MouseEvent;
        oncontextmenu: PointerEvent;
        oncopy: ClipboardEvent;
        oncuechange: Event;
        oncut: ClipboardEvent;
        ondblclick: MouseEvent;
        ondrag: DragEvent;
        ondragend: DragEvent;
        ondragenter: DragEvent;
        ondragexit: DragEvent;
        ondragleave: DragEvent;
        ondragover: DragEvent;
        ondragstart: DragEvent;
        ondrop: DragEvent;
        ondurationchange: Event;
        onemptied: Event;
        onended: MediaStreamErrorEvent;
        onerror: ErrorEvent;
        onfocus: FocusEvent;
        oninput: Event;
        oninvalid: Event;
        onkeydown: KeyboardEvent;
        onkeypress: KeyboardEvent;
        onkeyup: KeyboardEvent;
        onload: Event;
        onloadeddata: Event;
        onloadedmetadata: Event;
        onloadend: Event;
        onloadstart: Event;
        onmousedown: MouseEvent;
        onmouseenter: MouseEvent;
        onmouseleave: MouseEvent;
        onmousemove: MouseEvent;
        onmouseout: MouseEvent;
        onmouseover: MouseEvent;
        onmouseup: MouseEvent;
        onmousewheel: WheelEvent;
        onpaste: ClipboardEvent;
        onpause: Event;
        onplay: Event;
        onplaying: Event;
        onpointercancel: PointerEvent;
        onpointerdown: PointerEvent;
        onpointerenter: PointerEvent;
        onpointerleave: PointerEvent;
        onpointermove: PointerEvent;
        onpointerout: PointerEvent;
        onpointerover: PointerEvent;
        onpointerup: PointerEvent;
        onprogress: ProgressEvent;
        onratechange: Event;
        onreset: Event;
        onscroll: UIEvent;
        onseeked: Event;
        onseeking: Event;
        onselect: UIEvent;
        onselectstart: Event;
        onstalled: Event;
        onsubmit: Event;
        onsuspend: Event;
        ontimeupdate: Event;
        onvolumechange: Event;
        onwaiting: Event;
    }

    type EventAttrs = {
        readonly [T in keyof EventMap]?: (this: HTMLElement, event: EventMap[T]) => any;
    }

}

