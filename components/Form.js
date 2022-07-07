import React from "react";

export default function Form() {
  // attribute settings and text for input, label and paragraph tags
  const formSettings = [
    {
      nameId: "name",
      type: "text",
      placeholder: "Enter your name",
      text: "Name *",
      id: "3",
    },
    {
      nameId: "email",
      type: "email",
      placeholder: "Enter your email address",
      text: "Email *",
      id: "4",
    },
  ];

  return (
    <form
      id="registration"
      action=""
      method="post"
      className="flex flex-col flex-wrap sm:items-start smUp:items-center gap-y-10 max-w-full sm:text-left smUp:text-center">
      {formSettings.map((settings) => (
        <label key={settings.id} htmFor={settings.nameId} form="registration">
          <p key={settings.id} className="text-[#1A75BC]">
            {settings.text}
          </p>
          <input
            key={settings.id}
            id={settings.nameId}
            type={settings.type}
            name={settings.nameId}
            required="required"
            form="registration"
            placeholder={settings.placeholder}
            className="sm:placeholder:text-left smUp:placeholder:text-center text-black border-[3px] placeholder:text-slate-500 border-black focus:border-[#1A75BC]"
          />
        </label>
      ))}
      <label htmlFor="image" form="registration">
        <p className="text-[#1A75BC]">Upload your image *</p>
        <input
          id="image"
          type="file"
          name="image"
          required="required"
          form="registration"
          className="sm:placeholder:text-left smUp:placeholder:text-center"
        />
      </label>

      <button
        form="registration"
        formMethod="post"
        type="submit"
        name="send"
        className="bg-[#1A75BC] hover:bg-[#1A75BC]/80 text-white sm:px-5 smUp:px-20">
        Send
      </button>
    </form>
  );
}
