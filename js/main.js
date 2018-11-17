"use strict";
//asdas
function ListElement(value, next, previous) {}

ListElement.prototype = {
    _setNext: function(next) {
        this._next = next;
    },
    _getNext: function() {
        return this._next;
    },
    _setPrev: function(prev) {
        this._prev = prev;
    },
    _getPrev: function() {
        return this._prev;
    },
    _setValue: function (value) {
        this.value = value;
        return this._getValue();
    },
    _getValue: function () {
        return this.value;
    },
    _flip: function (b) {
        if (this != b) {
            var a = null;
            if (this._getPrev() == null && b._getNext() != null) {
                a = this._getNext();
                this._setNext(b._getNext());
                b._setNext(a);
                this._setPrev(b._getPrev());
                b._setPrev(null);
                this._getPrev()._setNext(this);
                this._getNext()._setPrev(this);
                a._setPrev(b);
            }
            else if (this._getPrev() != null && b._getNext() != null) {
                a = this._getNext();
                this._setNext(b._getNext());
                this._getNext()._setPrev(this);
                b._setNext(a);
                a._setPrev(b);
                a = this._getPrev();
                this._setPrev(b._getPrev());
                this._getPrev()._setNext(this);
                b._setPrev(a);
                a._setNext(b);
            }
            else if (this._getPrev() != null && b._getNext() == null) {
                a = this._getPrev();
                this._setPrev(b._getPrev());
                this._getPrev()._setNext(this);
                b._setPrev(a);
                a._setNext(b);
                b._setNext(this._getNext());
                b._getNext()._getPrev(b);
                this._setNext(null);
            }
            return 'Done! this -> b and b -> this'
        }
        else return 'Please enter different elements!'
    },
    _cut: function (end) {
        if (this != end) {
            if (this._getPrev() == null && end._getNext() != null) {
                end._getNext()._setPrev(null);
                end._getNext()._setNext(end._getNext()._getNext());
            }
            else if (this._getPrev() != null && end._getNext() != null) {
                this._getPrev()._setNext(end._getNext());
                end._getNext()._setPrev(this._getPrev());
            }
            else if (this._getPrev() != null && end._getNext() == null) {
                this._getPrev()._setNext(null);
            }
            return 'Del start -> end'
        }
        else if (this == end) {
            if (this._getPrev() == null && this._getNext() != null) {
                this._getNext()._setPrev(null);
            }
            else if (this._getPrev() != null && this._getNext() != null){
                this._getNext()._setPrev(this._getPrev());
                this._getPrev()._setNext(this._getNext());
            }
            else if (this._getPrev() != null && this._getNext() == null) {
                this._getPrev()._setNext(null);
            }
            return 'Del this!'
        }
    }
};
function find(value, direction) {
    var find = direction;
    if (find._getNext() != null || find._getPrev() != null) {
        if(find._getPrev() == null && find._getNext() != null){
            while (direction != null) {
                if (direction._getValue() == value) {
                    return direction;
                }
                direction = direction._getNext();
            }
        }
        else if (find._getPrev() != null && find._getNext() != null) {
            while (direction != null) {
                if (direction._getValue() == value) {
                    return direction;
                }
                direction = direction._getNext();
            }
            direction = find;
            while (direction != null) {
                if (direction._getValue() == value) {
                    return direction;
                }
                direction = direction._getPrev();
            }
        }
        else if (find._getPrev() != null && find._getNext() == null) {
            while (direction != null) {
                if (direction._getValue() == value) {
                    return direction;
                }
                direction = direction._getPrev();
            }
        }
        return 'The search has not given any results!'
    }
    else return 'Are not present elements for search!'
}

var element1 = new ListElement();
var element2 = new ListElement();
var element3 = new ListElement();
var element4 = new ListElement();

element1._setNext(element2);
element2._setNext(element3);
element3._setNext(element4);
element4._setNext(null);
element1._setPrev(null);
element2._setPrev(element1);
element3._setPrev(element2);
element4._setPrev(element3);
element1._setValue = 10;
element2._setValue = 55;
element3._setValue = 25;
element4._setValue = 20;





