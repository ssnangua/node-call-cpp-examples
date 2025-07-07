#include <stdio.h>
#include <malloc.h>

extern "C" void *alloc(int size)
{
  return malloc(size);
}

extern "C" void writeFile(char *filename, char *data)
{
  FILE *filePointer;

  filePointer = fopen(filename, "w");

  if (filePointer == NULL)
  {
    perror("Error opening file");
    return;
  }

  fprintf(filePointer, "%s", data);

  fclose(filePointer);
}
