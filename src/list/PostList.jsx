import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// & : Parent Selector
// > : 그에 해당하는 직계만 허용
// & > * : Wrapper를 선택하고 모든 자식 컴포넌트에게 적용하겠다는 의미
// :not(:last-child) : last-child가 아니면 style을 적용
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    & > *{
        :not(:last-child){
            margin-bottom: 16pc;
        }
    }
`;

function PostList(props){
    const {posts, onClickItem} = props;

    return(
        <Wrapper>
            {posts.map((post, idx) => {
                return(
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    ></PostListItem>
                );
            })}
        </Wrapper>
    );
}

export default PostList;