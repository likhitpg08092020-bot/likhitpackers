import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear old data for this specific test ID if it exists
  const oldBooking = await prisma.booking.findUnique({
    where: { bookingId: 'LPM-KA-2026-000123' }
  })
  
  if (oldBooking) {
    await prisma.bookingStatusHistory.deleteMany({
      where: { bookingId: oldBooking.id }
    })
    await prisma.booking.delete({
      where: { id: oldBooking.id }
    })
  }

  const customer = await prisma.customer.create({
    data: {
      name: 'Ravi Kumar',
      email: `ravi_${Date.now()}@example.com`,
      phone: '9876543210'
    }
  })

  const booking = await prisma.booking.create({
    data: {
      bookingId: 'LPM-KA-2026-000123',
      customerId: customer.id,
      fromLocation: 'Koppal, Karnataka',
      toLocation: 'Bengaluru, Karnataka',
      pickupAddress: 'Hospet Road, Koppal',
      deliveryAddress: 'Indiranagar, Bengaluru',
      serviceType: 'Home Shifting - 2 BHK',
      movingDate: new Date('2026-09-08'),
      status: 'In Transit'
    }
  })

  await prisma.bookingStatusHistory.createMany({
    data: [
      {
        bookingId: booking.id,
        status: 'Booking Confirmed',
        note: 'Customer paid 10% advance.',
        date: new Date('2026-09-01T10:00:00Z')
      },
      {
        bookingId: booking.id,
        status: 'Packing Completed',
        note: 'All fragile items bubble wrapped.',
        date: new Date('2026-09-05T14:30:00Z')
      },
      {
        bookingId: booking.id,
        status: 'Vehicle Dispatched',
        location: 'Koppal Warehouse',
        date: new Date('2026-09-06T08:00:00Z')
      },
      {
        bookingId: booking.id,
        status: 'In Transit',
        location: 'Chitradurga Highway',
        note: 'Expected to reach Bengaluru by evening.',
        date: new Date('2026-09-06T12:00:00Z')
      }
    ]
  })
  
  console.log("Seeding complete for LPM-KA-2026-000123");
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
