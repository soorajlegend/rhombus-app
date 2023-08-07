"use client"
import React, { useEffect } from "react";

const WatsonChatIntegration = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "fc05781f-3ee9-4bd2-97b3-c67741534fb4",
      region: "eu-gb",
      serviceInstanceID: "775ed409-a3dd-4bbe-a788-2b0b8b0d6dda",
      onLoad: function (instance) {
        instance.render();
      },
    };
    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <></>;
};

export default WatsonChatIntegration;
