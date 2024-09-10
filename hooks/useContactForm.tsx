import { ChangeEvent, FormEvent } from "react";

type ChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type StatusType = (value: string) => void
type SentType = (value: boolean) => void
type DataType = (updater: (prev: SetDataType) => SetDataType) => void

interface SetDataType {
  name: string;
  email: string;
  message: string;
}

const useContactForm = () => {
  const handleChange = (e: ChangeType, setData: DataType) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev, [name]: value
    }));
  };

  async function handleSubmit(e: FormEvent, data: SetDataType, setData: (value: SetDataType) => void, setStatus: StatusType, setSent: SentType) {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        successData(setData, setStatus, setSent);
      } else {
        errorData(setStatus, setSent);
      }
    } catch (error) {
      errorData(setStatus, setSent);
    }
  }

  const successData = (setData: (value: SetDataType) => void, setStatus: StatusType, setSent: SentType) => {
    setData({ name: "", email: "", message: "" });
    setStatus("success");
    setSent(true);
    resetSent(setSent);
  }

  const errorData = (setStatus: StatusType, setSent: SentType) => {
    setStatus("error");
    setSent(true);
    resetSent(setSent);
  }

  const resetSent = (setSent: SentType) => {
    setTimeout(() => {
      setSent(false);
    }, 5000);
  }

  return {handleChange, handleSubmit}
};

export default useContactForm