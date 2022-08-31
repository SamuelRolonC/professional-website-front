import React, { Fragment } from "react";
import "./BlogSection.css";
import { BlogPinnedItem } from "../BlogPinnedItem";
import { BlogItem } from "../BlogItem";
import { useTranslation } from "react-i18next";
import { LoadingIndicator } from "../LoadingIndicator";
import { useBlogData } from "./useBlogData";

function BlogSection() {
    const { t } = useTranslation();
    const { blogData, loadingBlog, errorBlog, getBlogData } = useBlogData();

    if (errorBlog) console.error(errorBlog);

    return (
        <Fragment>
            {loadingBlog && 
                <LoadingIndicator id="Blog" />
            }
            {!loadingBlog &&
                <Fragment>
                    {blogData.length === 0 &&
                        <button 
                            className="BlogSectionRefresh" 
                            type="button"
                            onClick={() => getBlogData()}
                            >
                                {t('blog.refresh')}
                        </button>
                    }
                    <div className="BlogSectionPinnedContainer">
                        <span className="BlogSectionPinnedSpan">{t('blog.pinned')}</span>
                        {blogData && blogData.some(x => x.isPinned) && 
                            blogData.filter(x => x.isPinned).map(item => (
                                <BlogPinnedItem key={item.id} item={item} />
                            ))
                        }
                        {(!blogData || !blogData.some(x => x.isPinned)) &&
                            <p style={{margin: "10px"}}>No data</p>
                        }
                    </div>
        
                    <div className="BlogSectionLatestContainer">
                        <span className="BlogSectionLatestSpan">{t('blog.latest')}</span>
                        {blogData && blogData.some(x => !x.isPinned) &&
                            blogData.filter(x => !x.isPinned).map(item => (
                                <BlogItem key={item.id} item={item} />
                            ))
                        }
                        {(!blogData || !blogData.some(x => !x.isPinned)) &&
                            <p style={{margin: "10px", color: "#f2f2f2"}}>No data</p>
                        }
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export { BlogSection }