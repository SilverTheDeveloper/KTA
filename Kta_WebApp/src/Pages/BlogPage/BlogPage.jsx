import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import blogsIcon from "/assets/BlogPage/Blogs.svg";
import styles from "./BlogPage.module.scss";
import { blogList } from "@/Data/BlogPage";
import BlogCard from "@/Components/BlogCard/BlogCard";
const BlogPage = () => {
  return (

      <div className={styles.Wrapper}>
        <TopBanner
          head={blogsIcon}
          details={
            "Explore expert tips, industry trends, and best practices for ceramics, stone care, and surface protection."
          }
        />

        <div className={styles.BlogsContainer}>
          {blogList.map((blog, index) => (
            <BlogCard data={blog} key={index} />
          ))}
        </div>
      </div>

  );
};

export default BlogPage;
