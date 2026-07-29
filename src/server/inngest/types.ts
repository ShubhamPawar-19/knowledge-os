export type InngestEvents = {
  "document/process": {
    data: {
      documentId: string;
    };
  };

  "chat/title.generate": {
    data: {
      chatId: string;
    };
  };

  "document/reprocess": {
    data: {
      documentId: string;
    };
  };
};