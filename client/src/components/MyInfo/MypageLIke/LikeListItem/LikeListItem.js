// 전체 좋아요 받아오는 틀. ChallengeLogItem 참고
// 여기서 맵핑 돌려서 LikeList로
// ! LikeListItem용으로 수정해야함 (style.js도)
import React from "react";
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./LikeListItemStyle";

const LikeListItem = ({ list }) => {
  console.log(list);
  return (
    <>
      <ServicesCard>
        {/* <p>나는 좋아요 한 애들이야</p> */}
        <ServicesIcon background={list.img} />
        <ServicesH2>{list.name}</ServicesH2>
        <ServicesP>{list.level}</ServicesP>
        <ServicesP>{list.contents}</ServicesP>
      </ServicesCard>
    </>
  );
};

export default LikeListItem;
