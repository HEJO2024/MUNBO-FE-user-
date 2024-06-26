import "../styles/pages/Home.css";

import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import Munbo from "../assets/munbo.svg";
import NoteIcon from "../assets/icon/icon_notebtn.svg";
import QuestionMark from "../assets/question.svg";
import QuizIcon from "../assets/icon/icon_quizbtn.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <div className="home__wrapper">
          <div className="home__about">
            <button onClick={() => navigate("/about")}>
              문보는 어떤 서비스인가요
              <img src={QuestionMark} alt="물음표"></img>
            </button>
          </div>
          <img src={Munbo} alt="Munbo" className="home__munbo"></img>
          <p className="home__text">
            안녕하세요,
            <br />
            학습 도우미 <b className="home__text__munbo">문보</b>
            입니다.
          </p>
          <div className="home__btn-container">
            <button
              className="home__btn"
              onClick={
                sessionStorage.getItem("token")
                  ? () =>
                      navigate("/quiz/select", { state: { quizType: "ai" } })
                  : () => navigate("/login")
              }
            >
              <p className="home__btn__text  home__btn__text--quiz">
                자격증 대비
                <br />
                하러가기
              </p>
              <div className="home__btn__icon">
                <img src={QuizIcon} alt="Quiz"></img>
              </div>
            </button>
            <button
              className="home__btn"
              onClick={
                sessionStorage.getItem("token")
                  ? () => navigate("/note")
                  : () => navigate("/login")
              }
            >
              <p className="home__btn__text home__btn__text--note">
                나만의
                <br />
                요약노트
              </p>
              <div className="home__btn__icon">
                <img src={NoteIcon} alt="Note"></img>
              </div>
            </button>
          </div>
        </div>
      </div>
      <MenuBar icon="home" />
    </div>
  );
}
