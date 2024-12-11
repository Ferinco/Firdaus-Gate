import { useAppContext } from "../../contexts/Context";
import { useAuth } from "../../hooks/useAuth";

export const GetTeacherClass = (user, setTeacherClass) => {
  switch (user?.classHandled) {
    case "FGJSC_001":
      setTeacherClass("JSS 1");
      break;
    case "FGJSC_002":
      setTeacherClass("JSS 2");
      break;
    case "FGJSC_003":
      setTeacherClass("JSS 3");
      break;
    case "FGSSC_001":
      setTeacherClass("SSS 1");
      break;
    case "FGSSC_002":
      setTeacherClass("SSS 2");
      break;
    case "FGSSC_003":
      setTeacherClass("SSS 3");
      break;
    case "FGBSC_001":
      setTeacherClass("Basic 1");
      break;
    case "FGBSC_002":
      setTeacherClass("Basic 2");
      break;
    case "FGBSC_003":
      setTeacherClass("Basic 3");
      break;
    case "FGBSC_004":
      setTeacherClass("Basic 4");
      break;
    case "FGBSC_005":
      setTeacherClass("Basic 5");
      break;
      case "FGBSC_006":
        setTeacherClass("Basic 6");
        break;
    case "FGKGC_001":
      setTeacherClass("K.G 1");
      break;
    case "FGKGC_002":
      setTeacherClass("K.G 2");
      break;
    case "FGNSC_001":
      setTeacherClass("Nursery 1");
      break;
    case "FGNSC_002":
      setTeacherClass("Nursery 2");
      break;
    default:
      setTeacherClass("None"); // Provide a default value if none of the cases match
  }
};
export const GetStudentClass = (user, setStudentClass) => {
  switch (user?.currentClass) {
    case "FGJSC_001":
      setStudentClass("JSS 1");
      break;
    case "FGJSC_002":
      setStudentClass("JSS 2");
      break;
    case "FGJSC_003":
      setStudentClass("JSS 3");
      break;
    case "FGSSC_001":
      setStudentClass("SSS 1");
      break;
    case "FGSSC_002":
      setStudentClass("SSS 2");
      break;
    case "FGSSC_003":
      setStudentClass("SSS 3");
      break;
    case "FGBSC_001":
      setStudentClass("Basic 1");
      break;
    case "FGBSC_002":
      setStudentClass("Basic 2");
      break;
    case "FGBSC_003":
      setStudentClass("Basic 3");
      break;
    case "FGBSC_004":
      setStudentClass("Basic 4");
      break;
    case "FGBSC_005":
      setStudentClass("Basic 5");
      break;
      case "FGBSC_006":
        setStudentClass("Basic 6");
        break;
    case "FGKGC_001":
      setStudentClass("K.G 1");
      break;
    case "FGKGC_003":
      setStudentClass("K.G 2");
      break;
    case "FGNSC_001":
      setStudentClass("Nursery 1");
      break;
    case "FGNSC_002":
      setStudentClass("Nursery 2");
      break;
    default:
      setStudentClass("None"); // Provide a default value if none of the cases match
  }
};
export const GetActiveTerm = (activeSession, setSession) => {
  switch (activeSession) {
    case "2023":
      setSession("2023/2024");
      break;
    case "2024":
      setSession("2024/2025");
      break;
    case "2025":
      setSession("2025/2026");
      break;
    case "2026":
      setSession("2026/2027");
      break;
    case "2027":
      setSession("2027/2028");
      break;

    default:
      setSession("None"); // Provide a default value if none of the cases match
  }
};
