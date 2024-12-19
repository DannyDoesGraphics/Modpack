# Every tick, check if there are any players online
execute if entity @a run scoreboard players set noPlayers no_players_time 0
execute unless entity @a run scoreboard players add noPlayers no_players_time 1

# If the counter reaches 6000 ticks (5 minutes), stop the server
execute if score noPlayers no_players_time matches 6000 run function no_player_shutdown:stop_server
