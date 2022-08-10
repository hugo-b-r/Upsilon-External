API=../../api
CC=arm-none-eabi-gcc
OBJCOPY=arm-none-eabi-objcopy
AR=arm-none-eabi-ar
CFLAGS=-DNDEBUG -ggdb3 -I$(API) -Iinc -Os -mcpu=cortex-m7 -mthumb -mfpu=fpv5-sp-d16 -mfloat-abi=hard -fno-common -fdata-sections -ffunction-sections -fno-exceptions -D NUMWORKS
LDFLAGS=-Wl,-L$(API) -Wl,--gc-sections -Wl,--entry=entrypoint --specs=nosys.specs -nostartfiles -Wl,-Ur -lapi

%.o: %.c
	$(CC) $(CFLAGS) -c $<

app.elf: init.o main.o game.o menu.o preferences.o controls.o positions.o peripherals.o
	$(CC) $^ -o $@ $(CFLAGS) $(LDFLAGS)

clean:
	rm -f *.elf *.o
