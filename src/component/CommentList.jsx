import React from "react";
import styled from "styled-components";
import PostListItem from "PostListItem";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    & > *{
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props){
    const {comments} = props;

    return(
        <Wrapper>
            {
                comments.map((comment, idx) => {
                    return <CommentListItem key={comment.id} comment={comment} />;
                })
            }
        </Wrapper>
    );
}

export default CommentList;