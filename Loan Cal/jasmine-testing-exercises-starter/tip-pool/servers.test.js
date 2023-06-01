describe('Server functions', () => {
  let serverNameInput, serverForm, serverTbody, allServers, serverId;

  beforeEach(() => {
    // Set up the initial state before each test
    serverNameInput = document.createElement('input');
    serverNameInput.setAttribute('id', 'serverName');
    document.body.appendChild(serverNameInput);

    serverForm = document.createElement('form');
    serverForm.setAttribute('id', 'serverForm');
    document.body.appendChild(serverForm);

    serverTbody = document.createElement('tbody');
    serverTbody.setAttribute('id', 'serverTable');
    const serverTable = document.createElement('table');
    serverTable.appendChild(serverTbody);
    document.body.appendChild(serverTable);

    allServers = {};
    serverId = 0;
  });

  afterEach(() => {
    // Clean up the DOM after each test
    serverNameInput.remove();
    serverForm.remove();
    serverTbody.remove();
  });

  // Write tests for each function in server.js
  describe('submitServerInfo', () => {
    it('should add a new server to allServers and update the table', () => {
      // Test logic here
    });
  });

  describe('updateServerTable', () => {
    it('should update the table with server information', () => {
      // Test logic here
    });
  });

  // Write more tests for other functions...

});
