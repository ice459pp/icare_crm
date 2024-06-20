import React, { useEffect, useRef } from 'react';

const CKEditor = (props) => {
    const editorRef = useRef(null);

    useEffect(() => {
        // 在componentDidMount时加载CKEditor
        const loadCKEditor = () => {
            if (window.CKEDITOR) {
                const editor = window.CKEDITOR.replace(editorRef.current);
                editor.on('blur', () => {
                    const data = editor.getData();
                    props.onValueChange(data)
                })
            }
        };

        // 检查CKEditor是否已经加载，如果没有则设置一个监听器
        if (window.CKEDITOR) {
            loadCKEditor();
        } else {
            const script = document.createElement('script');
            script.src = `${process.env.PUBLIC_URL}/ckeditor/ckeditor.js`;
            script.onload = loadCKEditor;
            document.head.appendChild(script);
        }

        // 清理函数，以防止内存泄漏
        // return () => {
        //     if (window.CKEDITOR) {
        //         window.CKEDITOR.instances[editorRef.current.id] && window.CKEDITOR.instances[editorRef.current.id].destroy();
        //     }
        // };
    }, []);

    return (
        <textarea ref={editorRef} id="editor1"></textarea>
    );
};

export default CKEditor;
