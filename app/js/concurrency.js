var updateEditor = function(startIndex, endIndex, action, editType, editID, lines) {
    if (editType == "remove") {
        editUnhighlight(editID);
    }
    if (action == "insert") {
        global_ignore = true;
        var cursor = editor.getCursorPosition();
        var prefix = editor.session.getValue().slice(0, startIndex);
        var suffix = editor.session.getValue().slice(endIndex - (endIndex - startIndex));
        editor.session.setValue(prefix + lines + suffix);
        editor.selection.moveTo(cursor.row, cursor.column);
        global_ignore = false;
    } else {
        if (editType == "insert") {
            global_ignore = true;
            var cursor = editor.getCursorPosition();
            var prefix = editor.session.getValue().slice(0, startIndex);
            var suffix = editor.session.getValue().slice(endIndex);
            editor.session.setValue(prefix + suffix);
            editor.selection.moveTo(cursor.row, cursor.column);
            global_ignore = false;
        } else {
            var cursor = editor.getCursorPosition();
            global_ignore = true;
            var prefix = editor.session.getValue().slice(0, startIndex);
            var suffix = editor.session.getValue().slice(endIndex);
            editor.session.setValue(prefix + lines + suffix);
            editor.selection.moveTo(cursor.row, cursor.column);
            global_ignore = false;
        }
    }
    if (editType == "remove") {
        editHighlight(editID);
    }
}