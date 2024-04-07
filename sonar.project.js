const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "MY-TOKEN",
    options: {
      "sonar.sources": "./src",
      "sonar.tests": "./__tests__",
      "sonar.test.inclusions": "./__tests__/**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {}
);
