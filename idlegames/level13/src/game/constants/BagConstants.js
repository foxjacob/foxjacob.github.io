define(['ash', 'game/constants/ItemConstants'], function (Ash, ItemConstants) {

    var BagConstants = {
        
        CAPACITY_RESOURCE: 1,
        CAPACITY_ITEM_INGREDIENT: 0.1,
        CAPACITY_ITEM_DEFAULT: 1,
        CAPACITY_CURRENCY: 0.05,
        
        updateCapacity: function (bagComponent, rewards, playerResources, playerAllItems) {
            var originalResC = this.getResourcesCapacity(playerResources.resources);
            var discardedResC = this.getResourcesCapacity(rewards.discardedResources);
            var lostResC = this.getResourcesCapacity(rewards.lostResources);
            var selectedResC = this.getResourcesCapacity(rewards.selectedResources);
            var gainedResC = this.getResourcesCapacity(rewards.gainedResources);
            
            var originalItemC = this.getItemsCapacity(playerAllItems);
            var discardedItemC = this.getItemsCapacity(rewards.discardedItems);
            var lostItemC = this.getItemsCapacity(rewards.lostItems);
            var selectedItemC = this.getItemsCapacity(rewards.selectedItems);
            var gainedItemC = this.getItemsCapacity(rewards.gainedItems);
            
            var selectionStartCapacity = originalResC + originalItemC;
            var selectedCapacity = originalResC - discardedResC - lostResC + selectedResC + originalItemC - discardedItemC - lostItemC + selectedItemC;
            var selectableCapacity = originalResC - lostResC + gainedResC + originalItemC - lostItemC + gainedItemC;

            bagComponent.selectionStartCapacity = selectionStartCapacity;
            bagComponent.selectedCapacity = selectedCapacity;
            bagComponent.selectableCapacity = selectableCapacity;
        },
        
        getItemsCapacity: function (itemList) {
            var capacity = 0;
            for(var i = 0; i < itemList.length; i++) {
                if (itemList[i].equipped) continue;
                capacity += this.getItemCapacity(itemList[i]);
            }
            return capacity;
        },

        getItemCapacity: function (itemVO) {
            if (itemVO.type === ItemConstants.itemTypes.bag) return 0;
            if (itemVO.type === ItemConstants.itemTypes.uniqueEquipment) return 0;
            if (itemVO.type === ItemConstants.itemTypes.exploration) return BagConstants.CAPACITY_ITEM_DEFAULT;
            if (itemVO.type === ItemConstants.itemTypes.ingredient) return BagConstants.CAPACITY_ITEM_INGREDIENT;
            if (itemVO.type === ItemConstants.itemTypes.shoes) return BagConstants.CAPACITY_ITEM_DEFAULT;
            return 2;
        },
        
        getResourcesCapacity: function (resourcesVO) {
            return resourcesVO.getTotal() * BagConstants.CAPACITY_RESOURCE;
        },
        
        getResourceCapacity: function (resourceName) {
            return BagConstants.CAPACITY_RESOURCE;
        }

    };
    
    return BagConstants;
});
