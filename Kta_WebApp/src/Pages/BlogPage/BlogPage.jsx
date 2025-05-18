import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import blogsIcon from "/assets/BlogPage/Blogs.svg";
import styles from "./BlogPage.module.scss";
import { blogList } from "@/Data/BlogPage";
import BlogCard from "@/Components/BlogCard/BlogCard";
import { Container } from "react-bootstrap";
const BlogPage = () => {
  return (
    <Container style={{ maxWidth: "1440px" }}>
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
    </Container>
  );
};

export default BlogPage;
