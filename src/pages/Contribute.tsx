import { useLocation } from "react-router-dom";
import Button from "../comonents/ui/Button";
import Textarea from "../comonents/ui/Textarea";

const ContributePage = () => {
    const location = useLocation();

  return (
    <>
       <h2 className="mb-3 text-center">Email:{location.state.email}</h2>
      <h2 className="mb-3 text-center">Issue: 🐛 Bug Report</h2>
      <form className="max-w-sm mx-auto space-y-3">
        <Textarea />

        <Button>Submit new issue</Button>
      </form>
    </>
  );
};

export default ContributePage;