// ew totems...

const totem_attribute = "DAM:holding_totem_of_undying";
const max_health_diff_attribute = "DAM:max_health_difference";
const health_diff_attribute = "DAM:health_difference";
const totem_debuff = 0.70;

function totem_debuff_check(player) {
    let isHoldingTotem = player.getMainHandItem().id === 'minecraft:totem_of_undying' || player.getOffHandItem().id === 'minecraft:totem_of_undying';
    let hasAttribute = player.getPersistentData().getBoolean(totem_attribute);

    if (isHoldingTotem && !hasAttribute) {
        let new_max_hp = Math.max(player.getMaxHealth() * totem_debuff, 1);
        let new_hp = player.getHealth() * totem_debuff;
        let max_diff = player.getMaxHealth() - new_max_hp;
        let diff = player.getHealth() - new_hp;

        player.setMaxHealth(new_max_hp);
        player.setHealth(new_hp);
        player.getPersistentData().putBoolean(totem_attribute, true);
        player.getPersistentData().putDouble(max_health_diff_attribute, max_diff);
        player.getPersistentData().putDouble(health_diff_attribute, diff);
        
    } else if (!isHoldingTotem && hasAttribute) {
        const max_diff = player.getPersistentData().getDouble(max_health_diff_attribute);
        const diff = player.getPersistentData().getDouble(health_diff_attribute);
        let new_max_health = player.getMaxHealth() + max_diff;
        let new_health = player.getHealth() + diff;
        new_health = Math.min(new_health, new_max_health);
        player.setMaxHealth(new_max_health);
        player.setHealth(new_health);
        player.getPersistentData().remove(totem_attribute);
        player.getPersistentData().remove(max_health_diff_attribute);
        player.getPersistentData().remove(health_diff_attribute);
    }
}

ServerEvents.loaded(event => {
    event.server.getPlayers().forEach(player => {
        player.setMaxHealth(20);
        player.getPersistentData().remove(totem_attribute);
        player.getPersistentData().remove(health_diff_attribute);
        totem_debuff_check(player);
    });
});

PlayerEvents.tick(event => {
    let player = event.getEntity();
    totem_debuff_check(player);
});
