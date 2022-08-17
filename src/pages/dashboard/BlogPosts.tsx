import { orderBy } from "lodash";
import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useCallback, useState } from "react";
// material
import { Box, Grid, Button, Skeleton, Container, Stack } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getPostsInitial, getMorePosts } from "../../redux/slices/blog";
// hooks
import useSettings from "../../hooks/useSettings";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// @types
import { Post, BlogState } from "../../@types/blog";
import { GhostPost, GhostBlogState } from "../../@types/blog";
// components
import Page from "../../components/Page";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from "../../components/_dashboard/blog";

//axios
// import axios from "axios";

//Ghost Api
// import Ghost from "../ghost/newghostapi";
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" }
];

// ----------------------------------------------------------------------

const applySort = (posts: GhostPost[], sortBy: string) => {
  if (sortBy === "latest") {
    return orderBy(posts, ["createdAt"], ["desc"]);
  }
  if (sortBy === "oldest") {
    return orderBy(posts, ["createdAt"], ["asc"]);
  }
  if (sortBy === "popular") {
    return orderBy(posts, ["view"], ["desc"]);
  }
  return posts;
};

const SkeletonLoad = (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: "flex", mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default function BlogPosts(props: any) {
  // const [ghostdata, setGhostData] = useState([]);
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState("latest");
  const [data, setData] = useState([]);
  const { posts, hasMore, index, step } = useSelector(
    (state: { blog: GhostBlogState }) => state.blog
  );
  // console.log("postsGhost", posts);
  // const { posts, hasMore, index, step } = useSelector((state: { blog: BlogState }) => state.blog);
  const sortedPosts = applySort(posts, filters);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);
  // const [ghostposts, setghostPosts] = useState("");
  useEffect(() => {
    dispatch(getPostsInitial(index, step));
  }, [dispatch, index, step]);

  const handleChangeSort = (value?: string) => {
    if (value) {
      setFilters(value);
    }
  };

  const getStaticProps = async () => {
    const res = await fetch(
      "https://abdul-rafay.ghost.io/ghost/api/content/posts/?key=b1ce5ad103d1cb2a8cd0a70212"
    ).then((res) => res.json());

    const ghostposts = await res.posts;
    // setGhostData(ghostposts);
    // console.log(ghostposts);
    setData(ghostposts);

    if (!ghostposts) {
      return {
        notFound: true
      };
    }

    return {
      props: { ghostposts }
    };
  };

  useEffect(() => {
    getStaticProps();
  }, []);
  //
  return (
    <Page title="Blog: Posts | Smile Tech">
      <Container maxWidth={themeStretch ? false : "lg"}>
        {/* <h1>{ghostdata}</h1> */}
        {/* {ghostposts.map((data: any) => {
          console.log("data", data);
        })} */}
        <HeaderBreadcrumbs
          heading="Blog"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Blog", href: PATH_DASHBOARD.blog.root },
            { name: "Posts" }
          ]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={PATH_DASHBOARD.blog.newPost}
              startIcon={<Icon icon={plusFill} />}
            >
              New Post
            </Button>
          }
        />

        {/* <Button
          onClick={() => {
            getStaticProps();
          }}
        >
          API
        </Button> */}

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
          <BlogPostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} />
        </Stack>

        <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          loader={SkeletonLoad}
          dataLength={posts.length}
          style={{ overflow: "inherit" }}
        >
          <Grid container spacing={3}>
            {data.length > 0 &&
              data.map((post, index) => <BlogPostCard key={index} post={post} index={index} />)}
          </Grid>
        </InfiniteScroll>
      </Container>
    </Page>
  );
}
