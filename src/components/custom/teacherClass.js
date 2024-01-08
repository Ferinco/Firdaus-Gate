import { useAppContext } from "../../contexts/Context";
import { useAuth } from "../../hooks/useAuth";

export default function GetTeacherClass(user, setTeacherClass) {
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
    case "FGKGC_001":
      setTeacherClass("K.G 1");
      break;
    case "FGKGC_003":
      setTeacherClass("K.G 2");
      break;
    case "FGNSC_001":
      setTeacherClass("Nursery 1");
      break;
    case "FGNSC_002":
      setTeacherClass("Nursery 2");
      break;
    default:
      setTeacherClass("Default Class"); // Provide a default value if none of the cases match
  }
}

