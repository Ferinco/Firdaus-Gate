import { useAppContext } from "../../contexts/Context";
import { useAuth } from "../../hooks/useAuth";
export function GetTeacherClass() {
    const { user } = useAuth();

  const { setTeacherClass } = useAppContext();
  if (user.classHandled === "") {
    setTeacherClass("JSS 1");
  } else if (user.classHandled === "") {
    setTeacherClass("JSS 2");
  } else if (user.classHandled === "") {
    setTeacherClass("JSS 3");
  } else if (user.classHandled === "") {
    setTeacherClass("SSS 1");
  } else if (user.classHandled === "") {
    setTeacherClass("SSS 2");
  } else if (user.classHandled === "") {
    setTeacherClass("SSS 3");
  } else if (user.classHandled === "") {
    setTeacherClass("Basic 1");
  } else if (user.classHandled === "") {
    setTeacherClass("Basic 2");
  } else if (user.classHandled === "") {
    setTeacherClass("Basic 3");
  } else if (user.classHandled === "") {
    setTeacherClass("Basic 4");
  } else if (user.classHandled === "") {
    setTeacherClass("Basic 5");
  } else if (user.classHandled === "") {
    setTeacherClass("K.G 1");
  } else if (user.classHandled === "") {
    setTeacherClass("K.G 2");
  } else if (user.classHandled === "") {
    setTeacherClass("Nursery 1");
  } else if (user.classHandled === "") {
    setTeacherClass("Nursery 2");
  }
}
