

import pygame
from random import randrange

REZ = 800
SIZE = 50

x, y = randrange(0, REZ, SIZE), randrange(0, REZ, SIZE)
apple = randrange(0, REZ, SIZE), randrange(0, REZ, SIZE)
dirt = {'W': True, 'S': True, 'A': True, 'D': True}
dirs = {'UP': True, 'DOWN': True, 'LEFT': True, 'RIGHT': True}
lenght = 1
snake = [(x, y)]
dx, dy = 0, 0
fps = 5
score = 0

pygame.init()
pygame.mixer.init()
icon = pygame.image.load('images/icon.png')
pygame.display.set_caption('Snake')
pygame.display.set_icon(icon)
sc = pygame.display.set_mode([REZ, REZ])
clock = pygame.time.Clock()
font_score = pygame.font.SysFont('Arial', 26)
font_end = pygame.font.SysFont('Arial', 56)
img = pygame.image.load('images/fon.png').convert()
sound = pygame.mixer.music.load('music/1.mp3')

while True:
    sc.blit(img, (0, 0))
    # draw snake and apple
    [(pygame.draw.rect(sc, pygame.Color('green'), (i, j, SIZE - 2, SIZE - 2))) for i, j in snake]
    pygame.draw.rect(sc, pygame.Color('red'), (*apple, SIZE, SIZE))
    # score
    render_score = font_score.render(f'SCORE: {score}', 1, pygame.Color('orange'))
    sc.blit(render_score, (5, 5))
    # snake move
    x += dx * SIZE
    y += dy * SIZE
    snake.append((x, y))
    snake = snake[-lenght:]
    # eat apple
    if snake[-1] == apple:
        apple = randrange(0, REZ, SIZE), randrange(0, REZ, SIZE)
        lenght += 1
        score += 1
        fps += 1
    # game over
    if x < 0 or x > REZ or y < 0 or y > REZ or len(snake) != len(set(snake)):
        while True:
            render_end = font_end.render('GAME OVER', 1, pygame.Color('Orange'))
            sc.blit(render_end, (REZ // 2 - 200, REZ // 3))
            pygame.display.flip()
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    exit()

    pygame.display.flip()
    clock.tick(fps)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()

            # control
    key = pygame.key.get_pressed()
    if key[pygame.K_w] and dirt['W']:
        dx, dy = 0, -1
        dirt = {'W': True, 'S': False, 'A': True, 'D': True}
    if key[pygame.K_s] and dirt['W']:
        dx, dy = 0, 1
        dirt = {'W': False, 'S': True, 'A': True, 'D': True}
    if key[pygame.K_a] and dirt['A']:
        dx, dy = -1, 0
        dirt = {'W': True, 'S': True, 'A': True, 'D': False}
    if key[pygame.K_d] and dirt['D']:
        dx, dy = 1, 0
        dirt = {'W': True, 'S': True, 'A': False, 'D': True}
    if key[pygame.K_UP] and dirs['UP']:
        dx, dy = 0, -1
        dirs = {'UP': True, 'DOWN': False, 'LEFT': True, 'RIGHT': True}
    if key[pygame.K_DOWN] and dirs['DOWN']:
        dx, dy = 0, 1
        dirs = {'UP': False, 'DOWN': True, 'LEFT': True, 'RIGHT': True}
    if key[pygame.K_LEFT] and dirs['LEFT']:
        dx, dy = -1, 0
        dirs = {'UP': True, 'DOWN': True, 'LEFT': True, 'RIGHT': False}
    if key[pygame.K_RIGHT] and dirs['RIGHT']:
        dx, dy = 1, 0
        dirs = {'UP': True, 'DOWN': True, 'LEFT': False, 'RIGHT': True}

