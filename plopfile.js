module.exports = function (plop) {
  plop.setGenerator("file", {
    description: "Generate a new file",
    prompts: [
      {
        type: "list",
        name: "fileType",
        message: "Type of file to generate:",
        choices: ["container", "component"],
      },
      {
        type: "list",
        name: "module",
        message: "Module type to generate:",
        choices: ["Home", "Explore", "Create", "Settings", "Profile"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter folder name please:",
      },
    ],
    actions: (data) => {
      const actions = [];

      if (data.fileType === "container") {
        actions.push({
          type: "add",
          path: `Containers/${data.module}/{{properCase name}}/index.tsx`,
          templateFile: "plop-templates/container/index.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: `Containers/${data.module}/{{properCase name}}/styles.tsx`,
          templateFile: "plop-templates/container/styles.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: `Containers/${data.module}/{{properCase name}}/settings.tsx`,
          templateFile: "plop-templates/container/settings.tsx.hbs",
        });
        actions.push({
          type: "add",
          path: `Containers/${data.module}/{{properCase name}}/{{properCase name}}.Service.tsx`,
          templateFile: "plop-templates/container/service.tsx.hbs",
        });
      } else if (data.fileType === "component") {
        actions.push({
          type: "add",
          path: `app/components/{{properCase name}}/index.tsx`,
          templateFile: "plop-templates/component/index.hbs",
        });
        actions.push({
          type: "add",
          path: `app/components/{{properCase name}}/styles.tsx`,
          templateFile: "plop-templates/component/styles.hbs",
        });
        actions.push({
          type: "add",
          path: `app/components/{{properCase name}}/settings.tsx`,
          templateFile: "plop-templates/component/settings.hbs",
        });
        actions.push({
          type: "add",
          path: `app/components/{{properCase name}}.Service.tsx`,
          templateFile: "plop-templates/component/service.hbs",
        });
      }

      return actions;
    },
  });
};
