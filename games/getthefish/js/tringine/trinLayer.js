function TrinLayer() {
    TrinLayer.superclass.constructor.apply(this);
    this.autoReviveChildren = false;
    this.children = null;
    this.numChildren = 0;
    this.sortIndex = "";
    this.sortOrder = this.ASCEDING;
}

extend(TrinLayer, TrinBasic);

TrinLayer.prototype.ASCEDNING = -1;
TrinLayer.prototype.DESCENDING = 1;
TrinLayer.prototype.DEPTH_ID = 0;

TrinLayer.prototype.destroy = function() {
    this.kill();

    if (this.children !== null) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null) {
                entity.destroy();
            }
        }

        this.children = [];
        this.numChildren = 0;
        this.sortIndex = this.ASCEDING;

        if (this.parent !== null) {
            this.parent.remove(this);
        }
    }
    TrinLayer.superclass.destroy.apply(this);
};

TrinLayer.prototype.kill = function() {
    if (this.children !== null) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && entity.exists) {
                entity.kill();
            }
        }
    }

    TrinLayer.superclass.kill.apply(this);
};

TrinLayer.prototype.revive = function() {
    TrinLayer.superclass.revive.apply(this);

    if (this.autoReviveChildren && this.children !== null) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && !entity.exists) {
                entity.revive();
            }
        }
    }
};

TrinLayer.prototype.update = function() {
    TrinLayer.superclass.update.apply(this);
    this.updateChildren();
};

TrinLayer.prototype.draw = function(context) {
    this.drawChildren(context);
    TrinLayer.superclass.draw.apply(this, [context]);
};

TrinLayer.prototype.sort = function(index, order) {
    if (index === undefined) {
        index = "y";
    }
    if (order === undefined) {
        order = this.ASCEDING;
    }
    if (this.children !== null) {
        this.sortIndex = index;
        this.sortOrder = order;
        this.children.sort(this.sortHandler);
    }
};

TrinLayer.prototype.add = function(entity) {
    if (this.children === null) {
        this.children = [];
    }

    if (this.children.indexOf(entity) > -1) {
        return entity;
    }

    if (entity.parent !== null) {
        entity.parent.remove(entity);
    }

    entity.parent = this;

    var i = 0;
    var n = this.children.length;
    while (i < n) {
        if (this.children[i] === null) {
            this.children[i] = entity;
            return entity;
        }
        i++;
    }

    this.children[n] = entity;
    this.numChildren++;
    return entity;
};

TrinLayer.prototype.remove = function(entity, splice) {
    if (this.children === null) {
        return entity;
    }

    var i = this.children.indexOf(entity);
    if (i < 0 || i >= this.children.length) {
        return entity;
    }

    this.children[i] = null;
    entity.parent = null;

    if (splice) {
        this.children.splice(i, 1);
        this.numChildren--;
    }

    return entity;
};

TrinLayer.prototype.contains = function(entity) {
    if (this.children === null) {
        return false;
    }
    return (this.children.indexOf(entity) >= 0) ? true : false;
};

TrinLayer.prototype.recycle = function(_class) {
    var entity = this.getAvailable(_class);
    if (entity !== null) {
        return entity;
    }

    if (_class === undefined || _class === null) {
        return null;
    }

    entity = new _class();
    return (entity instanceof TrinBasic) ? this.add(entity) : null;
};

TrinLayer.prototype.replace = function(oldEntity, newEntity) {
    if (this.children === null) {
        return newEntity;
    }

    var i = this.children.indexOf(oldEntity);
    if (i >= 0 && i < this.children.length) {
        if (newEntity.parent !== null && newEntity.parent !== this) {
            newEntity.parent.remove(newEntity);
            newEntity.parent = this;
        }

        this.children[i] = newEntity;
        oldEntity.parent = null;
    }

    return newEntity;
};

TrinLayer.prototype.swap = function(entityA, entityB) {
    if (this.children === null) {
        return;
    }

    var iA = this.children.indexOf(entityA);
    var iB = this.children.indexOf(entityB);
    if (iA >= 0 && iA < this.children.length && iB >= 0 && iB < this.children.length)
    {
        this.children[iA] = entityB;
        this.children[iB] = entityA;
    }
};

TrinLayer.prototype.removeAll = function(destroy) {
    if (destroy === undefined) {
        destroy = true;
    }
    if (this.children === null) {
        return;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null) {
            if (destroy) {
                entity.destroy();
            }
            entity.parent = null;
        }
        this.children[i] = null;
    }

    this.numChildren = 0;
};

TrinLayer.prototype.getAvailable = function(_class) {
    if (this.children === null) {
        return null;
    }
    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null && !entity.exists && ((_class === undefined) || (entity instanceof _class))) {
            return entity;
        }
    }
    return null;
};

TrinLayer.prototype.getExtant = function(_class) {
    if (this.children === null) {
        return null;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren)
    {
        entity = this.children[i++];
        if (entity !== null && entity.exists && ((_class === null) || (entity instanceof _class))) {
            return entity;
        }
    }

    return null;
};

TrinLayer.prototype.getAlive = function(_class) {
    if (this.children === null) {
        return null;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null && entity.exists && entity.alive &&
                ((_class === null) || (entity instanceof _class))) {
            return entity;
        }
    }

    return null;
};

TrinLayer.prototype.getDead = function(_class) {
    if (this.children === null) {
        return null;
    }

    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null && !entity.alive &&
                ((_class === null) || (entity instanceof _class))) {
            return entity;
        }
    }

    return null;
};

TrinLayer.prototype.setAll = function(variableName, value, recurse) {
    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null) {
            if (recurse && entity instanceof TrinLayer) {
                entity.setAll(variableName, value, recurse);
            } else {
                entity[variableName] = value;
            }
        }
    }
};

TrinLayer.prototype.callAll = function(functionName, args, recurse) {
    var entity;
    var i = 0;
    while (i < this.numChildren) {
        entity = this.children[i++];
        if (entity !== null) {
            if (recurse && entity instanceof TrinLayer) {
                entity.callAll(functionName, args, recurse);
            } else if (typeof entity[functionName] === "function") {
                entity[functionName](args);
            }
        }
    }
};

TrinLayer.prototype.updateChildren = function() {
    if (this.children !== null) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && entity.exists) {
                if (entity.active) {
                    entity.update();
                }
            }
        }
    }
};

TrinLayer.prototype.drawChildren = function(context) {
    if (this.children !== null) {
        var entity;
        var i = 0;
        while (i < this.numChildren) {
            entity = this.children[i++];
            if (entity !== null && entity.exists && entity.visible) {
                entity.draw(context);
            }
        }
    }
};

TrinLayer.prototype.sortLayer = function(entity1, entity2) {
    if (entity1 === null) {
        return this.sortOrder;
    } else if (entity2 === null) {
        return -this.sortOrder;
    }

    if (entity1[this.sortIndex] < entity2[this.sortIndex]) {
        return this.sortOrder;
    } else if (entity1[this.sortIndex] > entity2[this.sortIndex]) {
        return -this.sortOrder;
    }
    return 0;
};