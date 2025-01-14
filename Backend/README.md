# Project Setup Instructions

## Install Node

### For Ubuntu/Debian-based Linux:

1. **Update your package list**:
    ```bash
    sudo apt update
    ```

2. **Install Node.js** (using the NodeSource repository to get the latest version):
    - First, install the Node.js repository:
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    ```
    - Replace `16.x` with the desired version if you need a different one.

3. **Install Node.js**:
    ```bash
    sudo apt install -y nodejs
    ```

4. **Verify installation**:
    - Check the installed version of Node.js:
    ```bash
    node -v
    ```
### install packet mananger installation 
1. **install using the `curl` if no other packet manager**
       ```bash
       curl -o- -L https://yarnpkg.com/install.sh | bash
       ```
       #NB: yarn is faster than npm
       OR 
2. **using just yarn**
       ```bash
       yarn install
       yarn --version
       ```

       OR 
3. **install via npm**
       ```bash
       npm install --global yarn
       ```

### Install & Use Remixd
       #The remixd daemon command is used to enable a local file system to be accessible in the Remix IDE. It allows you to work with your local files directly from the browser-based IDE.
       Here’s how you can use the `remixd` command:

1. **installing Remixd using yarn**
       ```bash
       yarn global add @remix-project/remixd
       ```


2. **verify Installation**
       ```bash
       remixd --version
       ```

3. **Use/start remixd**
#. >> open the remix IDE on the browser First before running the below command
       ```bash
       remixd -s /home/eddyweru/GreenXchange/Backend/SmartContracts --remix-ide https://remix.ethereum.org
       ```
#to export and see changes in remix IDE after running command successfully ( it shows timezone details ie EAT ..etc )
4. **configure remix to use VScode Using remixd**
>>> Go to remix IDE >>> file explorer >> connect to local file system >> connect>> choose localhost (dropdown) ....with that the files  should reflect now on the file exploler files tab
