import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TeacherMain from "./components/TeacherDashboard/Main/Main.jsx";
import QuestionsBoard from "./components/TeacherDashboard/Main/QuestionsBoard/QuestionsBoard";
import AddQuestion from "./components/TeacherDashboard/Main/AddQuestion/AddQuestion";
import UploadQuestion from "./components/TeacherDashboard/Main/UploadQuestion/UploadQuestion";
import SingleOption from "./components/TeacherDashboard/Main/AddQuestion/SingleOption/SingleOption";
import IntegerType from "./components/TeacherDashboard/Main/AddQuestion/IntegerType/IntegerType";
import AssertionType from "./components/TeacherDashboard/Main/AddQuestion/AssertionType/AssertionType";
import TestsBoard from "./components/TeacherDashboard/Main/TestsBoard/TestsBoard.jsx";
import TestSettings from "./components/TeacherDashboard/Main/AddTest/TestSettings";
import QuestionSettings from "./components/TeacherDashboard/Main/QuestionSettings/QuestionSettings";
import TestPreview from "./components/TeacherDashboard/Main/TestPreview/TestPreview.jsx";
import PublishTest from "./components/TeacherDashboard/Main/PublishTest/PublishTest.jsx";
import LiveLectures from "./components/TeacherDashboard/Main/LiveLectures/LiveLectures.jsx";
import AssignmentsBoard from "./components/TeacherDashboard/Main/AssignmentsBoard/AssignmentsBoard.jsx";
import AddAssignment from "./components/TeacherDashboard/Main/AddAssignment/AddAssignment.jsx";
import AssignmentQuestionSettings from "./components/TeacherDashboard/Main/AssignmentQuestionSettings/AssignmentQuestionSettings.jsx";
import AssignmentPreview from "./components/TeacherDashboard/Main/AssignmentPreview/AssignmentPreview.jsx";
import PublishAssignment from "./components/TeacherDashboard/Main/PublishAssignment/PublishAssignment.jsx";
import AddLiveLecture from "./components/TeacherDashboard/Main/AddLiveLecture/AddLiveLecture.jsx";
import AddRecordedLecture from "./components/TeacherDashboard/Main/AddRecordedLecture/AddRecordedLecture.jsx";
import ViewLiveLecture from "./components/TeacherDashboard/Main/ViewLiveLecture/ViewLiveLecture.jsx";
import RecordedLectures from "./components/TeacherDashboard/Main/RecordedLectures/RecordedLectures.jsx";
import ViewRecordedLecture from "./components/TeacherDashboard/Main/ViewRecordedLecture/ViewRecordedLecture.jsx";
import ForgotPassword from './components/forgetPassword/Forgot'
import Institute from "./components/TeacherDashboard/Main/institute/Institute.jsx";
// import CourseMaterial from "./components/TeacherDashboard/Main/CourseMaterial"; 
import ResetPassword from './components/forgetPassword/ResetPassword'
import LivelectureVideo from "./components/TeacherDashboard/Main/ViewLiveLecture/LiveLectureVedio.jsx";
import ComplaintsAndFeedbacks from "./components/ComplaintsAndFeedbacks/ComplaintsAndFeedbacks.js";
import Results from "./components/TeacherDashboard/Main/Results/Results"
import Analytics from "./components/TeacherDashboard/Main/Analytics/Analytics"
import ResultsSpecific from "./components/TeacherDashboard/Main/ResultsSpecific/ResultsSpecific.jsx";
import RecordedLectureVideo from "./components/TeacherDashboard/Main/ViewLiveLecture/RecordedLectureVideo.jsx";
import Student from "./components/TeacherDashboard/Main/student/Student"
import MultipleQuestions from "./components/TeacherDashboard/Main/UploadQuestion/MultipleOuestions/MultipleQuestions"
import Error from "./components/404/Error"


import CreateQuiz from "./components/TeacherDashboard/Main/CreateQuiz/CreateQuiz.jsx";
import Progress from "./components/TeacherDashboard/Main/CreateQuiz/Progress.jsx";
import QuestionList from "./components/TeacherDashboard/Main/QuestionsList/QuestionList.jsx";
import Questions from "./components/TeacherDashboard/Main/QuestionsList/Questions.jsx";

const TeacherLoginPage = React.lazy(() =>
  import("./pages/TeacherLogin/TeacherLogin")
);
const TeacherDashboardPage = React.lazy(() =>
  import("./pages/TeacherDashboard/TeacherDashboard")
);
const RoutesList = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        {/* Teacher Routes */}
        <Route exact path="/" element={<TeacherLoginPage />} />
        <Route
          exact
          path="/teacher/dashboard"
          element={<TeacherDashboardPage child={<TeacherMain />} />}
        />
        {/* <Route
          exact
          path="/teacher/coursematerial"
          element={<TeacherDashboardPage child={<CourseMaterial />} />}
        /> */}
        <Route
          exact
          path="/teacher/institutedetails"
          element={<TeacherDashboardPage child={<Institute />} />}
        />
        <Route
          exact
          path="/teacher/mystudents"
          element={<TeacherDashboardPage child={<Student />} />}
        />
        {/* Questions */}
        <Route
          exact
          path="/teacher/questionsBoard"
          element={<TeacherDashboardPage child={<QuestionsBoard />} />}
        />
        {/* Create quiz */}
        <Route
          exact
          path="/teacher/createQuiz"
          element={<TeacherDashboardPage child={<CreateQuiz />} />}
        />
        {/* Question List */}
        <Route
          exact
          path="/teacher/createQuiz/question-list"
          element={<TeacherDashboardPage child={<QuestionList />} />}
        />
        <Route
          exact
          path="/teacher/createQuiz/question"
          element={<TeacherDashboardPage child={<Questions />} />}
        />
        <Route
          exact
          path="/teacher/progress"
          element={<TeacherDashboardPage child={<Progress />} />}
        />
        <Route exact path="/forgetpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
        <Route
          exact
          path="/teacher/uploadQuestion"
          element={<TeacherDashboardPage child={<UploadQuestion />} />}
        />
        <Route
          exact
          path="/teacher/addQuestion"
          element={<TeacherDashboardPage child={<AddQuestion />} />}
        />
        <Route
          exact
          path="/teacher/addQuestion/singleOption"
          element={<TeacherDashboardPage child={<SingleOption />} />}
        />
        <Route
        exact
        path='/teacher/multipleQuestions'
        element={<TeacherDashboardPage  child={<MultipleQuestions/>} />}
        />
        <Route
          exact
          path="/teacher/addQuestion/integerType"
          element={<TeacherDashboardPage child={<IntegerType />} />}
        />
        <Route
          exact
          path="/teacher/addQuestion/assertionType"
          element={<TeacherDashboardPage child={<AssertionType />} />}
        />

        {/* Tests */}

        <Route
          exact
          path="/teacher/testsBoard"
          element={<TeacherDashboardPage child={<TestsBoard />} />}
        />
        <Route
          exact
          path="/teacher/addTest"
          element={<TeacherDashboardPage child={<TestSettings />} />}
        />
        <Route
          exact
          path="/teacher/questionSettings"
          element={<TeacherDashboardPage child={<QuestionSettings />} />}
        />
        <Route
          exact
          path="/teacher/testPreview"
          element={<TeacherDashboardPage child={<TestPreview />} />}
        />
        <Route
          exact
          path="/teacher/publishTest"
          element={<TeacherDashboardPage child={<PublishTest />} />}
        />

        <Route
          exact
          path="/teacher/assignments"
          element={<TeacherDashboardPage child={<AssignmentsBoard />} />}
        />
        <Route
          exact
          path="/teacher/addAssignment"
          element={<TeacherDashboardPage child={<AddAssignment />} />}
        />
        <Route
          exact
          path="/teacher/assignmentQuestionSettings"
          element={
            <TeacherDashboardPage child={<AssignmentQuestionSettings />} />
          }
        />
        <Route
          exact
          path="/teacher/assignmentPreview"
          element={<TeacherDashboardPage child={<AssignmentPreview />} />}
        />
        <Route
          exact
          path="/teacher/publishAssignment"
          element={<TeacherDashboardPage child={<PublishAssignment />} />}
        />
        <Route
          exact
          path="/teacher/liveLectures"
          element={<TeacherDashboardPage child={<LiveLectures />} />}
        />
        <Route
          exact
          path="/teacher/addLiveLecture"
          element={<TeacherDashboardPage child={<AddLiveLecture />} />}
        />

        <Route
          exact
          path="/teacher/addRecordedLecture"
          element={<TeacherDashboardPage child={<AddRecordedLecture />} />}
        />
        <Route
          exact
          path="/teacher/recordedLectures"
          element={<TeacherDashboardPage child={<RecordedLectures />} />}
        />
        <Route
          exact
          path="/teacher/viewLiveLecture"
          element={<TeacherDashboardPage child={<ViewLiveLecture />} />}
        />
        <Route
          exact
          path="/teacher/viewLiveLecture"
          element={<TeacherDashboardPage child={<ViewLiveLecture />} />}
        />

        <Route
          exact
          path="/teacher/viewLiveLecture/:id"
          element={<TeacherDashboardPage child={<LivelectureVideo />} />}
        />
        
        <Route
          exact
          path="/teacher/RecordedLectureVideo/:id"
          element={<TeacherDashboardPage child={<RecordedLectureVideo />} />}
        />
        <Route
          exact
          path="/teacher/viewRecordedLecture"
          element={<TeacherDashboardPage child={<ViewRecordedLecture />} />}
        />
        <Route
          exact
          path="teacher/complaints"
          element={<TeacherDashboardPage child={<ComplaintsAndFeedbacks />} />}
        />
        <Route
          exact
          path="teacher/result"
          element={<TeacherDashboardPage child={<Results />} />}
        />
        <Route
          exact
          path="/results/:id"
          element={<TeacherDashboardPage child={<ResultsSpecific />} />}
        />
        <Route
          exact
          path="teacher/analytics"
          element={<TeacherDashboardPage child={<Analytics />} />}
        />
        <Route
          exact
          path="*"
          element={<TeacherDashboardPage child={<Error />} />}
        />
      </Routes>
    </Suspense>
  );
};

export default RoutesList;
