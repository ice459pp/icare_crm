import React, { useEffect, useRef } from 'react';

const CKEditor = (props) => {
    const editorRef = useRef(null);
    const { content } = props;

    useEffect(() => {
        const loadCKEditor = () => {
            if (window.CKEDITOR) {
                const editor = window.CKEDITOR.replace(editorRef.current);
                editor.on('blur', () => {
                    const data = editor.getData();
                    props.onValueChange(data);
                });
                // 设置初始内容
                editor.setData(content);
            }
        };

        if (window.CKEDITOR) {
            loadCKEditor();
        } else {
            const script = document.createElement('script');
            script.src = `${process.env.PUBLIC_URL}/ckeditor/ckeditor.js`;
            script.onload = loadCKEditor;
            document.head.appendChild(script);
        }

        // 清理函数，以防止内存泄漏
        return () => {
            if (window.CKEDITOR && editorRef.current) {
                const instance = window.CKEDITOR.instances[editorRef.current.id];
                if (instance) {
                    instance.destroy();
                }
            }
        };
    }, []);

    useEffect(() => {
        if (window.CKEDITOR && editorRef.current) {
            const instance = window.CKEDITOR.instances[editorRef.current.id];
            if (instance) {
                instance.setData(content);
            }
        }
    }, [content]);

    return (
        <textarea ref={editorRef} id="editor1"></textarea>
    );
};

export default CKEditor;
