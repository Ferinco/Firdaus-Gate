import { Icon } from "@iconify/react/dist/iconify.js";
import Marquee from "react-fast-marquee";
import { PATH_PAGE } from "../../../routes/paths";
import { Link } from "react-router-dom";

export default function TopBar(props) {
  return (
    <Marquee className={props.style}>
      <Icon icon="streamline-emojis:bell" width="1.2em" height="1.2em" />
      &nbsp;&nbsp;Enrollment Now Open for 2024/2025 Academic year!!!&nbsp;&nbsp;
      Entrance Examination Dates: 6th of July, 2024. 10th of August, 2024. 24th
      of August, 2024.&nbsp;&nbsp; Time:&nbsp;{" "}
      <p className="time m-0">9:00am</p> &nbsp; prompt.&nbsp;&nbsp; Venue:
      School Hall. Click &nbsp;<Link to={PATH_PAGE.jss1Admission}>here</Link>
      &nbsp;for more
      info.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Marquee>
  );
}


