function TrinStorage() {
}

TrinStorage.prototype.supportsStorage = false;

TrinStorage.prototype.save = function(name, value) {
    if (this.supportsStorage) {
        try {
            localStorage.setItem(name, value);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
};

TrinStorage.prototype.load = function(name) {
    if (this.supportsStorage) {
        try {
            return localStorage.getItem(name);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
    return null;
};

TrinStorage.prototype.remove = function(name) {
    if (this.supportsStorage) {
        try {
            localStorage.removeItem(name);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
};

TrinStorage.prototype.clear = function() {
    if (this.supportsStorage) {
        try {
            localStorage.clear();
        } catch (e) {
            this.supportsStorage = false;
        }
    }
};

TrinStorage.prototype.length = function() {
    if (this.supportsStorage) {
        try {
            return localStorage.length;
        } catch (e) {
            this.supportsStorage = false;
        }
    }
    return 0;
};

TrinStorage.prototype.getKey = function(index) {
    if (this.supportsStorage && index >= 0 && index < this.length) {
        try {
            return localStorage.key(key);
        } catch (e) {
            this.supportsStorage = false;
        }
    }
    return null;
};