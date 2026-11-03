# Enterprise Playwright Framework

## Technology
- Playwright
- TypeScript
- Node.js
- Allure

## Architecture
- Follow Page Object Model.
- Keep locators inside page classes.
- Keep test scenarios inside test files.
- Use fixtures for shared objects.
- Reuse utility methods.

## Coding Standards
- Use async/await.
- Use strict TypeScript.
- Prefer getByRole, getByLabel and getByTestId.
- Avoid hard waits.
- Use meaningful names.
- Use explicit assertions.

## Test Standards
- Tests must be independent.
- Support parallel execution.
- Never hardcode credentials.
- Add meaningful test descriptions.
- Capture failure evidence.

## Security
- Never commit secrets.
- Use environment variables.
- Never expose authentication tokens.

## Reporting
- Maintain Allure and HTML reports.