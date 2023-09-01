import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSystemParameters } from "../CustomContext/useSystemParameters";

function useBlogData() {
    const [ blogData, setBlogData ] = React.useState(null);
    const [ loadingBlog, setLoadingBlog ] = React.useState(true);
    const [ errorBlog, setErrorBlog ] = React.useState(false);
    const { i18n } = useTranslation();
    const { getUrlBlogData } = useSystemParameters();
    
    const getBlogData = useCallback(async () => {
        try {
            setLoadingBlog(true);

            const url = getUrlBlogData(i18n.resolvedLanguage);

            const response = await fetch(url, {
                cache: 'no-cache',
                headers: {
                'Content-Type': 'application/json'
                },
            });
                         
            if (response.ok) {
                const data = await response.json();

                setBlogData(data.listBlogViewModel);
                setLoadingBlog(false);
                setErrorBlog(data.errorMessage);
            } else {
                setErrorBlog("Server error.");
                setLoadingBlog(false);
            }
        } catch(error) {
            setErrorBlog(error);
            setLoadingBlog(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage]);

    React.useEffect(() => {
        getBlogData();
    }, [i18n.resolvedLanguage, getBlogData]);

    return {
        blogData,
        loadingBlog,
        errorBlog,
        getBlogData
    }
}

export { useBlogData };