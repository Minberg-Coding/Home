const _userName = new WeakMap();
const _userEmail = new WeakMap();
const _userPassword = new WeakMap();
const _userId = new WeakMap();
const _userLoggedIn = new WeakMap();

class User {
    constructor(username, email, password) {
        _userName.set(this, username);
        _userEmail.set(this, email);
        _userPassword.set(this, password);
        _userId.set(this, User.incrementId);
        _userLoggedIn.set(this, false);
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
      }

    getInfo(index) {
        const info = [_userName.get(this), _userEmail.get(this), _userPassword.get(this), _userId.get(this), _userLoggedIn.get(this)];
        return info[index]
    }
}


export { User };